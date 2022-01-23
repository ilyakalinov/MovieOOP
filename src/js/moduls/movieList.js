import { genres, IMG_URL } from "../script";
import InfoPanel from "./infoPanel";


const cardBlock = document.querySelector('.card__wrapper');

    /* Установка карточек фильмов */
    function setMovies(movies) {
        
        cardBlock.style.display = 'flex';

        cardBlock.innerHTML = '';
        
        for(let i = 0; i < movies.results.length; i++) {

            const {
                poster_path,
                title,
                genre_ids,
                id
            } = movies.results[i]

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
                    <div class="movie__card_description" id='movie__card_description'>
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
            cardBlock.appendChild(newCard);
        }
        new InfoPanel('.container__play').open();
    }

    function setPersonMovies(movies) {
        cardBlock.innerHTML = '';
        cardBlock.style.display = 'flex';
        try {
        for(let i = 0; i < 60; i++) {
           
            const {
                poster_path,
                title,
                genre_ids,
                id
            } = movies[i]

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
                    <div class="movie__card_description" id='movie__card_description'>
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
            cardBlock.appendChild(newCard);
        }
    } catch {
        
    }
        new InfoPanel('.container__play').open();
    }

    export {setPersonMovies};
    export default setMovies;