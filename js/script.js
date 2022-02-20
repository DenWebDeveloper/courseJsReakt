"use strict";
// Задание 1 Урок 9

// Объявление переменных
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

let screens = document.querySelectorAll('.screen');

const appData = {
    
    title: document.getElementsByTagName("h1")[0],
    startBtn: document.getElementsByClassName("handler_btn")[0],
    buttonPlus  : document.querySelector(".screen-btn"),
    items1: document.querySelectorAll('.percent'),
    items2: document.querySelectorAll('.number'),
    inputTypeRange: document.querySelector('.rollback input[type = "range"]'),
    span: document.querySelector('.rollback .range-value'),
    total: document.getElementsByClassName('total-input')[0],
    totalCount: document.getElementsByClassName('total-input')[1],
    totalCountOther: document.getElementsByClassName('total-input')[2],
    fullTotalCount: document.getElementsByClassName('total-input')[3],
    totalCountRolback: document.getElementsByClassName('total-input')[4],
    screens: [],
    screenPrice: 0,
    allCount: 0,
    rollback: 0,
    adaptive: true,
    servicePricePercent: 0,
    servicePriceNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},




    init: function() {

        appData.addTitle();
        appData.start();

        appData.startBtn.addEventListener('click', appData.start);

        appData.buttonPlus.addEventListener('click', appData.addScreenBlock);
        appData.inputTypeRange.addEventListener('input', appData.addRollback);
    },

    addTitle: function(){

        document.title = appData.title.textContent;
    },
 
    start: function() {

        if (!appData.addScreens()) {
            return false;
        }
        
        appData.addServices();
        appData.addPrices();
        appData.showResult();
        
        // appData.getServicePercentPrices();
        appData.loger();
    },

    showResult: function(){
        appData.total.value = appData.screenPrice;
        appData.totalCountOther.value = appData.servicePricePercent + appData.servicePriceNumber;
        appData.fullTotalCount.value = appData.fullPrice;
        appData.totalCount.value = appData.allCount;
      

    },

    addRollback: function (event) {

        appData.rollback = event.target.value;
        appData.span.textContent = appData.rollback +'%';
        
        
    },

    allCountScreens: function () {
        if(appData.addScreens() !== true) {
            alert('Не выбран тип или количество экранов');
        } else {
            appData.start();
        }
    },

    addScreens: function() {
        appData.screens.length = 0;
        screens = document.querySelectorAll('.screen');

        screens.forEach(function(screen, index){
            
            const select = screen.querySelector("select");
            const input = screen.querySelector("input");
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index, 
                name: selectName, 
                price: +select.value * +input.value,
                count: +input.value,
            });

        
        });

        console.log(appData.screens);       

        if (appData.screens.find(item => item.price === 0)) {
            return false;
        } else {
            return true;
        }
    
    },


    addServices: function(){

        otherItemsPercent.forEach(function(item){
           

            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            console.log(check);
            console.log(label);
            console.log(input);

            if(check.checked){

                appData.servicesPercent[label.textContent] = +input.value;
            }

        });

        otherItemsNumber.forEach(function(item){
            

            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            console.log(check);
            console.log(label);
            console.log(input);

            if(check.checked){

                appData.servicesNumber[label.textContent] = +input.value;
            }

        });

    },


    addScreenBlock: function(){
        
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },

    
    loger: function (){
        for (let key in appData) {
          let type = typeof (appData[key]);
    
          console.log(key, (type === 'function' ? '' : appData[key]), '(' + type + ')');

        }

        console.log(appData.screens.price);


        // console.log(appData.title);
        // console.log(appData.calculate);
        // console.log(appData.setBtn);
        // console.log(appData.items1);
        // console.log(appData.items2);
        // console.log(appData.inputTypeRange);
        // console.log(appData.span);
        // console.log(appData.totlInputItem1);
        // console.log(appData.totlInputItem2);
        // console.log(appData.totlInputItem3);
        // console.log(appData.totlInputItem4);
        // console.log(appData.totlInputItem5);
        // console.log(appData.screens);
    },

    addPrices: function() {

        for(let screen of appData.screens){
            appData.screenPrice += +screen.price;
        }
        console.log(appData.screenPrice);
        

        for(let key in appData.servicesNumber){
            appData.servicePriceNumber += appData.servicesNumber[key];
        }

        for(let key in appData.servicesPercent){
            appData.servicePricePercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.screens.forEach(function (item) {
            appData.allCount += +item.count;
        });

        appData.fullPrice =  +appData.screenPrice + appData.servicePricePercent + appData.servicePriceNumber;

        appData.servicePercentPrice = +appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
        appData.totalCountRolback.value = appData.servicePercentPrice;
    
    },

    getServicePercentPrices: function () {


        appData.servicePercentPrice =  +appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)); 
        
    
    },
};

appData.init();

