"use strict";
// Задание 1 Урок 9

// Объявление переменных
const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const inputTypeRange = document.querySelector('.rollback input[type = "range"]');
const span = document.querySelector('.rollback .range-value');
const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];
const options = document.querySelectorAll('option');
const select = document.querySelector('select');
// console.dir(startBtn);


const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRolback = document.getElementsByClassName('total-input')[4];

let items1 = document.querySelectorAll('.percent');
let items2 = document.querySelectorAll('.number');

let screens = document.querySelectorAll('.screen');

const appData = {
    
    title: title,
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
        this.dontDisable();

        startBtn.addEventListener('click',() => this.start());
        resetBtn.addEventListener('click', () => this.reset());
        buttonPlus.addEventListener('click',() => this.addScreenBlock());
        inputTypeRange.addEventListener('input',() => this.addRollback());

        this.loger();

    },


    loger: function (){

    
    },

    addTitle: function(){

        document.title = title.textContent;
    },

    dontDisable: function(){
        select.addEventListener('change', function(){
            startBtn.disabled = false;

        });

    },
 
    start: function(){


        if (!this.addScreens()) {

            startBtn.disabled = true;

            return false;
        }
        const select = document.querySelector('select');
            select.addEventListener('change', function(){
            console.log(startBtn);

            });

        if(select){
            startBtn.style.color = 'green;';

        }


        this.addScreens();
        this.addServices();
        this.addPrices();


        if (startBtn) {
            this.disableControls();
            resetBtn.style.display = "block";
            startBtn.style.display = "none";
        }

        this.showResult();

    },

    showResult: function(){
        total.value = this.screenPrice;
        totalCountOther.value = this.servicePricePercent + this.servicePriceNumber;
        fullTotalCount.value = this.fullPrice;
        totalCount.value = this.allCount;
      

    },

    addRollback: function(){

        this.rollback = event.target.value;
        span.textContent = this.rollback +'%';
     
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

            if(check.checked){

                this.servicesPercent[label.textContent] = +input.value;
            }

        });

        otherItemsNumber.forEach((item) => {
            

            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if(check.checked){

                this.servicesNumber[label.textContent] = +input.value;
            }

        });

    },


    addScreenBlock: function(){
        
        const cloneScreen = screens[0].cloneNode(true);
       
        buttonPlus.before(cloneScreen);
        
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

        inputTypeRange.value = this.rollback;
        span.textContent = this.rollback +'%';
        this.fullPrice = 0;
        this.rollbackPrice = 0;
        this.servicePercentPrice = 0;
        this.count = 0;
        

        [   total, 
            totalCount, 
            totalCountOther, 
            fullTotalCount, 
            totalCountRolback
        ].forEach((item) => {
            item.value = "0";
        });

        resetBtn.style.display = "none";
        startBtn.style.display = "block";
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
        totalCountRolback.value = this.servicePercentPrice;
    
    },

    getServicePercentPrices: function () {


        this.servicePercentPrice =  +this.fullPrice - (this.fullPrice * (this.rollback / 100)); 
        
    
    },
};

appData.init();

