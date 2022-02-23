"use strict";

const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

//! Цикл for
// personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
// for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('Error');
//         i--;
//     }
// }

//! Цикл while
// personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
// let i = 0;
// while (i < 2) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('Error');
//         i--;
//     }
//     i++;
// }

//! Цикл do…while
personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
let i = 0;
do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('Error');
            i--;
        }
        i++;
} while (i < 2);




if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы класический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}
console.log(personalMovieDB);




// let number = 50;
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break; //? остановит выполнение цикла при достижении переменной i значения "6"
//     }
//     console.log(i);
// }


// let lit = 50;
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue; //? пропустит выполнение кода при достижении переменной i значения "6", после чего продолжит выполнение кода со следующего цикла
//     }
//     console.log(i);
// }