"use strict";

const numberOfFilms = prompt("How many films did you wach?", "");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: {},
};

var filmName = prompt("Whats was the last film wached?", "");  
var filmRate = prompt("Please rate this film from 1 to 10!", "10");
personalMovieDB.movies[filmName] = filmRate;
var filmName = prompt("Whats was the last film wached?", "");  
var filmRate = prompt("Please rate this film from 1 to 10!", "10");
personalMovieDB.movies[filmName] = filmRate;


console.log(personalMovieDB);