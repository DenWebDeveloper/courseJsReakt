// Задание2 Усложненное.

let lang = prompt("Введите название языка 'en' или 'ru'");

// Массив дней недель.
let daysOfWeek = [

    ['Понедельник', 'Вторник', 'Сроеда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],

    ['Monday','Tuesday' ,'Wednes­day' , 'Thursday', 'Friday', 'Saturday', 'Sunday'],

    ["ERROR : Вы ввели не правильные значения, будьте внимательны. Набирать все с заглывными буквами!"]

];

// Прверка условий через if.

if(lang === "ru") {

    console.log(daysOfWeek[0]);

}else if(lang === "en") {

    console.log(daysOfWeek[1]);

}else{
    console.log(daysOfWeek[2]);
}


// Условие через Switch

switch(lang) {
    case "ru":
        console.log(daysOfWeek[0]);
        break;
    case "en":
        console.log(daysOfWeek[1]);
        break;
    default:
        console.log(daysOfWeek[2]);
}


// Дни недели через многомерный массив

let daysOfWeek2 = {
  ru: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
  en: ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};

let arr = daysOfWeek2[ lang ];

console.log(arr);




let namePerson = prompt("Введите имя", "Артем / Александр / любое другое имя");

console.log((namePerson === "Артем") ? "Директор" : (namePerson === "Александр") ? "Преподаватель" : "студент");