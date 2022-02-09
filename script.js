
// Задание 1 Урок 5

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
    service1: "",
    service2: "",
 
    


    start: () => {
        // вопросы заказчику
        appData.asking();

        appData.allServicePrice = appData.getAllServicePrice();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title =appData.getTitle();
    
        // // ... и результаты расчетов расчеты
        // // стоимость дополнительных услуг
        // appData.allServicePrices = appData.getAllServicePrices();
        // // итоговая стоимость работы
        // appData.fullPrice = appData.getFullPrice();
        // // доход разработчика
        // appData.servicePercentPrice = appData.getServicePercentPrices();
    
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

        appData.title = prompt("Как называется ваш проект", "Пример: Вестка сайта");
        appData.screens = prompt("Простые, Сложные, Интерактивные", "Простые, Сложные и т.д.");
        appData.screenPrice = prompt("Склько будет стоить данная услуга");

        
        while(!appData.isNum(appData.screenPrice)){
    
            appData.screenPrice = prompt("Склько будет стоить данная услуга");
    
        }
    
        
        appData.adaptive = confirm("Нужен ли адаптив");
    },

    getAllServicePrice : function() {

        let sum = 0;
    
        for(let i = 0; i < 2 ; i++){
    
            let price = 0;
    
            if(i === 0){
    
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
            }else if(i === 1){
    
               appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
            }
    
            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNum(price));
    
            sum += +price;
    
        }
    
        return sum;
    
    },

    getFullPrice: function() {

        return +appData.screenPrice + appData.allServicePrice;
    
    },

    getTitle : function(){

        return appData.title.trim()[0].toUpperCase() + appData.title.trim(1).substr(1).toLowerCase();
    },

    getServicePercentPrices : function () {


        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)); 
        
    
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


// Объявление функций





// Получаем сумму всех услуг 


// Обрабатываем title 


// Полная сумма за услуги с вычетом налога







//  5 Выводит в консоль значание тииа переменных


// Запуск функий



// console.log(appData.rollback);

console.log(appData.fullPrice + " " + "Полная стоимость без вычета 10%");
console.log(appData.servicePercentPrice + " " + "Стоимость услуг с вычетом налога");