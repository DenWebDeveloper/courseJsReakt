
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

    asking : function(){

        appData.title = prompt("Как называется ваш проект", "Пример: Вестка сайта");
        appData.screens = prompt("Простые, Сложные, Интерактивные", "Простые, Сложные и т.д.");
        appData.screenPrice = prompt("Склько будет стоить данная услуга");
    
        while(!isNum(appData.screenPrice)){
    
            appData.screenPrice = prompt("Склько будет стоить данная услуга");
    
        }
    
        appData.adaptive = confirm("Нужен ли адаптив");
    }


};


// Объявление функций

const isNum = function (num) {

    return !isNaN(parseFloat(num) && isFinite(num));
};

const getAllServicePrice = function() {

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
        } while (!isNum(price));

        sum += +price;

    }

    return sum;

};

// Получаем сумму всех услуг 
function getFullPrice() {

    return +appData.screenPrice + appData.allServicePrice;

}

// Обрабатываем title 
const getTitle = function(){

    return appData.title.trim()[0].toUpperCase() + appData.title.trim(1).substr(1).toLowerCase();
};

// Полная сумма за услуги с вычетом налога
const  getServicePercentPrices = function () {


    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)); 
    

};


function getRollbackMessage(fullPrice) {
    
    if(fullPrice >= 30000) {

        console.log("Даем скидку в 10%");

    }else if(fullPrice >= 15000 && fullPrice < 30000) {

        console.log("Даем скидку в 5%");

    }else if(fullPrice < 15000 && fullPrice >= 0 ) {

        console.log("Скидка не предусмотрена");

    }else {

        console.log("Что то пошло не так");

    }
}

//  5 Выводит в консоль значание тииа переменных


// Запуск функий

appData.asking();

appData.allServicePrice = getAllServicePrice();
appData.fullPrice = getFullPrice();
appData.servicePercentPrice = getServicePercentPrices();
appData.title = getTitle();

// console.log(appData.rollback);

console.log(appData.fullPrice + " " + "Полная стоимость без вычета 10%");
console.log(appData.servicePercentPrice + " " + "Стоимость услуг с вычетом налога");