
// Задание 1 Урок 5

// Объявление переменных

let  title;
let  screens;
let  screenPrice;
let  rollback = 10;
let  fullPrice = 1000;
let  adaptive ;

let allServicePrice;

let servicePercentPrice;


let service1;
let service2;


// Объявление функций

const isNum = function (num) {

    return !isNaN(parseFloat(num) && isFinite(num));
};

const asking = function(){

    title = prompt("Как называется ваш проект", "Пример: Вестка сайта");
    screens = prompt("Простые, Сложные, Интерактивные", "Простые, Сложные и т.д.");
    screenPrice = prompt("Склько будет стоить данная услуга");

    while(!isNum(screenPrice)){

        screenPrice = prompt("Склько будет стоить данная услуга");

    }

    adaptive = prompt("Нужен ли адаптив");
};

const getAllServicePrice = function() {

    let summ = 0;

    for(let i = 0; i < 2 ; i++){

        if(i === 0){

            service1 = prompt("Какой дополнительный тип услуги нужен?");
        }else if(i === 1){

            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }

        summ += +prompt("Сколько это будет стоить?");

    }

    return summ;

};

let  showTypeOf = function(item) {

    return item, typeof item;
    
};

function getFullPrice() {

    return screenPrice + allServicePrice;

}


const getTitle = function(str){

    str = str.trim();

    return str.charAt(0).toUpperCase(0) + str.slice(1).toLowerCase();
};


const  getServicePercentPrices = function () {

    return fullPrice - rollback; 

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

asking();

allServicePrice = getAllServicePrice();

servicePercentPrice = getServicePercentPrices();

fullPrice = getFullPrice();

rollback = +(Math.ceil((rollback / fullPrice)* 100));

console.log(rollback);

title = getTitle(title);


// Функция выводит типы переменных

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);



// Консоль Логи


console.log(screens.length);
console.log("allServicePrice", allServicePrice);

console.log(showTypeOf(title));
console.log(showTypeOf(fullPrice));
console.log(showTypeOf(adaptive));
getRollbackMessage(fullPrice);


console.log(servicePercentPrice + " " + "c учетом вычета за откат");
