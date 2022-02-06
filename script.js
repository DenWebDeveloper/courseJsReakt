"use strict";

let string = prompt("sfsf");

// console.log(typeof string);




const foo = function(arg) {
    let str = string.trim();
    
    // console.log(str, typeof str);

    
    if (typeof arg ==="string") {
        
        const maxLength = 5;
        

        if (str.length > maxLength) {
            
            str = str.substr(0,maxLength) + '...';
            console.log("Вы ввели очень длинную строку...");

        } else {
            str = str;

            console.log("Вы ввели все корректно...");
            
        }

    }else{

        let a = str;
        console.log(a);

        const arrayNum = string;  //"1","2","3","4","5","6","7","8","9","0"
        console.log(arrayNum);

        for(let i = 0; i < arrayNum.length; i++){


            if(string === arrayNum[i]){
                alert("Вы ввели числа....");
            }
        }
      
    }
    return string;
};
console.log(string);



let a = string;
console.log(a);

const arrayNum = ["1","2","3","4","5","6","7","8","9","0"];

for(let i = 0; i < arrayNum.length; i++){


    if(a === arrayNum[i]){
        alert("Вы ввели числа....");
    }
}

foo(string);
// console.log(r);

// console.log('foo(): ', foo(5));
// console.log('foo(): ', foo('    Строка менее 30 символов     '));
// console.log('foo(): ', foo('    Строка более 30 символов - ну очень при очень длинная строчка получилась!'));