
// let  title = "Список дел";
// let  screens = "Простые, Сложные, Интерактивные";
// let  screenPrice = 100;
// // let  rollback = 10;
// let  fullPrice = 1000;
// let  adaptive = true;


// console.log(

//     `Типы перемнных: \n ` + 

//     `\t title: ${typeof(title)},

//     fullPrice: ${typeof(fullPrice)},

//     adaptive: ${typeof(adaptive)};`);

// console.log("Длина строки 'screens' = "+ screens.length  + " " + "символ");

// console.log(`Стоимость верстки экранов: ${screenPrice} рублей/ долларов/гривен/юани`);

// console.log(`Стоимость разработки сайта: ${fullPrice} рублей/ долларов/гривен/юани`);

// // Перевел строку screens в нижний регист и вывел в массив, затемв console.
// console.log( screens.toLowerCase().split(', ') );

// // Процент, который получит посредник.
// console.log(`Посреднику - ${rollback}% \nЭто целых ${ fullPrice * (rollback/100) } рублей/ долларов/гривен/юани !`);


// Урок 3 "Динамическая типизация данных в Javascript. Условия, ветвления."

// Выполнение задания

let title = prompt("Как называется ваш проект?");

let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

let screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: " + 12000);

let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");

let servicePrice1 = +prompt("Сколько это будет стоить?");

let service2 = prompt("Какой дополнительный тип услуги нужен?");

let servicePrice2 = +prompt("Сколько это будет стоить?");

let rollback = 10;

let fullPrice = screenPrice + servicePrice1 + servicePrice2;

rollback = +(Math.ceil((rollback / fullPrice)* 100));

console.log(rollback);

console.log(fullPrice);

let servicePercentPrice = fullPrice - rollback;
console.log(servicePercentPrice);


// Конструкция Условий 

if(fullPrice >= 30000) {

    console.log("Даем скидку в 10%");

}else if(fullPrice >= 15000 && fullPrice < 30000) {

    console.log("Даем скидку в 5%");

}else if(fullPrice < 15000 && fullPrice >= 0 ) {

    console.log("Скидка не предусмотрена");

}else {

    console.log("Что то пошло не так");

}