
// Задание 1 Урок 9

// Объявление переменных

const appData = {
    
    title: "",
    screens: "",
    screenPrice: 0,
    rollback: 10,
    adaptive: true,
    allServicePrice: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
 
    start: () => {
        // вопросы заказчику
        appData.asking();
        appData.getAllServicePrice();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
    
        // сообщения в консоль
        appData.loger();
    },

    isNum : function (num) {

        return !isNaN(parseFloat(num) && isFinite(num));
    },

    loger: function (){
        for (let key in appData) {
          let type = typeof (appData[key]);
    
          console.log(key, (type === 'function' ? '' : appData[key]), '(' + type + ')');

        }
    
    },

    asking : function(){


        do {
            appData.title = prompt("Как называется ваш проект", "Пример: Калькулятор верстки");
        } while(appData.isNum(appData.title) || appData.title === "");

        do {
            appData.screens = prompt("Простые, Сложные, Интерактивные", "Простые, Сложные и т.д.");
        } while(appData.isNum(appData.screens) || appData.screens === "");

        do {
            appData.screenPrice = +prompt("Склько будет стоить данная услуга");
        } while(!appData.isNum(appData.screenPrice) || appData.screenPrice === 0);


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

        appData.adaptive = confirm("Нужен ли адаптив");

    },

    getAllServicePrice : function() {

        for(let key in appData.services){
            appData.allServicePrice += appData.services[key];
        }
    
    },

    getFullPrice: function() {

        appData.fullPrice =  +appData.screenPrice + appData.allServicePrice;
    
    },

    getTitle : function(){

        appData.title =  appData.title.trim()[0].toUpperCase() + appData.title.trim(1).substr(1).toLowerCase();
    },

    getServicePercentPrices: function () {


        appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)); 
        
    
    },

    getRollbackMessage: function(fullPrice) {
    
        if(fullPrice >= 30000) {
    
            console.log("Даем скидку в 10%");
    
        }else if(fullPrice >= 15000 && fullPrice < 30000) {
    
            console.log("Даем скидку в 5%");
    
        }else if(fullPrice < 15000 && fullPrice >= 0 ) {
    
            console.log("Скидка не предусмотрена");
    
        }else {
    
            console.log("Что то пошло не так");
    
        }
    },


};

appData.start();
