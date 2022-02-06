"use strict";


let change = function(arg){

    let res = "";
    

    if (typeof arg === "string") {

        const maxLength = 30;
        const str = arg.trim();

        if (str.length > maxLength) {
            res = str.substr(0,maxLength) + '...';
            console.log("Строка более 30 символов - ну очень при очень длинная строчка получилась!");
        } else if(str.length <= maxLength){
            res = str;
            console.log("Ввели все корректно");
        }
        
    }else if(typeof arg === "number"){
        console.log("Вы ввели цыфры");
    }
  
    return res;
};

change("Здесь можно что-то ввести..."); //Здесь в качестве аргумента нужно что-то указать, 
//чтобы увидеть результат. Пример: change("Какой-то текст || набрать цифры")
