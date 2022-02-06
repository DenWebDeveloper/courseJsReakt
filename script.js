"use strict";

const foo = (arg) => {

    let res = 'Ожидается появление строки...';

    if (typeof arg === "string") {
        const maxLength = 30;
        const str = arg.trim();
        if (str.length > maxLength) {
            res = str.substr(0,maxLength) + '...';
        } else {
            res = str;
        }
    }
    return res;
};
