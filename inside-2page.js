const currencyCodeToCanonicalNameMap = {
    AED: "United Arab Emirates Dirham",
    AFN: "Afghan Afghani",
    ALL: "Albanian Lek",
    AMD: "Armenian Dram",
    ARS: "Argentine Peso",
    AUD: "Australian Dollar",
    AZN: "Azerbaijani Manat",
    BAM: "Bosnia-Herzegovina Convertible Mark",
    BDT: "Bangladeshi Taka",
    BGN: "Bulgarian Lev",
    BHD: "Bahraini Dinar",
    BIF: "Burundian Franc",
    BND: "Brunei Dollar",
    BOB: "Bolivian Boliviano",
    BRL: "Brazilian Real",
    BWP: "Botswanan Pula",
    BYN: "Belarusian Ruble",
    BZD: "Belize Dollar",
    CAD: "Canadian Dollar",
    CDF: "Congolese Franc",
    CHF: "Swiss Franc",
    CLP: "Chilean Peso",
    CNY: "Chinese Yuan",
    COP: "Colombian Peso",
    CRC: "Costa Rican Colón",
    CVE: "Cape Verdean Escudo",
    CZK: "Czech Republic Koruna",
    DJF: "Djiboutian Franc",
    DKK: "Danish Krone",
    DOP: "Dominican Peso",
    DZD: "Algerian Dinar",
    EEK: "Estonian Kroon",
    EGP: "Egyptian Pound",
    ERN: "Eritrean Nakfa",
    ETB: "Ethiopian Birr",
    EUR: "Euro",
    GBP: "British Pound Sterling",
    GEL: "Georgian Lari",
    GHS: "Ghanaian Cedi",
    GNF: "Guinean Franc",
    GTQ: "Guatemalan Quetzal",
    HKD: "Hong Kong Dollar",
    HNL: "Honduran Lempira",
    HRK: "Croatian Kuna",
    HUF: "Hungarian Forint",
    IDR: "Indonesian Rupiah",
    ILS: "Israeli New Sheqel",
    INR: "Indian Rupee",
    IQD: "Iraqi Dinar",
    IRR: "Iranian Rial",
    ISK: "Icelandic Króna",
    JMD: "Jamaican Dollar",
    JOD: "Jordanian Dinar",
    JPY: "Japanese Yen",
    KES: "Kenyan Shilling",
    KHR: "Cambodian Riel",
    KMF: "Comorian Franc",
    KRW: "South Korean Won",
    KWD: "Kuwaiti Dinar",
    KZT: "Kazakhstani Tenge",
    LBP: "Lebanese Pound",
    LKR: "Sri Lankan Rupee",
    LTL: "Lithuanian Litas",
    LVL: "Latvian Lats",
    LYD: "Libyan Dinar",
    MAD: "Moroccan Dirham",
    MDL: "Moldovan Leu",
    MGA: "Malagasy Ariary",
    MKD: "Macedonian Denar",
    MMK: "Myanma Kyat",
    MOP: "Macanese Pataca",
    MUR: "Mauritian Rupee",
    MXN: "Mexican Peso",
    MYR: "Malaysian Ringgit",
    MZN: "Mozambican Metical",
    NAD: "Namibian Dollar",
    NGN: "Nigerian Naira",
    NIO: "Nicaraguan Córdoba",
    NOK: "Norwegian Krone",
    NPR: "Nepalese Rupee",
    NZD: "New Zealand Dollar",
    OMR: "Omani Rial",
    PAB: "Panamanian Balboa",
    PEN: "Peruvian Nuevo Sol",
    PHP: "Philippine Peso",
    PKR: "Pakistani Rupee",
    PLN: "Polish Zloty",
    PYG: "Paraguayan Guarani",
    QAR: "Qatari Rial",
    RON: "Romanian Leu",
    RSD: "Serbian Dinar",
    RUB: "Russian Ruble",
    RWF: "Rwandan Franc",
    SAR: "Saudi Riyal",
    SDG: "Sudanese Pound",
    SEK: "Swedish Krona",
    SGD: "Singapore Dollar",
    SOS: "Somali Shilling",
    SYP: "Syrian Pound",
    THB: "Thai Baht",
    TND: "Tunisian Dinar",
    TOP: "Tongan Paʻanga",
    TRY: "Turkish Lira",
    TTD: "Trinidad and Tobago Dollar",
    TWD: "New Taiwan Dollar",
    TZS: "Tanzanian Shilling",
    UAH: "Ukrainian Hryvnia",
    UGX: "Ugandan Shilling",
    USD: "US Dollar",
    UYU: "Uruguayan Peso",
    UZS: "Uzbekistan Som",
    VEF: "Venezuelan Bolívar",
    VND: "Vietnamese Dong",
    XAF: "CFA Franc BEAC",
    XOF: "CFA Franc BCEAO",
    YER: "Yemeni Rial",
    ZAR: "South African Rand",
    ZMK: "Zambian Kwacha",
    ZWL: "Zimbabwean Dollar",
}

