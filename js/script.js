"use strict";


//! Function Declaration
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('я программист');
console.log(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));


function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);


//! Function Expression

const logger = function() {
    console.log("Hello World!");
};
logger();

//! Стрелочная функция
const calct = (a, b) => a + b; //? Если тело функции в одну строку, то можно не ставить фигурные скобки {}

const calcte = (a, b) => {
console.log('1');
return a + b;
};