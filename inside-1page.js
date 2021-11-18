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
    USD: "United States Dollar",
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
    input: '',
    amount: 0,
    currentCurrency: '', // USD
    exchangedCurrency: '', // GBP
    currentCurrencyRate: 0, // 25
    exchangedCurrencyRate: 0, // 28
    currencyDate: '',
};

let render;

const setAmount= (amount) => {
    state = { ...state, amount };
    if (render)
    render();
}

const setCurrentCurrency = (currentCurrency) => {
    state = { ...state, currentCurrency };
    if (render)
    render();
}

const setExchangedCurrency = (exchangedCurrency) => {
    state = {...state, exchangedCurrency};
    if (render)
    render();
}

const setCurrentCurrencyRate = (currentCurrencyRate) => {
    state = {...state, currentCurrencyRate};
    if (render)
    render();
};

const setExchangedCurrencyRate = (exchangedCurrencyRate) => {
    state = {...state, exchangedCurrencyRate};
    if (render)
    render();
};

const setCurrencyDate = (currencyDate) => {
    state = { ...state, currencyDate };
    if (render)
        render();
}


const adaptAmount = (input) => +input.match(/^\d+/) || 0;

const adaptCurrentCurrency = (input) => (input.match(/\s[a-zA-Z]{3}/) ?? [''])[0].toUpperCase().trim();
  
// const adaptExchangedCurrency = (input) => (input.match(/\w+$/) ?? [''])[0].toUpperCase();
const adaptExchangedCurrency = (input) =>(input.split('').reverse().join('').match(/[a-zA-Z]{3}\s/) ?? [''])[0]
    .split('').reverse().join('').toUpperCase().trim();

const adaptCurrentCurrencyRate = (rates, currentCurrency) => rates[currentCurrency];

const adaptExchangedCurrencyRate = (rates, exchangedCurrency) => rates[exchangedCurrency];

const adaptExchangedCurrencyResult = (exchangedCurrencyRate, amount) => (exchangedCurrencyRate * amount).toFixed(2);

const adaptCurrentCurrencyToExchangedCurrencyResult = (amount, exchangedCurrencyRate) => (amount / exchangedCurrencyRate).toFixed(4);


const adaptCurrencyDate = (utcTime) => new Date(utcTime).toLocaleString();


const getCurrencyRatesByBase = () => {
    const baseCurrecy = state.currentCurrency;
    fetch(`https://v6.exchangerate-api.com/v6/7e2108e0c8b862b6898e895a/latest/${baseCurrecy}`)
        .then(response => response.json())
        .then(({ conversion_rates, time_last_update_utc }) => {
            const currentCurrencyRate = adaptCurrentCurrencyRate(conversion_rates, state.currentCurrency);
            const exchangedCurrencyRate = adaptExchangedCurrencyRate(conversion_rates, state.exchangedCurrency);
            const currencyTime = adaptCurrencyDate(time_last_update_utc);

            setCurrentCurrencyRate(currentCurrencyRate);
            setExchangedCurrencyRate(exchangedCurrencyRate);
            setCurrencyDate(currencyTime);
        });
}

const input = document.getElementsByClassName('input')[0];
const currentCurrency = document.getElementsByClassName('current-currency')[0];
const exchangedResult = document.getElementsByClassName('exchanged-result')[0];
const currencyDate = document.getElementsByClassName('date')[0];
const baseCurrentCurrencyRate = document.getElementsByClassName('current-currency-rate')[0];
const baseExchangedCurrencyRate = document.getElementsByClassName('exchanged-currency-rate')[0];

input.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        const {value} = event.target;
        console.log(event.target.value);

        const currentCurrency = adaptCurrentCurrency(value);
        const exchangedCurrency = adaptExchangedCurrency(value);
        const amount = adaptAmount(value);

        setCurrentCurrency(currentCurrency);
        setExchangedCurrency(exchangedCurrency);
        setAmount(amount);
        if (currentCurrency && exchangedCurrency) 
            getCurrencyRatesByBase();
    }
})

const getExchangeRateRowsHtml = () => `
    <p class="exchanged-result">
        ${adaptExchangedCurrencyResult(state.exchangedCurrencyRate, state.amount)} 
        ${currencyCodeToCanonicalNameMap[state.exchangedCurrency] || ""}
    </p>`;

const getCurrentCurrencyRowHtml = () => `
    <p class="current-currency">
        ${state.amount} 
        ${currencyCodeToCanonicalNameMap[state.currentCurrency] || ""} 
        ${state.currentCurrency ? 'equals' : ''}
    </p>`;

const getBaseCurrentCurrencyRateHtml = () => `
    <p class="current-currency-rate">
        1 ${state.currentCurrency} = 
            ${adaptExchangedCurrencyResult(state.exchangedCurrencyRate, 1) || ""} 
                ${state.exchangedCurrency || ''}
    </p>`;

const getBaseExchangedCurrencyRateHtml = () => `
    <p class="exchanged-currency-rate">
        1 ${state.exchangedCurrency} = 
            ${adaptCurrentCurrencyToExchangedCurrencyResult(1, state.exchangedCurrencyRate || "")} 
                ${state.currentCurrency || ''}
    </p>`;

const getCurrencyDateHtml = () => `
    <p class="title currency-update-date">
        ${state.currencyDate}
    </p>`;

render = () => {
    exchangedResult.innerHTML = getExchangeRateRowsHtml();
    currencyDate.innerHTML = getCurrencyDateHtml();
    currentCurrency.innerHTML = getCurrentCurrencyRowHtml();
    baseCurrentCurrencyRate.innerHTML = getBaseCurrentCurrencyRateHtml();
    baseExchangedCurrencyRate.innerHTML = getBaseExchangedCurrencyRateHtml();
}

render();

setCurrentCurrency('USD');

