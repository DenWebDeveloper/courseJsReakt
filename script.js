'use strict';

const DomElement = function (selector, height,width, bg, fontSize) {

    this.selector = selector;
    this. height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

};

DomElement.prototype.creatElem = function(){


    if(this.selector[0] === '.'){

        let div = document.createElement('div');
        div.className = `${this.selector}`.slice(1);

        div.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        `;

        div.textContent = "Урок 15";

    
        document.body.append(div);

    }else{

        let p = document.createElement('p');
        p.id = `${this.selector}`.slice(1);

        p.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px;
        `;
        p.textContent = "Урок 15";
    
        document.body.prepend(p);

    }

};

const newElem = new DomElement('#block', 50, 500, "green", 50);

newElem.creatElem();





