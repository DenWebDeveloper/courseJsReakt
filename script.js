
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
let lang = prompt("Выберите язык из представленных", "RU" + "/" +"EN");

// Массив дней недель.
let daysOfWeek = [

    ['Понедельник', 'Вторник', 'Сроеда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],

    ['Monday','Tuesday' ,'Wednes­day' , 'Thursday', 'Friday', 'Saturday', 'Sunday'],

    ["ERROR : Вы ввели не правильные значения, будьте внимательны. Набирать все с заглывными буквами!"]

];

// Прверка условий через if.

if(lang === "RU") {

    console.log(daysOfWeek[0]);

}else if(lang === "EN") {

    console.log(daysOfWeek[1]);

}else{
    console.log(daysOfWeek[2]);
}


// Условие через Switch

switch(lang) {
    case "RU":
        console.log(daysOfWeek[0]);
        break;
    case "EN":
        console.log(daysOfWeek[1]);
        break;
    default:
        console.log(daysOfWeek[2]);
}


let namePerson = prompt("Введите имя", "Артем / Александр / любое другое имя");

console.log((namePerson === "Артем") ? "Директор" : (namePerson === "Александр") ? "Преподаватель" : "студент");