let state = {
    currentCurrency: '',
    availableCurrencies: [],
    currencyList: [],
    currencyDate: '',
}

let render;

const setCurrentCurrency = (currentCurrency) => {
    state = { ...state, currentCurrency };
}

const setAvailableCurrencies = (availableCurrencies) => {
    state = { ...state, availableCurrencies };
    if (render)
        render();
}

const setCurrencyList = (currencyList) => {
    state = { ...state, currencyList };
    if (render)
        render();
}

const setCurrencyDate = (currencyDate) => {
    state = { ...state, currencyDate };
    if (render)
        render();
}

const adaptCurrencyRates = (rates, base) => {
    console.log({rates, oe: Object.entries(rates), base});
    return Object.entries(rates)
    .filter(([currency]) => currency !== base)
    .map(([currency, rate]) => ({
        name: currencyCodeToCanonicalNameMap[currency],
        pair: [currency, base],
        rate: rate.toFixed(2),
    }))
    .filter(({name}) => name)
};

const adaptCurrencyList = (rates) => Object.keys(rates).filter(currency=>currencyCodeToCanonicalNameMap[currency]);

const adaptCurrencyDate = (utcTime) => new Date(utcTime).toLocaleString();

const getCurrencyRatesByBase = () => {
    const baseCurrecy = state.currentCurrency;
    fetch(`https://v6.exchangerate-api.com/v6/7e2108e0c8b862b6898e895a/latest/${baseCurrecy}`)
        .then(response => response.json())
        .then(({ conversion_rates, time_last_update_utc }) => {
            const availableCurrencies = adaptCurrencyList(conversion_rates);
            const currencyRates = adaptCurrencyRates(conversion_rates, baseCurrecy);
            const currencyTime = adaptCurrencyDate(time_last_update_utc);
 
            setAvailableCurrencies(availableCurrencies);
            setCurrencyList(currencyRates);
            setCurrencyDate(currencyTime);
        });
}

const contentTable = document.getElementsByClassName('content-table')[0];

const currencySelector = document.getElementsByClassName('base-currency-select')[0];

const currencyDate = document.getElementsByClassName('currency-update-date')[0];

currencySelector.addEventListener('change', event => {
    event.preventDefault;
    const { value } = event.target;
    setCurrentCurrency(value);
    getCurrencyRatesByBase();
})

const getCurrencyRowsHtml = () =>
    state.currencyList.map(
        ({ name, pair, rate }) => `
        <div class="content-row">
            <span class="currency">1 ${name}</span>
            <span class="currency-code">${pair[0]} / ${pair[1]}</span>
            <span class="exchange-rate">${rate}</span>
        </div>
         `
    ).join('\n');

const getSelectorHtml = () => state.availableCurrencies.map(
    (currency) => `<option value="${currency}">${currency}</option>`).join('\n');

const getCurrencyDateHtml = () => `<p class="title currency-update-date">Exchange rates for: ${state.currencyDate}</p>`

render = () => {
    contentTable.innerHTML = getCurrencyRowsHtml();
    currencySelector.innerHTML = getSelectorHtml();
    currencyDate.innerHTML = getCurrencyDateHtml();
}

render();

setCurrentCurrency('KZT');

getCurrencyRatesByBase();
