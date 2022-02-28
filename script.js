'use strict';

const DomElement = function () {

    this.selector = "div";
    this. height = 500;
    this.width = 500;
    this.bg = 'green';
    this.fontSize = 20;
    this.color = 'black';

};

const newElem = new DomElement();


let tag = '';


newElem.creatElem = function(selector, height, width, bg, fontSize, color){


    if(selector[0] === '.'){

        tag = document.createElement('div');
        tag.className = `${selector}`.slice(1);

    }else{

        tag = document.createElement('p');
        tag.id = `${selector}`.slice(1);

    }

    tag.style.cssText = `height: ${height}px;
    width: ${width}px;
    background: ${bg};
    font-size: ${fontSize}px;
    color: ${color};
    `;

    tag.textContent = "Урок 15";
    document.body.prepend(tag);

};



newElem.creatElem("#block", 100, 500, "gray", 30, 'white');