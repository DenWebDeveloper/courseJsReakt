
let  title = "Список дел";
let  screens = "Простые, Сложные, Интерактивные";
let  screenPrice = 100;
let  rollback = 10;
let  fullPrice = 1000;
let  adaptive = true;


console.log(

    `Типы перемнных: \n ` + 

    `\t title: ${typeof(title)},

    fullPrice: ${typeof(fullPrice)},

    adaptive: ${typeof(adaptive)};`);

console.log("Длина строки 'screens' = "+ screens.length  + " " + "символ");

console.log(`Стоимость верстки экранов: ${screenPrice} рублей/ долларов/гривен/юани`);

console.log(`Стоимость разработки сайта: ${fullPrice} рублей/ долларов/гривен/юани`);

// Перевел строку screens в нижний регист и вывел в массив, затемв console.
console.log( screens.toLowerCase().split(', ') );

// Процент, который получит посредник.
console.log(`Посреднику - ${rollback}% \nЭто целых ${ fullPrice * (rollback/100) } рублей/ долларов/гривен/юани !`);
