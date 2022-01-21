import { API_KEY, BASE_URL, genres, IMG_URL } from "../script";
import { getData } from "./services/getData";
import { openNav, openNavWithInf } from "./services/nav";

const cardPerson = document.querySelector('.card__person'),
        cardImg = cardPerson.querySelector('img'),
        cardName = cardPerson.querySelector('b'),
        cardDepartment = cardPerson.querySelector('.known_for_department'),
        cardPop = cardPerson.querySelector('.popularity'),
        cardBlock = document.querySelector('.card__wrapper'),
        cardsBlock = document.querySelector('.movie__cards');
        export{cardBlock, cardsBlock}

/* Установка карточек фильмов */
function toList(id) {
    getData(BASE_URL + `/person/${id}?` + API_KEY)
        .then(data => {

            const {
                name,
                profile_path,
                popularity,
                known_for_department
            } = data;

            cardName.textContent = name;
            cardImg.src = `${IMG_URL + profile_path}`;
            cardDepartment.textContent = known_for_department;
            cardPop.textContent = Math.floor(popularity);

            openNav();
            cardBlock.style.display = 'block'
        })

    getData(`https://api.themoviedb.org/3/person/${id}/movie_credits?${API_KEY}&language=en-US`)
        .then(data => {
            cardsBlock.innerHTML = '';
            for(let i = 0; i < 60; i++) {

                const {
                    poster_path,
                    title,
                    genre_ids,
                    id
                } = data.cast[i]

                const nowGenres = []
                genre_ids.forEach(genre => {
                    function setGenre(num) {
                        genres.forEach(genre => {
                                if(genre.id === num) {
                                    nowGenres.push(genre.name)
                                }
                        })
                    }
                    setGenre(genre)
                })  

                const newCard = document.createElement('div');
                newCard.classList.add('movie__card__wrapper');
                newCard.classList.add('flip-card');
                newCard.innerHTML = `
                <div class="movie__card__inner flip-card-inner">
                    <div class="movie__card flip-card-front" style = 'background-image:url(${poster_path ? (IMG_URL + poster_path) : './img/nowplay.png>'});'>
                        <div class="movie__card_description">
                            <h2 class="title">
                                ${title.length > 30 ? title.slice(0, 30) + `...` : title}
                            </h2>
                            <span class="movie__now__genre">
                                ${nowGenres}
                            </span>
                            </div>
                    </div>
                    <div class="movie__card flip-card-back" style = 'background-image:url(${poster_path ? (IMG_URL + poster_path) : './img/nowplay.png>'});'>
                        <div class="movie__inform__box">
                            <div class="movie__back__inner">
                                <div id='${id}' class="container__play">
                                    <i id='${id}'class="fas fa-play"></i>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                `;
                cardsBlock.appendChild(newCard);
                openNavWithInf('.container__play');
            }  
    })
}
export {toList};