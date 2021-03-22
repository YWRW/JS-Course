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

for(let i = 0; i<2;i++)
{
        var filmName = prompt("Whats was the last film wached?", "");
        var filmRate = +prompt("Please rate this film from 1 to 10!", "10");

        if(filmName != ""  && filmRate != "" && filmName.length <50 && filmName != null && filmRate != null )
        {
            personalMovieDB.movies[filmName] = filmRate;
            console.log("Done!");
        }
        else
        { 
            i--;
            console.log("Error!");
        }
}
if (numberOfFilms <10)
{
    console.log("Маловато фильмов!");
}else if (numberOfFilms>=10 && numberOfFilms<=30)
{
    console.log("Good!");
}else if (numberOfFilms>30)
{
    console.log("Ты киноман !!!");
}
console.log(personalMovieDB);