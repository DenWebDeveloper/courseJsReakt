"use strict";


let wordCheck = function(arg) {

    let res;

    if (typeof arg === "string") {

        const maxLength = 30;

        const str = arg.trim();

        if (str.length > maxLength) {

            res = str.substr(0,maxLength) + '...';

            // console.log(res);

        }
        else {

            res = str;

        }

        console.log(res);


    }else {

        let error = "Вы ввели число";
        console.log(error);

    }

};

let massage = 1; // В переменную massage нужно что-то напечатать.

wordCheck(massage);







