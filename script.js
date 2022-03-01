'use strict';

class First {

    hello(){
        console.log("Привет,я метод родителя");
    }
}

class Second extends First {
    hello(){
        super.hello();
        console.log("A я наследуемый метод");
    }
}

const outPut = new Second();

outPut.hello();

