'use strict';

const promo__adv = document.querySelectorAll('.promo__adv img'),
    promo__bg = document.querySelector('.promo__bg'),
    promo__genre = promo__bg.querySelector('.promo__genre'),
    list = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    checkbox = addForm.querySelector('[type="checkbox"]'),
    newInput = addForm.querySelector('.adding__input');

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let userInput = newInput.value;
    const filmArr = movieDB.movies;

    if (userInput) {
        if (userInput.length > 21) {

            filmArr.push(userInput.slice(0, 21) + '...');
        } else {
            filmArr.push(userInput);
        }
        if (checkbox.checked == true) {
            console.log(`Фильм - ${userInput}, добавлен в список любимых!`);
        }

        generateFilmList(movieDB.movies, list);

        addForm.reset();
    }
});

const sortArr = (arr) => {
    arr.sort();
};

function generateFilmList(films, parant) {

    parant.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
        parant.innerHTML += `
        <li class='promo__interactive-item'>${i+1}. ${film}
            <div class="delete"></div>
        </li>
        `;
    });

    document.querySelectorAll('.delete').forEach((btn,i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i,1);
            generateFilmList(films, parant); 
        });
    });

}

const makeChanges = () => {
    promo__genre.textContent = 'ДРАММА';
    promo__bg.style.backgroundImage = 'url("img/bg.jpg")';
};

const removeEnvertisement = (arr) => {
    arr.forEach((element) => {
        element.remove();
    });
};

makeChanges();
generateFilmList(movieDB.movies, list);
removeEnvertisement(promo__adv);