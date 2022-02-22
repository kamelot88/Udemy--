"use sctrict";

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const mpersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastFilm1 = prompt('Один из последних просмотренных фильмов?', '');
const reytingFilm1 = prompt('На сколько оцените его?');
const lastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
const reytingFilm2 = prompt('На сколько оцените его?');
mpersonalMovieDB.movies[lastFilm1] = reytingFilm1;
mpersonalMovieDB.movies[lastFilm2] = reytingFilm2;

console.log(mpersonalMovieDB);