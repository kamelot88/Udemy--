"use strict";

const str = "test";

// console.log(str[2]);

console.log(str.toUpperCase()); //? Преобразовует строку в верхний регистр

console.log(str.toLowerCase()); //? Преобразовует строку в нижний регистр

let fruit = "Some fruit";
console.log(fruit.indexOf('q')); //? Возвращает индекс символа строки



console.log(logg.slice(6, 11)); //? Возвращает символы строки с начального по конечный индекс, которые указыватся в скобках


console.log(logg.substring(6, 11)); //? Возвращает символы строки с начального по конечный индекс, которые указыватся в скобках

const logg = 'Hello World';

console.log(logg.substr(6, 5)); //? Возвращает символы строки с начального индекса по количнству указанных символов (второй аргумент), которые указыватся в скобках


//! Методы чисел

const num = 12.2;

console.log(Math.round(num)); //? Метод округления чисел

const test = '12.2px';
// console.log(parseInt(test));
console.log(parseFloat(test));







// //! Function Declaration
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('я программист');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));


// function ret() {
//     let num = 50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);


// //! Function Expression

// const logger = function() {
//     console.log("Hello World!");
// };
// logger();

// //! Стрелочная функция
// const calct = (a, b) => a + b; //? Если тело функции в одну строку, то можно не ставить фигурные скобки {}

// const calcte = (a, b) => {
// console.log('1');
// return a + b;
// };