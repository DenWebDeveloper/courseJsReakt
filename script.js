"use strict";


// Перменная для ввода данных.
// let massage = "";

const foo = (arg) => {

    let res = arg;

    // console.log(res);


    if (typeof arg === "string") {

        const maxLength = 5;
        let res = arg.trim();

        if (res.length > maxLength) {

          let res1 = res.substr(0,maxLength) + '...';

          console.log(res1);
          
        } else if(res.length == maxLength){

           let send = res;

            console.log(send);

        }else if (typeof res === "number"){

            console.log("Вы ввели цифры, будьте внимательны...");
        }
    } return res;
    
};

foo(12354);
