"use strict";

//! Циклы

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}




let numb = 50;
do {
    console.log(numb);
    numb++;
}
while (numb < 55);



let number = 50;
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break; //? остановит выполнение цикла при достижении переменной i значения "6"
    }
    console.log(i);
}


let lit = 50;
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue; //? пропустит выполнение кода при достижении переменной i значения "6", после чего продолжит выполнение кода со следующего цикла
    }
    console.log(i);
}