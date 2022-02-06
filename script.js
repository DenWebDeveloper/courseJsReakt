
// Задание 1 Урок 4

// Объявление переменных

let  title = "     CПИСОК дел";
let  screens = "Простые, Сложные, Интерактивные";
let  screenPrice = 100;
let  rollback = 10;
let  fullPrice = 1000;
let  adaptive = true;

let servicePrice1 = +prompt("Сколько это будет стоить?", "2000");
let servicePrice2 = +prompt("Сколько это будет стоить?", "3000");



// Объявление функций



// Объявить функцию getAllServicePrices.
//  Функция возвращает сумму всех дополнительных услуг. 
//  Результат сохраняем в переменную allServicePrices. 
//  Тип - function expression


//   1 Возвращает сумму всех доп. услуг (Тип - function expression)


let allServicePrice = function getAllServicePrices (serPrice1, serPrice2) {

    return serPrice1 + serPrice2;

};


/*  Объявить функцию getFullPrice. 
    Функция возвращает сумму стоимости верстки и стоимости дополнительных 
    услуг (screenPrice + allServicePrices). Результат сохраняем в переменную
    fullPrice. Тип - function declaration 
*/



// Возвращает сумму стоимости верстки и стоимости дополнительных услуг (Тип - function declaration)

function getFullPrice(a, b) {

    return a + b;

}

/*
    Объявить функцию getTitle. 
    Функция возвращает title меняя его таким образом: первый символ с большой буквы, остальные с маленькой". 
    Учесть вариант что строка может начинаться с пустых символов.
    " КаЛьКулятор Верстки"
*/ 

let getTitle = function(str){

    str = str.trim();

    return str.charAt(0).toUpperCase(0) + str.slice(1).toLowerCase();
};


/*  Объявить функцию getServicePercentPrices. 
    Функция возвращает итоговую стоимость за вычетом процента отката. 
    Результат сохраняем в переменную servicePercentPrice (итоговая стоимость минус сумма отката)
*/


servicePercentPrice


//  5 Выводит в консоль значание тииа переменных

let  showTypeOf = function(item) {

    console.log(item, typeof item);
    
};


// Запуск функий

allServicePrice(servicePrice1, servicePrice2);

fullPrice = getFullPrice(screenPrice, allServicePrice);

getTitle(title);

showTypeOf(getTitle(title));

showTypeOf(fullPrice);

showTypeOf(adaptive);



// Консоль Логи

console.log(getTitle(title));



console.log(screens);
// console.log(getRollbackMessage(fullPrice));
// console.log(servicePercentPrice);


