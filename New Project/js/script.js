/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const promo__adv = document.querySelectorAll('.promo__adv img'),
      promo__bg = document.querySelector('.promo__bg'),
      promo__genre = promo__bg.querySelector('.promo__genre'),
      list = document.querySelector('.promo__interactive-list');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

changeGanre();
removeEnvertisement();
generateFilmList();
changeBGImg();

function generateFilmList() {
    
    list.innerHTML = "";
    const sortedMoviesArray = movieDB.movies.sort(); 

    sortedMoviesArray.forEach((film,i) => {
        list.innerHTML += `
        <li class='promo__interactive-item'>${i+1}. ${film}
            <div class="delete"></div>
        </li>
        `;               
    }); 
}

function changeBGImg() {
    promo__bg.style.backgroundImage = 'url("img/bg.jpg")';
}

function changeGanre() {
    promo__genre.textContent = 'ДРАММА';
}

function removeEnvertisement() {
    promo__adv.forEach((element) => {
        element.remove();
    });
}