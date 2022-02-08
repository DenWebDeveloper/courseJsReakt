
// Задание 1 Урок 5

// Объявление переменных

// let  title;
// let  screens;
// let  screenPrice;
// let  rollback = 10;
// let  fullPrice = 1000;
// let  adaptive ;

// let allServicePrice;

// let servicePercentPrice;


// let service1;
// let service2;


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
        }while (!isNum(price));

        sum += +price;

    }

    return sum;

};



function getFullPrice() {

    return appData.screenPrice + appData.allServicePrice;

}


const getTitle = function(str){

    str = str.trim();

    return str.charAt(0).toUpperCase(0) + str.slice(1).toLowerCase();
};


const  getServicePercentPrices = function () {


    return appData.fullPrice - appData.rollback; 
    

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


appData.servicePercentPrice = getServicePercentPrices();

appData.fullPrice = getFullPrice();

appData.rollback = +(Math.ceil((getFullPrice(appData.screenPrice, appData.allServicePrice(appData.servicePrice1, appData.servicePrice2))/100)* 10));

console.log(appData.rollback);

appData.title = getTitle(appData.title);


console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);
