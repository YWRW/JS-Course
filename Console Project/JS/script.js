"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    start: function () {
        personalMovieDB.count = +prompt("How many films did you wach?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("How many films did you wach?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            var filmName = prompt("Whats was the last film wached?", "");
            var filmRate = +prompt("Please rate this film from 1 to 10!", "10");

            if (filmName != "" && filmRate != "" && filmName.length < 50 && filmName != null && filmRate != null) {
                personalMovieDB.movies[filmName] = filmRate;
                console.log("Done!");
            } else {
                i--;
                console.log("Error!");
            }
        }
    },
    declareUserLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Маловато фильмов!");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Good!");
        } else if (personalMovieDB.count > 30) {
            console.log("Ты киноман !!!");
        }
    },
    showMyDB: function () {
        if (personalMovieDB.private == false) {
            console.log(personalMovieDB);
        }
    },
    // writeYourGenres: function () {
    //     for (let i = 1; i <= 3; i++) {
    //         let genr = prompt(`Enter your genres number ${i}`, "");
            
    //         (genr == null || genr == "") ?  i-- : personalMovieDB.genres[i - 1] = genr;
    //     }

    //     personalMovieDB.genres.forEach((item,i) => {
    //         console.log(`Любимый жанр № ${i + 1} - это ${item}`);
    //     });

    // },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.private == true) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};

//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.declareUserLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
//personalMovieDB.toggleVisibleMyDB();