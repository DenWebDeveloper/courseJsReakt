
// Урок 3 "Динамическая типизация данных в Javascript. Условия, ветвления."

// Выполнение задания 1

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