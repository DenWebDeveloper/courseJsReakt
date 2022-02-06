
// Задание 1 Урок 4

// Объявление переменных

let  title = "Список дел";
let  screens = "Простые, Сложные, Интерактивные";
let  screenPrice = 100;
let  rollback = 10;
let  fullPrice = 1000;
let  adaptive = true;

let servicePrice1 = +prompt("Сколько это будет стоить?", "2000");

let servicePrice2 = +prompt("Сколько это будет стоить?", "3000");




// Объявление функций

const showTypeOf = function(type) {
    console.log(type, typeof type);
};

let allServicePrice = function(serPrice1, serPrice2) {
    return serPrice1 + serPrice2;
};

function getFullPrice(a, b) {
    return a + b;
}



// Запуск функий

fullPrice = getFullPrice();

allServicePrice(servicePrice1, servicePrice2);

getFullPrice(screenPrice, allServicePrice);






console.log(

    `Типы перемнных: \n ` + 

    `\t title: ${typeof(title)},

    fullPrice: ${typeof(fullPrice)},

    adaptive: ${typeof(adaptive)};`
);

console.log("Длина строки 'screens' = "+ screens.length  + " " + "символ");

console.log(`Стоимость верстки экранов: ${screenPrice} рублей/ долларов/гривен/юани`);

console.log(`Стоимость разработки сайта: ${fullPrice} рублей/ долларов/гривен/юани`);

// Перевел строку screens в нижний регист и вывел в массив, затемв console.
console.log( screens.toLowerCase().split(', ') );

// Процент, который получит посредник.
console.log(`Посреднику - ${rollback}% \nЭто целых ${ fullPrice * (rollback/100) } рублей/ долларов/гривен/юани !`);
