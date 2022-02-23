"use strict";
// Задание 1 Урок 9

// Объявление переменных
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

let screens = document.querySelectorAll('.screen');

const appData = {
    
    title: document.getElementsByTagName("h1")[0],
    startBtn: document.getElementsByClassName("handler_btn")[0],
    resetBtn: document.getElementsByClassName("handler_btn")[1],
    buttonPlus: document.querySelector(".screen-btn"),
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

        this.addTitle();
        this.start();
        
        this.startBtn.addEventListener('click',() => this.start());
        this.resetBtn.addEventListener('click', () => this.reset());
        this.buttonPlus.addEventListener('click',() => this.addScreenBlock());
        this.inputTypeRange.addEventListener('input',() => this.addRollback());

    },

    addTitle: function(){

        document.title = this.title.textContent;
    },
 
    start: function(){

        if (!this.addScreens()) {
            return false;
        }
        
        this.addServices();
        this.addPrices();

        if (this.startBtn) {
            this.disableControls();
            this.resetBtn.style.display = "block";
            this.startBtn.style.display = "none";
        }

        this.showResult();

    },

    showResult: function(){
        this.total.value = this.screenPrice;
        this.totalCountOther.value = this.servicePricePercent + this.servicePriceNumber;
        this.fullTotalCount.value = this.fullPrice;
        this.totalCount.value = this.allCount;
      

    },

    addRollback: function(){

        this.rollback = event.target.value;

        console.log( appData.rollback);
        this.span.textContent = this.rollback +'%';
     
    },

    allCountScreens: function () {
        if(this.addScreens() !== true) {
            alert('Не выбран тип или количество экранов');
        } else {
            this.start();
        }
    },

    addScreens: function() {
        this.screens.length = 0;
        screens = document.querySelectorAll('.screen');

        screens.forEach((screen, index) => {
            
            const select = screen.querySelector("select");
            const input = screen.querySelector("input");
            const selectName = select.options[select.selectedIndex].textContent;

            this.screens.push({
                id: index, 
                name: selectName, 
                price: +select.value * +input.value,
                count: +input.value,
            });

        
        });

        console.log(this.screens);       

        if (this.screens.find(item => item.price === 0)) {
            return false;
        } else {
            return true;
        }
    
    },


    addServices: function(){

        otherItemsPercent.forEach((item) => {
           

            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            // console.log(check);
            // console.log(label);
            // console.log(input);

            if(check.checked){

                this.servicesPercent[label.textContent] = +input.value;
            }

        });

        otherItemsNumber.forEach((item) => {
            

            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            // console.log(check);
            // console.log(label);
            // console.log(input);

            if(check.checked){

                this.servicesNumber[label.textContent] = +input.value;
            }

        });

    },


    addScreenBlock: function(){
        
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },


    disableControls: function (yes = true) {    
        screens.forEach((screen) => {
            const select = screen.querySelector("select");
            const input = screen.querySelector("input");
            select.disabled = yes;
            input.disabled = yes;
        });
    },

    reset: function () {
        this.screens = [];

        screens.forEach((item, index) => {
            if (index > 0) {
                item.remove();
            } else {
                item.querySelector("select").selectedIndex = 0;
                item.querySelector("input").value = "";
            }
        });

        screens = document.querySelectorAll(".screen");

        this.disableControls(false);
        this.screenPrice = 0;
        this.servicesPercent = {};
        this.servicesNumber = {};
        this.rollback = 0;
        this.servicePricesPercent = 0;
        this.servicePricesNumber = 0;
        otherItemsPercent.forEach((item) => {
            item.querySelector("input[type=checkbox]").checked = false;
        });
        otherItemsNumber.forEach((item) => {
            item.querySelector("input[type=checkbox]").checked = false;
        });

        this.inputTypeRange.value = this.rollback;
        this.span.textContent = this.rollback +'%';
        this.fullPrice = 0;
        this.rollbackPrice = 0;
        this.servicePercentPrice = 0;
        this.count = 0;
        

        [   this.total, 
            this.totalCount, 
            this.totalCountOther, 
            this.fullTotalCount, 
            this.totalCountRolback
        ].forEach((item) => {
            item.value = "0";
        });

        this.resetBtn.style.display = "none";
        this.startBtn.style.display = "block";
    },

    
    loger: function (){
        for (let key in this) {
          let type = typeof (this[key]);
    
            console.log(key, (type === 'function' ? '' : this[key]), '(' + type + ')');

        }

        console.log(this.screenPrice);

    },



    addPrices: function() {

        for(let screen of this.screens){
            this.screenPrice += +screen.price;
        }
        console.log(this.screenPrice);
        

        for(let key in this.servicesNumber){
            this.servicePriceNumber += this.servicesNumber[key];
        }

        for(let key in this.servicesPercent){
            this.servicePricePercent += this.screenPrice * (this.servicesPercent[key] / 100);
        }

        this.screens.forEach((item) => {
            this.allCount += +item.count;
        });

        this.fullPrice =  +this.screenPrice + this.servicePricePercent + this.servicePriceNumber;

        this.servicePercentPrice = +this.fullPrice - (this.fullPrice * (this.rollback / 100));
        this.totalCountRolback.value = this.servicePercentPrice;
    
    },

    getServicePercentPrices: function () {


        this.servicePercentPrice =  +this.fullPrice - (this.fullPrice * (this.rollback / 100)); 
        
    
    },
};

appData.init();

