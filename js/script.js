"use strict";

//! Условия If
if (4 == 9) {
    console.log('Ok');
} else {
    console.log('error');
}

const numb = 50;

if (numb < 49) {
    console.log('error')
} else if (numb > 100) {
    console.log('Много')
} else {
    console.log('Ok');
}

//! Тернарный оператор
const num = 50;
(num == 50) ? console.log('Ok') : console.log('Error');


//! Конструкция switch
const  nam = 55;
switch (nam) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Не в этот раз');
        break;
}