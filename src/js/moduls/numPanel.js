import { ALL__MOVIE, API_KEY, BASE_URL, genres, IMG_URL, SEARCH__GEN, SEARCH__URL } from "../script";
import InfoPanel from "./infoPanel";
import Panel from "./panel";
import { getData } from "./services/getData";
export default class NumPanel {
    constructor() {
        this.btnOpen = document.querySelector('.watch__online');
        this.numPanel = document.querySelector('.num__page');
    }
    navNumPanel() {
       
    }
    init() {
        this.btnOpen.addEventListener('click', (e) => {
            const t = e.target;
            if(t == this.btnOpen || t.parentElement == this.btnOpen) {
                new Panel().openPanel()
                this.numPanel.style.display = 'block';
                search();
                getMovies();
            }
        })
    }
}

let ids = 1; 

/* Настройка навигации с помощью панели нумерации страниц */
const pageBtn = document.querySelectorAll('.pagination a'),
    navPanelPage = document.querySelector('.num__page'),
    genBtn = document.querySelectorAll('.geners__btn'),
    formSearch = document.querySelector('#search__form'),
    informationWrapper = document.querySelector('.information.tariler_container'),
    cardBlock = document.querySelector('.card__wrapper'),
    searchInput = document.querySelector('#search');

    remBtn()
    pageBtn[ids].classList.add('active');
    pageBtn.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            if (e.target.id == ('pre') || e.target.id == ('next')) {
                if(e.target.id == ('pre')){
                    numPre();
                }
                if(e.target.id == ('next')){
                    numNext();
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
                }
                remBtn();
                btn.classList.add('active');

            }
        })
    })
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

    function remBtn() {
        pageBtn.forEach(btn => {
            btn.classList.remove('active')
        })
    }

    function pageBtnStart() {
        for (let n = 1; n < 11; n++){
            pageBtn[n].textContent = n;
            pageBtn[n].classList.remove('active')
        }
        pageBtn[1].classList.add('active')
    }


    function search () {
        genBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                rmvActClass()
                btn.classList.add('btn__genre__active')
                getData(SEARCH__GEN + btn.id)
                .then(data => setMovies(data))
                navPanelPage.classList.remove('search')
                navPanelPage.classList.add('genre')
                navPanelPage.id = btn.id
                pageBtnStart()
            })
        })
    
        formSearch.addEventListener('submit', (e) => {
            getData(SEARCH__URL + searchInput.value)
                .then(data => setMovies(data))
                navPanelPage.classList.add('search')
                navPanelPage.classList.remove('genre')
                navPanelPage.id = searchInput.value
                pageBtnStart()
                rmvActClass()
                searchInput.value = ''
        })
    }
    function rmvActClass() {
        genBtn.forEach(btn => {
            btn.classList.remove('btn__genre__active')
        })
    }

     /* Получение фильмов для блока карточек */
     function getMovies (id) {
        ids = id 
        getData(ALL__MOVIE + id)
        .then(data => {

            new Panel().openPanel();   
            setMovies(data)  
            cardBlock.classList.add('all__movie');
            navPanelPage.style.display = 'block'   

        })
}

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
        
export {remBtn, pageBtnStart, rmvActClass}

