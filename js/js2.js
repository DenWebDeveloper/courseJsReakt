'use strict'

const title = document.getElementsByTagName('h1')[0];
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const inputRange = document.querySelector('.rollback input[type = "range"]');
const rangValue = document.querySelector('.rollback span.range-value');

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens  = document.querySelectorAll ('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    servicesPercent: {},
    servicesNumber: {},
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    allCount: 0,
    rollback: 10,
    init: function () {
        appData.addTitle()
        startBtn.addEventListener('click', appData.allCountScreens)
        buttonPlus.addEventListener('click', appData.addScreenBlock)
        inputRange.addEventListener('change', appData.addRollback)
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    allCountScreens: function () {
        if(appData.addScreens() !== true) {
            alert('Не выбран тип или количество экранов')
        } else appData.start();
    },
    addScreens: function () {
        appData.screens.length = 0;
        screens = document.querySelectorAll ('.screen');

        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index,
                name: selectName,
                count: +input.value,
                price: +select.value * +input.value
            })
        });

        if (appData.screens.find(item => item.price === 0)) {
            return false;
        } else {
            return true;
        }
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)
    },
    addServices: function () {
        otherItemsPercent.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if(check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })

        otherItemsNumber.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if(check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }

        appData.screens.forEach(function (item) {
            appData.allCount += +item.count;
        })

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

        appData.servicePercentPrice = +appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
        totalCountRollback.value = appData.servicePercentPrice;
    },
    showResult: function () {
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
        totalCount.value = appData.allCount;
    },
    addRollback: function () {
        appData.rollback = +inputRange.value;
        rangValue.textContent = appData.rollback  + "%";
    },
    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.addPrices()
        appData.showResult()
        appData.logger()
    },
    logger: function () {
        console.log(screens);
    }
}

appData.init();
