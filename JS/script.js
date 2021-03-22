"use strict";
let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

//start();
//rememberMyFilms();
//declareUserLevel();
writeYourGenres();
showMyDB();


function start() {
    numberOfFilms = +prompt("How many films did you wach?", "");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms))
    {
        numberOfFilms = prompt("How many films did you wach?", "");
    }
}

function rememberMyFilms()
{
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
}

function declareUserLevel()
{
    if (numberOfFilms <10)
    {
        console.log("Маловато фильмов!");
    }
    else if (numberOfFilms>=10 && numberOfFilms<=30)
    {
        console.log("Good!");
    }
    else if (numberOfFilms>30)
    {
        console.log("Ты киноман !!!");
    }
}

function showMyDB()
{
    if(personalMovieDB.private == false)
    {
        console.log(personalMovieDB);
    }
}

function writeYourGenres()
{
    for(let i = 1; i<4;i++ )
    {
        personalMovieDB.genres[i-1] = prompt(`Enter your genres number ${i}`,"");
    }
}