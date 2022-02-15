"use strict";
// Задание 1 Урок 9

// Объявление переменных
const screens = document.querySelectorAll('.screen');


const appData = {
    
    title: document.getElementsByTagName("h1")[0],
    startBtn: document.getElementsByClassName("handler_btn")[0],
    setBtn : document.querySelector(".screen-btn"),
    items1: document.querySelectorAll('.percent'),
    items2: document.querySelectorAll('.number'),
    inputTypeRange: document.querySelector('.rollback input[type = "range"]'),
    span: document.querySelector('.rollback .range-value'),
    totlInputItem1: document.getElementsByClassName('total-input')[0],
    totlInputItem2: document.getElementsByClassName('total-input')[1],
    totlInputItem3: document.getElementsByClassName('total-input')[2],
    totlInputItem4: document.getElementsByClassName('total-input')[3],
    totlInputItem5: document.getElementsByClassName('total-input')[4],
    screens: [],
    screenPrice: 0,
    rollback: 10,
    adaptive: true,
    allServicePrice: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    init: function() {

        appData.addTitle();
        // appData.start();
        appData.startBtn.addEventListener('click', appData.start);
    
    },

    addTitle: function(){

        console.log(appData.title.textContent);

        document.title = appData.title.textContent;
    },
 
    start: function() {
        
        appData.addScreens();
        // вопросы заказчику
        // appData.asking();
        // appData.getAllServicePrice();
        // appData.getFullPrice();
        // appData.getServicePercentPrices();
        // appData.getTitle();
    
        // сообщения в консоль
        // appData.loger();
    },

    isNum : function (num) {

        return !isNaN(parseFloat(num) && isFinite(num));
    },

    addScreens: function() {
        screens.forEach(function(screen, index){
            
            const select = screen.querySelector("select");
            const input = screen.querySelector("input");
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index, 
                name: selectName, 
                price: +select.value * +input.value,
            });
        
        });
    },

    
    loger: function (){
        for (let key in appData) {
          let type = typeof (appData[key]);
    
          console.log(key, (type === 'function' ? '' : appData[key]), '(' + type + ')');

        }

        console.log(appData.title);
        console.log(appData.calculate);
        console.log(appData.setBtn);
        console.log(appData.items1);
        console.log(appData.items2);
        console.log(appData.inputTypeRange);
        console.log(appData.span);
        console.log(appData.totlInputItem1);
        console.log(appData.totlInputItem2);
        console.log(appData.totlInputItem3);
        console.log(appData.totlInputItem4);
        console.log(appData.totlInputItem5);
        console.log(appData.screens);
    },

    asking : function(){

        for(let i = 0; i < 2 ; i++){

            let name;
            let price = 0;

            do {
                name = prompt("Какой дополнительный тип услуги нужен?");
            } while (appData.isNum(name) || name === "");


            do {

                price = +prompt("Сколько это будет стоить?");
            } while (!appData.isNum(price) || price === 0);

            appData.services[name] = +price;

        }

    },

    getAllServicePrice : function() {

        for(let key in appData.services){
            appData.allServicePrice += appData.services[key];
        }
    
    },

    getFullPrice: function() {

        appData.fullPrice =  +appData.screenPrice + appData.allServicePrice;
    
    },

    // getTitle : function(){

    //     appData.title =  appData.title.trim()[0].toUpperCase() + appData.title.trim(1).substr(1).toLowerCase();
    // },

    getServicePercentPrices: function () {


        appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)); 
        
    
    },

    getRollbackMessage: function(fullPrice) {
    
        if(fullPrice >= 30000) {
    
            // console.log("Даем скидку в 10%");
    
        }else if(fullPrice >= 15000 && fullPrice < 30000) {
    
            // console.log("Даем скидку в 5%");
    
        }else if(fullPrice < 15000 && fullPrice >= 0 ) {
    
            // console.log("Скидка не предусмотрена");
    
        }else {
    
            // console.log("Что то пошло не так");
    
        }
    },


};

appData.init();

