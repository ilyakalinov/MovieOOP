import { ALL__MOVIE, API_KEY, BASE_URL, genres, IMG_URL } from "../script";
import { getData } from "./services/getData";
import { openNav, openNavWithInf } from "./services/nav";

const cardPerson = document.querySelector('.card__person'),
        cardBlock = document.querySelector('.card__wrapper'),
        actMobie = document.querySelector('.actors__movie'),
        cardsBlock = document.querySelector('.movie__cards'),
        navPanelPage = document.querySelector('.num__page'),
        informationWrapper = document.querySelector('.information.tariler_container'),
        triggerBtn = document.querySelector('.watch__online');

    /* Переменная для установки активной страницы панели страниц */    
    let ids = 1;

    triggerBtn.addEventListener('click', (e) => {
        if(e.target.parentElement == triggerBtn) {
            getMovies(1)
        }
        getMovies(1)
    })

    /* Получение фильмов для блока карточек */
    function getMovies (id) {
            ids = id 
            getData(ALL__MOVIE + id)
            .then(data => {

                openNav();   
                setMovies(data)  
                cardBlock.classList.add('all__movie');
                navPanelPage.style.display = 'block'   
            })
    }

    /* Установка карточек фильмов */
    function setMovies(movies) {
        
        cardBlock.style.display = 'block';
        cardPerson.style.display = 'none';
        actMobie.style.display = 'none';

        cardsBlock.innerHTML = '';
        
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
            cardBlock.classList.add('watch__list');
            openNavWithInf('.container__play');

        }
    }

/* Кнопки панели страниц */
const pageBtn = document.querySelectorAll('.pagination a'); 

        /* Настройка навигации с помощью панели нумерации страниц */
    remBtn()
    pageBtn[ids].classList.add('active');
    pageBtn.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            if (e.target.id == ('pre') || e.target.id == ('next')) {
                if(e.target.id == ('pre')){
                    numPre()
                }
                if(e.target.id == ('next')){
                    numNext()
                }
            } else {
                if (navPanelPage.classList.contains('search') || navPanelPage.classList.contains('genre')) {
                    if(navPanelPage.classList.contains('genre')) {
                    getData(`https://api.themoviedb.org/3/discover/movie?api_key=84dadd31473be27d40ab4886ee4c7978&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${e.target.textContent}&with_genres=` + navPanelPage.id)
                        .then(data => setMovies(data))
                    } else {`https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=hfrd&page=1&include_adult=false`
                    getData(`${BASE_URL}/search/movie?${API_KEY}&language=en-US&query=${navPanelPage.id}&page=${e.target.textContent}`)
                        .then(data => setMovies(data))
                    }
                } else {
                    getMovies(e.target.textContent)
                    if(informationWrapper.style.display == 'block') {
                        setTimeout(() => document.querySelector('.overlay').scrollTop = 1200, 400)
                    }
                }
                remBtn()
                btn.classList.add('active')
            }

        })
    })
    function remBtn() {
        pageBtn.forEach(btn => {
            btn.classList.remove('active')
        })
    }

    /* Строка страниц -10*/
    function numPre() {
        if(pageBtn[1].textContent == 1){
        } else {
            for(let n = 1; n < 11; n++){
                const number = pageBtn[n].textContent;
                pageBtn[n].textContent =  Math.floor(Number(number) - 10);
            }
        }
    }

    /* Строка страниц +10*/
    function numNext() {
        if(pageBtn[1].textContent == 991){
        } else {
            for(let n = 1; n < 11; n++){
                const number = pageBtn[n].textContent;
                pageBtn[n].textContent = Math.floor(Number(number) + 10);
            }
        }
    }

    /* Строка страниц в начальное состояние */
    function pageBtnStart() {
        for (let n = 1; n < 11; n++){
            pageBtn[n].textContent = n;
            pageBtn[n].classList.remove('active')
        }
        pageBtn[1].classList.add('active')
    }

export {getMovies, setMovies, navPanelPage, pageBtnStart}
