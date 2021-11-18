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


// state - это хранилище ??состояния??, которое будет хранить и принимать в себя данные 
let state = {
    currentCurrency: '',
    availableCurrencies: [],
    currencyList: [],
    currencyDate: '',
}

let render;
/* ??? maxim ask: что значит задаем? */
/* render задаем здесь для возможности его использования в начале +
/* !!! maxim answer: определяем (то есьт создаем, но ничего не кладем (присваиваем))
*/

/* функция setCurrentCurrency обновляет текущую валюту
принимает аргумент currentCurrency типа "string", которая является семантически валютой,
добавляет данные в state, копируя старые данные (...state), обновляет state
*/
const setCurrentCurrency = (currentCurrency) => {
    state = { ...state, currentCurrency };
}

/* функция setAvailableCurrencies ??обновляет?? массив доступных валют
принимает аргумент availableCurrencies типа 'arr', который является массивом доступных валют,
добавляет данные в state, копирует старые данные (...state), обновляет state
if (render) 
*/
const setAvailableCurrencies = (availableCurrencies) => {
    state = { ...state, availableCurrencies };
    if (render)
        render();
}

/* функция setCurrencyList обновляет массив валют
принимает в качетстве аргумента текущий лист валют currencyList, типа 'arr[string]', который является массивом списка валют
добавляет данные в state, копируя старые данные (...state), обновляет state
*/
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
/* функция adaptCurrencyRates адаптирует данные для ??таблички?? !!(state)!! - RowsHtml (см функцию - getCurrencyRowsHtml)
 принимает в качестве аргумента ставки - rates и основную валюту - base
 оборачивая их в объект, мы фильтруем входящие данные на совпадение, 
 если валюта [currency] не равна основной выбранной валюте, мы проходимся по ней посредством метода map,
 который принимает в себя валюту и ставку [currency, rate], адаптируя их для state
 name: currency, 
 pair: [currency, base], 
 rate: rate.toFixed(2), 
 фильтр принимает в качестве аргумента имя (наименование валюты - name: "Zimbabwean Dollar") 
 отсортировывает валюту из списка currencyCodeToCanonicalNameMap, 
 если имя есть в списке, мы его отображаем.
*/
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

/* функция adaptCurrencyList адаптирует массив валют
принимает аргумент валютные ставки - rates, 
оборачивает их в объект, затем фильтрует,
фильтр принимает в качестве аргумента валюту, и возвращает только ту, что есть в списке currencyCodeToCanonicalNameMap
*/
const adaptCurrencyList = (rates) => Object.keys(rates).filter(currency=>currencyCodeToCanonicalNameMap[currency]);

const adaptCurrencyDate = (utcTime) => new Date(utcTime).toLocaleString();

/* функция getCurrencyRatesByBase, которая получает валютную ставку из api 
присваиваем переменной baseCurrecy - текущую валюту из стейта
с помощью функции fetch делаем запрос, скачивающий содержимое по адресу url, 
в конце добавляем через интерполяцию основную валюту
затем полученный ответ декодирует в формате JSON
затем из полученного ответа находим объект с содержимым данных conversion_rates
присваиваем переменной availableCurrencies пришедшие данные адаптируя их с помощью функции adaptCurrencyList, 
которая принимает полученный ранее объект с содержимым данных conversion_rates 
получая адаптированный массив с доступными валютами - ["USD","AED","AFN","ALL","AMD"...]
присваиваем переменной сurrencyRates пришедшие данные адаптируя их с помощью функции adaptCurrencyRates, 
которая принимает первым аргументом полученный ранее объект с содержимым данных conversion_rates
и вторым аргументом основную валюту 
получая адаптированный массив объектов с валютными ставками и основной валютой - [{"name":"United Arab Emirates Dirham","pair":["AED","USD"],"rate":"3.67"}]
далее вызываем функцию setAvailableCurrencies которая принимает "доступные валюты" 
далее вызываем функцию setCurrencyList которая принимает "валютные ставки"
*/
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

// contentTable - находим элемент по классу content-table. В возвращаемой коллекции выбираем первый элемент, потому что он
//только один (в коллекции)
const contentTable = document.getElementsByClassName('content-table')[0];

// currencySelector - находим ??класс?? base-currency-select под первым элементом 
const currencySelector = document.getElementsByClassName('base-currency-select')[0];

const currencyDate = document.getElementsByClassName('currency-update-date')[0];

/* добавляем addEventListener на селектор 
который принимает в качестве аргументов наименование изменений 'change' и событие event
event.preventDefault - означает что если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно. 
если было изменение - выбрана другая валюта то value перезаписывается
вызывается функция setCurrentCurrency, которая принимает в себя value, для обновления текущей валюты
вызывается функция getCurrencyRatesByBase, которая обновляет данные в таблице в связи с измененной текущей валютой
*/
currencySelector.addEventListener('change', event => {
    event.preventDefault;
    const { value } = event.target;
    setCurrentCurrency(value);
    getCurrencyRatesByBase();
})

/* функция getCurrencyRowsHtml получает RowsHtml (табличку)
адаптируем данные из state.currencyList посредством метода map мы берем объект с 3 элементами name, pair, rate, 
${name} - наименование валюты
${pair[0]} - код валюты 
${pair[1]} - основная валюта
${rate} - валютная ставка
и создаем компонент ряда данных о валютной паре ввиде Html  строки, а потом получившиеся Html ряды конкотенируем 
благодаря методу join('\n')
*/
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

/* функция getSelectorHtml получает SelectorHtml 
посредством прохождения методом map по state.availableCurrencies мы принимаем валюту - currency, 
получая option SelectorHtml c интерполяцией для заполнения валюты
*/
const getSelectorHtml = () => state.availableCurrencies.map(
    (currency) => `<option value="${currency}">${currency}</option>`).join('\n');

const getCurrencyDateHtml = () => `<p class="title currency-update-date">Exchange rates for: ${state.currencyDate}</p>`

/* функция render рендерит 
*/
render = () => {
    contentTable.innerHTML = getCurrencyRowsHtml();
    currencySelector.innerHTML = getSelectorHtml();
    currencyDate.innerHTML = getCurrencyDateHtml();
}
//первичный рендер при загрузке js на странице 
render();

// первичная установка базовой валюты при загрузке js на странице 
setCurrentCurrency('KZT');

// первичный запрос для получения данных по базовой валюте при загрузке js на странице 
getCurrencyRatesByBase();
