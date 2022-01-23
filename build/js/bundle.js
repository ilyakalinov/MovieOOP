/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/moduls/bd.js":
/*!*****************************!*\
  !*** ./src/js/moduls/bd.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");



const bd = () => {
    const BDWrapper = document.querySelector('.born__today__wrapper .photo'),
        nameBDPerson = BDWrapper.querySelectorAll('a'),
        imgBD = BDWrapper.querySelectorAll('img'),
        seeMoreBtn = document.querySelector('.news__container .midle__news .header a')

    function bd() {
         ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.POP_PSN__URL + `${Math.floor(Math.random()*9) + 1}`)
        .then(data => {
            setNewBD(data.results);
        })
    }
    bd();
    setInterval(bd, 45000)

    seeMoreBtn.addEventListener('click', () => bd())

    function setNewBD(persons) {

        for (let i = 0; i < 5; i++) {
            const {
                name,
                profile_path,
                id
            } = persons[Math.floor(Math.random()*persons.length)]

            imgBD[i].src=`${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + profile_path}`;
            imgBD[i].id = id;
            nameBDPerson[i].textContent=`${name}`;
            nameBDPerson[i].id = id
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (bd);

/***/ }),

/***/ "./src/js/moduls/boxOffice.js":
/*!************************************!*\
  !*** ./src/js/moduls/boxOffice.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _infoPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoPanel */ "./src/js/moduls/infoPanel.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");




const budget = () => {
    const BudgetWrapper = document.querySelector('.weekend'),
        nameBudget = BudgetWrapper.querySelectorAll('.weekend__img .title'),
        imgBudget = BudgetWrapper.querySelectorAll('img'),
        seeMoreBtn = BudgetWrapper.querySelector('.weekend__wrapper .header a'),
        revenue = BudgetWrapper.querySelectorAll('span');
    function budget() {
        
        (0,_services_getData__WEBPACK_IMPORTED_MODULE_2__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.POPULAR_MOVIE + `${Math.floor(Math.random()*20) + 1}`)
        .then(data => {
            setMovie(data.results)
        })
    }
    budget();
    // setInterval(budget, 50000)

    seeMoreBtn.addEventListener('click', () => budget()) /* Обновление по кнопке */

    function setMovie(movie) {
        
        for (let i = 0; i < 6; i++) {
            let revNum = Math.floor(Math.random()*movie.length);
            const {
               title,
               poster_path,
               id,
            } = movie[revNum]
            nameBudget[i].textContent = title.length > 20 ? (title.slice(0, 20) + `...`) : title ;
            nameBudget[i].id = id;
            imgBudget[i].src = `${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path}`
            imgBudget[i].id = id;
            let movieId = id
            ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_2__.getInfo)(movieId)
                .then(inf => {
                    var rev = inf.revenue.toString();
                    revenue[i].textContent = `$${rev.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')}`;
                    if (inf.revenue == 0) {
                        moreTimesSetMovie(i)
                        console.log('00000000000000000000')
                    }
                })
        }

        function moreTimesSetMovie (n) {
            let revNum = Math.floor(Math.random()*movie.length);
            
            const {
                title,
                poster_path,
                id,
            } = movie[revNum]

            nameBudget[n].textContent = title.length > 20 ? (title.slice(0, 20) + `...`) : title ;
            nameBudget[n].id = id;
            imgBudget[n].src = `${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path}`
            imgBudget[n].id = id;
            let movieId = id

            ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_2__.getInfo)(movieId)
                .then(inf => {
                    var rev = inf.revenue.toString();
                    revenue[n].textContent = `$${rev.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')}`;
                    if (inf.revenue == 0) {
                        moreTimesSetMovie(n)
                    }
                })
        }
        new _infoPanel__WEBPACK_IMPORTED_MODULE_1__["default"]('.weekend__img .title', '.weekend__img img').open();
    }

}

/* harmony default export */ __webpack_exports__["default"] = (budget);

/***/ }),

/***/ "./src/js/moduls/galleryPanel.js":
/*!***************************************!*\
  !*** ./src/js/moduls/galleryPanel.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GalleryPanel; }
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");


class GalleryPanel {
    constructor(id) {
        this.id = id;
        this.btnOpen = document.querySelector('.btn__click');
        this.btnClose = document.querySelector('.btn__click__close');
        this.galleryBox = document.querySelector('.photo__box');
        this.gallery = document.querySelector('.gallery__box__wrapper');
    }
    open() {
        this.btnOpen
        if(this.galleryBox) {
            this.galleryBox.remove();
        }
        
        this.gallery.style.display = 'block';
        setTimeout(() => {this.gallery.scrollIntoView({
            behavior: "smooth",
            block: 'start'
        });
        this.btnOpen.querySelector('.loadingio-spinner-spin-ld66ttjruz').style.opacity = '0';
        this.btnOpen.querySelector('h4').style.opacity = '1';
        }, 1000)
        this.btnOpen.querySelector('.loadingio-spinner-spin-ld66ttjruz').style.opacity = '1';
        this.btnOpen.querySelector('h4').style.opacity = '0.4';
        this.galleryBox = document.createElement('div');
        this.galleryBox.classList.add('photo__box');
        this.galleryBox.innerHTML = `
            <div class="photo__box">
                <div class="btn__box">
                    <button class="btnOne btn__gallery">1</button>
                    <button class="btnTwo btn__gallery">2</button>
                    <button class="btnFour btn__gallery">4</button>
                </div>
                <div class="row">
                    <div class="column gallery__column">

                    </div>
                    <div class="column gallery__column">

                    </div>
                    <div class="column gallery__column">
                
                    </div>
                    <div class="column gallery__column">

                    </div>
                </div>
            </div>
        `
        this.gallery.appendChild(this.galleryBox);

        this.columns = document.querySelectorAll('.gallery__column');
        (0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(`https://api.themoviedb.org/3/movie/${this.id}/images?api_key=84dadd31473be27d40ab4886ee4c7978`)
            .then(data => data.backdrops)
               .then(data => {
                    for(let p = 0; p < Math.floor(data.length/4); p++) {
                        const photoOne = document.createElement('img');
                        photoOne.id = 'gallery__item';
                        photoOne.src = _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + data[p].file_path;
                        this.columns[0].appendChild(photoOne);
                        this.showPhoto();
                    }
                    for(let p = Math.floor(data.length/4); p < Math.floor((data.length/4)*2); p++) {
                        const photoTwo = document.createElement('img');
                        photoTwo.id = 'gallery__item';
                        photoTwo.src = _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + data[p].file_path;
                        this.columns[1].appendChild(photoTwo);
                        this.showPhoto();
                    }
                    for(let p = Math.floor(data.length/2); p < Math.floor((data.length/4)*3); p++) {
                        const photoThree = document.createElement('img');
                        photoThree.id = 'gallery__item';
                        photoThree.src = _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + data[p].file_path;
                        this.columns[2].appendChild(photoThree);
                        this.showPhoto();
                    }
                    for(let p = Math.floor((data.length/4)*3); p < data.length; p++) {
                        const photoFour = document.createElement('img');
                        photoFour.id = 'gallery__item';
                        photoFour.src = _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + data[p].file_path;
                        this.columns[3].appendChild(photoFour);
                        this.showPhoto();
                    }
                })
                this.navGallery();
        }

    close() {
        this.galleryBox.remove();
        this.gallery.style.display = 'none';
    }

    showPhoto() {
        const imgItem = document.querySelectorAll('.gallery__column img');
        const elements = document.getElementsByClassName("gallery__column");
        imgItem.forEach(img => {
            img.addEventListener('click', (e) => {
                const target = e.target;
                one()
                target.scrollIntoView({
                    behavior: "smooth",
                    block: 'center'
                }, 50)
            })
        })
        let i;
        function one() {
            for (i = 0; i < elements.length; i++) {
                elements[i].style.flex = "100%";
            }
        }
    }
 
    navGallery() {
        this.btnOne = document.querySelector('.btnOne');
        this.btnTwo = document.querySelector('.btnTwo');
        this.btnFour = document.querySelector('.btnFour');
        const elements = document.getElementsByClassName("gallery__column");

        this.btnOne.addEventListener('click', () => {
            one()
        })
    
        this.btnTwo.addEventListener('click', () => {
            two()
        })
    
        this.btnFour.addEventListener('click', () => {
            four()
        })
    
        let i;
        function one() {
            for (i = 0; i < elements.length; i++) {
                elements[i].style.flex = "100%";
            }
        }
        function two() {
            for (i = 0; i < elements.length; i++) {
                elements[i].style.flex = "50%";
            }
        }
        function four() {
            for (i = 0; i < elements.length; i++) {
                elements[i].style.flex = "25%";
            }
        }
    }

    init() {
        this.btnOpen.addEventListener('click', () => {
            this.open();
        })
        this.btnClose.addEventListener('click', () => {
            this.close();
        })
    }
}


/***/ }),

/***/ "./src/js/moduls/getPopMovies.js":
/*!***************************************!*\
  !*** ./src/js/moduls/getPopMovies.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopMovies; }
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");



class PopMovies {
    constructor(url) {
        this.url = url;
        this.movieNow = document.querySelectorAll('.movie__now__wrapper');
        this.infoBox = document.querySelectorAll('.now__menu');
        this.infoInner = document.querySelectorAll('.menu__item');
        this.movieName = document.querySelectorAll('.movie__now__wrapper .title');
        this.genreList = document.querySelectorAll('.movie__now__wrapper .movie__now__genre');
        this.descr = document.querySelectorAll('.movie__now_description');
        this.spinner = document.querySelectorAll('.cssload-thecube');
    }
    showPopMovies(url) {
        for (let i = 0; i <= this.movieNow.length; i++) {
            (0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(url)
                .then(data => data.results)
                    .then(movies => {
                        const{title, poster_path, genre_ids, id} = movies[Math.floor(Math.random()*movies.length)];

                        const nowGenres = []
                        genre_ids.forEach(genre => {
                            function setGenre(num) {
                                _script__WEBPACK_IMPORTED_MODULE_0__.genres.forEach(genre => {
                                        if(genre.id === num) {
                                            nowGenres.push(genre.name)
                                        }
                                })
                            }
                            setGenre(genre)
                        })  
                        this.movieNow[i].style = `background-image: url('${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path}');`
                        this.movieName[i].textContent = title;
                        this.genreList[i].textContent = nowGenres;
                        this.movieNow[i].parentElement.querySelector('.watch__trailer').id = `${id}`
                        this.movieNow[i].parentElement.querySelector('.information__item').id = `${id}`
                    })
                    .finally(() => {
                        this.movieNow[i].style.display = 'flex';
                        this.spinner[i].remove();
                    })
        }
    }

    showInfoPanel(blocks) {
        blocks.forEach(block => {
            block.addEventListener('mouseover', (e) => {
                const t = e.target;
                this.hideInfo(this.infoBox, this.descr)
                if (t.parentElement == block || t == block || t.parentElement.parentElement == block){
                    this.showInfo(block)
                }
            })
        })
    }

    showInfo(item) {
        item.parentElement.querySelector('.now__menu').classList.add('active__movie')
        item.querySelector('.movie__now_description').classList.add('description__active')
    }
    hideInfo(...items){
        this.infoBox.forEach(item => {
            item.classList.remove('active__movie')
        })
        this.descr.forEach(item => {
            item.classList.remove('description__active')
        })
    }
    init() {
        this.showPopMovies(this.url)
        this.showInfoPanel(this.movieNow)
    }
}



/***/ }),

/***/ "./src/js/moduls/infoPanel.js":
/*!************************************!*\
  !*** ./src/js/moduls/infoPanel.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InfoPanel; }
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _galleryPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galleryPanel */ "./src/js/moduls/galleryPanel.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ "./src/js/moduls/panel.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _services_videoPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/videoPlayer */ "./src/js/moduls/services/videoPlayer.js");






class InfoPanel {
    constructor(...trigger) {
        this.panel = document.querySelector('.overlay');
        this.panelInner = document.querySelector('.overlay__info');
        this.triggers = document.querySelectorAll(trigger);
        this.closebtn = document.querySelector('.closebtn');
    }
    open() {
        new _panel__WEBPACK_IMPORTED_MODULE_2__["default"]().closePanel()
        this.triggers.forEach(btn => {
            btn.addEventListener('click', () => {
                console.log()
                this.setInfo(btn.id);
                new _panel__WEBPACK_IMPORTED_MODULE_2__["default"]().openPanel();
                
            })
        })
    }
    setInfo(id) {
        (0,_services_getData__WEBPACK_IMPORTED_MODULE_3__.getInfo)(id)
        .then(info =>  {
            const {
                id,
                genres, 
                title, 
                production_countries, 
                release_date, 
                runtime, 
                budget, 
                vote_average, 
                poster_path, 
                overview
            } = info;
            this.panelInner.innerHTML = '';
            this.infoPanel = document.createElement('div');
            this.infoPanel.classList.add('information', 'tariler_container');
            this.infoPanel.innerHTML = `
            <div class="information__wrapper">
            <div class="trailers">
                <h2 class="trailer__side">
                    IFORMATION
            </div>
                <div class="movie__from">
                    <div class="movie__inform">
                        <img src="${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path}">
                        <div class="movie__inform__box">
                            <div class="movie__inform__geners">
                                <h1 class="title">
                                    ${title.length > 20 ? `${title.slice(0, 20)}...` : title}
                                </h1>
                                <div class="inf__stat">
                                    <span>year</span>
                                    <span class="inf year">${release_date.replace(/-/g, ".")}</span>
                                </div>
                                <div class="inf__stat">
                                    <span>country</span>
                                    <span class="inf country">${production_countries[0].name}</span>
                                </div>
                                <div class="inf__stat">
                                    <span>Voite</span>
                                    <span class="inf average">${vote_average}</span>
                                </div>
                                <div class="inf__stat">
                                    <span>genres</span>
                                    <div class="genre__box genre__box">
                                        ${genres[0].name}
                                        <div class="genre__box__color"><div>.</div></div>
                                    </div>
                                </div>
                                <div class="inf__stat">
                                    <span>budget</span>
                                    <span class="inf budget">${budget}</span>
                                </div>
                                <div class="inf__stat">
                                    <span>duration</span>
                                    <span class="inf runtime">${runtime} min</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="trailer__window inform__play">
                    <div id='trailer__window' >
                    </div>
                </div>
            </div>
            <div class="movie__description__wrapper">
                <div class="trailer__window inform__play_mob" id="trailer__window_play"
                style='background-size: cover;
                        background-position: center;'>
                
                </div>
                <div class="movie__description">
                    ${overview}
                </div>
            </div>
            <div class="gallery">
                <div class="movies__photos">
                    <h1>Movie's photo</h1>
                    <button class="btn__click">
                        <div class="loadingio-spinner-spin-ld66ttjruz"><div class="ldio-ubk447plaon">
                            <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
                        </div></div>
                        <h4 href="photo__box">Open gallery</h4>
                    </button>
                    <button class="btn__click__close"><h4>Close gallery</h4></button>
                </div>
            </div>
            `;
            this.panelInner.appendChild(this.infoPanel)
            new _services_videoPlayer__WEBPACK_IMPORTED_MODULE_4__["default"](id, 'trailer__window').createPlayer();
            new _galleryPanel__WEBPACK_IMPORTED_MODULE_1__["default"](id).init();
            this.panelInner.scrollIntoView({
                behavior: "smooth",
                block: 'center'
            }, 50)
        })
    }
}

/***/ }),

/***/ "./src/js/moduls/middle.js":
/*!*********************************!*\
  !*** ./src/js/moduls/middle.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _infoPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoPanel */ "./src/js/moduls/infoPanel.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");




function middleMovie(url) {
    const item = document.querySelector('.random__wrapper'),
        name = document.querySelector('.info__random .title'), 
        genreses = document.querySelector('.genres__random');
    (0,_services_getData__WEBPACK_IMPORTED_MODULE_2__.getData)(url + `${Math.floor(Math.random()*9) + 1}`) 
    .then(data =>{
        console.log(data.results[0].title)
        const{poster_path, genre_ids, id} = data.results[0];
            
            const nowGenres = []
            genre_ids.forEach(genre => {
                function setGenre(num) {
                    _script__WEBPACK_IMPORTED_MODULE_0__.genres.forEach(genre => {
                            if(genre.id === num) {
                                nowGenres.push(genre.name)
                            }
                    })
                }
                setGenre(genre)
            })  

            item.style = `background-image: url('${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path}'); background-size: contain;`
            name.textContent = data.results[0].title;
            genreses.textContent = nowGenres;
            item.id = `${id}`;
            name.id = `${id}`;
            new _infoPanel__WEBPACK_IMPORTED_MODULE_1__["default"]('.random__wrapper', '.random__wrapper .info__random').open();
    })
}

/* harmony default export */ __webpack_exports__["default"] = (middleMovie);

/***/ }),

/***/ "./src/js/moduls/movieList.js":
/*!************************************!*\
  !*** ./src/js/moduls/movieList.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setPersonMovies": function() { return /* binding */ setPersonMovies; }
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _infoPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoPanel */ "./src/js/moduls/infoPanel.js");




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
                    _script__WEBPACK_IMPORTED_MODULE_0__.genres.forEach(genre => {
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
                <div class="movie__card flip-card-front" style = 'background-image:url(${poster_path ? (_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path) : './img/nowplay.png>'});'>
                    <div class="movie__card_description" id='movie__card_description'>
                        <h2 class="title">
                            ${title.length > 30 ? title.slice(0, 30) + `...` : title}
                        </h2>
                        <span class="movie__now__genre">
                            ${nowGenres}
                        </span>
                        </div>
                </div>
                <div class="movie__card flip-card-back" style = 'background-image:url(${poster_path ? (_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path) : './img/nowplay.png>'});'>
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
        new _infoPanel__WEBPACK_IMPORTED_MODULE_1__["default"]('.container__play').open();
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
                    _script__WEBPACK_IMPORTED_MODULE_0__.genres.forEach(genre => {
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
                <div class="movie__card flip-card-front" style = 'background-image:url(${poster_path ? (_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path) : './img/nowplay.png>'});'>
                    <div class="movie__card_description" id='movie__card_description'>
                        <h2 class="title">
                            ${title.length > 30 ? title.slice(0, 30) + `...` : title}
                        </h2>
                        <span class="movie__now__genre">
                            ${nowGenres}
                        </span>
                        </div>
                </div>
                <div class="movie__card flip-card-back" style = 'background-image:url(${poster_path ? (_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path) : './img/nowplay.png>'});'>
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
        new _infoPanel__WEBPACK_IMPORTED_MODULE_1__["default"]('.container__play').open();
    }

    
    /* harmony default export */ __webpack_exports__["default"] = (setMovies);

/***/ }),

/***/ "./src/js/moduls/mp.js":
/*!*****************************!*\
  !*** ./src/js/moduls/mp.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _infoPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoPanel */ "./src/js/moduls/infoPanel.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");




const mp = () => {
    const MPWrapper = document.querySelector('.netflix__wrapper'),
        nameMP = MPWrapper.querySelectorAll('.photo_item a'),
        imgMP = MPWrapper.querySelectorAll('img'),
        seeMoreBtn = document.querySelector('.news__container .midle__news .netflix__wrapper .header a');

    function mp() {
         (0,_services_getData__WEBPACK_IMPORTED_MODULE_2__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.POPULAR_MOVIE + `${Math.floor(Math.random()*9) + 1}`)
        .then(data => {
            setNewMP(data.results);
        })
        new _infoPanel__WEBPACK_IMPORTED_MODULE_1__["default"]('.netflix__wrapper .photo_item a', '.netflix__wrapper img').open();
    }
    mp();
    // setInterval(mp, 50000)

    seeMoreBtn.addEventListener('click', () => {
        mp();
    }) /* Обновление по кнопке */

    function setNewMP(movie) {
        for (let i = 0; i < 5; i++) {
            const {
               title,
               poster_path,
               id
            } = movie[Math.floor(Math.random()*movie.length)]
            nameMP[i].textContent = title.length > 30 ? (title.slice(0, 30) + `...`) : title ;
            nameMP[i].id = id;
            imgMP[i].src = `${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path}`
            imgMP[i].id = id;
        }
        
    }
}

/* harmony default export */ __webpack_exports__["default"] = (mp);

/***/ }),

/***/ "./src/js/moduls/numPanel.js":
/*!***********************************!*\
  !*** ./src/js/moduls/numPanel.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NumPanel; },
/* harmony export */   "remBtn": function() { return /* binding */ remBtn; },
/* harmony export */   "pageBtnStart": function() { return /* binding */ pageBtnStart; },
/* harmony export */   "rmvActClass": function() { return /* binding */ rmvActClass; }
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _infoPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoPanel */ "./src/js/moduls/infoPanel.js");
/* harmony import */ var _movieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieList */ "./src/js/moduls/movieList.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel */ "./src/js/moduls/panel.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");





class NumPanel {
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
                new _panel__WEBPACK_IMPORTED_MODULE_3__["default"]().openPanel()
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
                    (0,_services_getData__WEBPACK_IMPORTED_MODULE_4__.getData)(`https://api.themoviedb.org/3/discover/movie?api_key=84dadd31473be27d40ab4886ee4c7978&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${e.target.textContent}&with_genres=` + navPanelPage.id)
                        .then(data => (0,_movieList__WEBPACK_IMPORTED_MODULE_2__["default"])(data))
                    } else {`https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=hfrd&page=1&include_adult=false`
                    ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_4__.getData)(`${_script__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/search/movie?${_script__WEBPACK_IMPORTED_MODULE_0__.API_KEY}&language=en-US&query=${navPanelPage.id}&page=${e.target.textContent}`)
                        .then(data => (0,_movieList__WEBPACK_IMPORTED_MODULE_2__["default"])(data))
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
                ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_4__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.SEARCH__GEN + btn.id)
                .then(data => (0,_movieList__WEBPACK_IMPORTED_MODULE_2__["default"])(data))
                navPanelPage.classList.remove('search')
                navPanelPage.classList.add('genre')
                navPanelPage.id = btn.id
                pageBtnStart()
            })
        })
    
        formSearch.addEventListener('submit', (e) => {
            ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_4__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.SEARCH__URL + searchInput.value)
                .then(data => (0,_movieList__WEBPACK_IMPORTED_MODULE_2__["default"])(data))
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
        ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_4__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.ALL__MOVIE + id)
        .then(data => {

            new _panel__WEBPACK_IMPORTED_MODULE_3__["default"]().openPanel();   
            (0,_movieList__WEBPACK_IMPORTED_MODULE_2__["default"])(data)  
            cardBlock.classList.add('all__movie');
            navPanelPage.style.display = 'block'   

        })
}
        




/***/ }),

/***/ "./src/js/moduls/panel.js":
/*!********************************!*\
  !*** ./src/js/moduls/panel.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Panel; }
/* harmony export */ });
/* harmony import */ var _numPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./numPanel */ "./src/js/moduls/numPanel.js");


class Panel {
    constructor() {
        this.panel = document.querySelector('.overlay');
        this.panelInner = document.querySelector('.overlay__info');
        this.closebtn = document.querySelector('.closebtn');
        this.numPanel = document.querySelector('.num__page');
        this.cardPerson = document.querySelector('.card__person');
        this.movieList = document.querySelector('.card__wrapper');
        this.gallery = document.querySelector('.gallery__box__wrapper');
        this.wallpapersList = document.querySelector('.wallpapers__list');
    }
    openPanel() {
        this.panel.classList.add('open__panel');
    }
    closePanel() {
        this.closebtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.setStartSetup()
        })
        this.panel.addEventListener('click', (e) => {
            if(e.target === this.panel) {
                this.setStartSetup()
            }
        })
    }
    setStartSetup() {
        this.panel.classList.remove('open__panel');
        this.panelInner.innerHTML = ``;
        (0,_numPanel__WEBPACK_IMPORTED_MODULE_0__.remBtn)();
        (0,_numPanel__WEBPACK_IMPORTED_MODULE_0__.rmvActClass)();
        this.gallery.style.display = 'none';
        this.numPanel.style.display = 'block'
        this.cardPerson.style.display = 'none';
        this.movieList.style.display = 'none';
        this.wallpapersList.style.display = 'none';
    }
}

/***/ }),

/***/ "./src/js/moduls/person.js":
/*!*********************************!*\
  !*** ./src/js/moduls/person.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _infoPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoPanel */ "./src/js/moduls/infoPanel.js");
/* harmony import */ var _personCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personCard */ "./src/js/moduls/personCard.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");





const person = () => {
    const newsWrapper = document.querySelector('.last__news .menu__items'),
        seeMoreBtn = document.querySelector('.last__news a');

    newsWrapper.innerHTML = ''
    
    function person() {
         ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_3__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.PSN__URL + `${Math.floor(Math.random()*9) + 1}`)
        .then(data => {
            setNewPerson(data.results);
        })
    }
    person();
    // setInterval(person, 25000)

    seeMoreBtn.addEventListener('click', () => person()) /* Обновление по клику */

    function setNewPerson(persons) {
        newsWrapper.innerHTML = ''

        for (let i = 0; i < 3; i++) {
            
            const {
                name,
                known_for,
                profile_path,
                id
            } = persons[Math.floor(Math.random()*persons.length)]
            
            const newPerson = document.createElement('div');
            newPerson.classList.add('menu__item');
           try {
            newPerson.innerHTML = `
                <img id='${id ? id : 608}' class='person__img to_list' src="${profile_path ? _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + profile_path : _script__WEBPACK_IMPORTED_MODULE_0__.NON__PSN} " alt="">
                <div class="description">
                    <div class="title">
                        <a class='to_list' id='${id}' style='color: black;'>${name}</a>
                    </div>
                    <div class="films__wrapper">
                        <div class="films">
                            <a class='psn__movie' id='${known_for[0].id}'>
                                1.${known_for[0].title ? (known_for[0].title.length > 12 ? (known_for[0].title.slice(0, 15) + `...`) : known_for[0].title) : 'Not data'}
                                        (${known_for[0].release_date ? known_for[0].release_date.slice(0, 4) : 'not data'})</a>
                            <a class='psn__movie' id='${known_for[1].id}'>
                                2.${known_for[1].title ? (known_for[1].title.length > 12 ? (known_for[1].title.slice(0, 15) + `...`) : known_for[1].title) : 'Not data'}
                                        (${known_for[1].release_date ? known_for[1].release_date.slice(0, 4) : 'not data'})</a>
                            <a class='psn__movie' id='${known_for[2].id}'>
                                3.${known_for[2].title ? (known_for[2].title.length > 12 ? (known_for[2].title.slice(0, 15) + `...`) : known_for[2].title) : 'Not data'}
                                        (${known_for[2].release_date ? known_for[2].release_date.slice(0, 4) : 'not data'})</a>
                        </div>
                    </div>
                </div>
            `
           } catch{
               newPerson.innerHTML = `
               <img id='' class='person__img to_list' src="${_script__WEBPACK_IMPORTED_MODULE_0__.NON__PSN}" alt="">
               <div class="description">
                   <div class="title">
                       <a class='to_list' id='$' style='color: black;'>'not data'</a>
                   </div>
                   <div class="films__wrapper">
                       <div class="films">
                           <a class='psn__movie' id=''>'not data'}</a>
                           <a class='psn__movie' id=''>
                               2.'not data'</a>
                           <a class='psn__movie' id=''>
                               3.'not data'</a>
                       </div>
                   </div>
               </div>
           `
           }
            newsWrapper.appendChild(newPerson);
            const prsnImg = document.querySelectorAll('.person__img');
            prsnImg.src = !profile_path ? _script__WEBPACK_IMPORTED_MODULE_0__.NON__IMG : `${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + profile_path}`;
            new _infoPanel__WEBPACK_IMPORTED_MODULE_1__["default"]('.psn__movie', ).open();
            (0,_personCard__WEBPACK_IMPORTED_MODULE_2__["default"])('.last__news img', '.last__news .to_list');
        }
    }
}

/* harmony default export */ __webpack_exports__["default"] = (person);

/***/ }),

/***/ "./src/js/moduls/personCard.js":
/*!*************************************!*\
  !*** ./src/js/moduls/personCard.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _movieList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movieList */ "./src/js/moduls/movieList.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ "./src/js/moduls/panel.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");





const cardPerson = document.querySelector('.card__person'),
        cardImg = cardPerson.querySelector('img'),
        cardName = cardPerson.querySelector('b'),
        cardPop = cardPerson.querySelector('.popularity'),
        numPanel = document.querySelector('.num__page'),
        cardDepartment = cardPerson.querySelector('.known_for_department');

function personCard(...trigerBtns) {
    const btns = document.querySelectorAll(trigerBtns);
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            SetCardPerson(btn.id)
            cardPerson.style.display = 'block'
        })
    })
}
function SetCardPerson(id) {
    (0,_services_getData__WEBPACK_IMPORTED_MODULE_3__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.BASE_URL + `/person/${id}?` + _script__WEBPACK_IMPORTED_MODULE_0__.API_KEY)
        .then(data => {
            const {
                name,
                profile_path,
                popularity,
                known_for_department
            } = data;

            cardName.textContent = name;
            cardImg.src = `${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + profile_path}`;
            cardDepartment.textContent = known_for_department;
            cardPop.textContent = Math.floor(popularity);

            (0,_services_getData__WEBPACK_IMPORTED_MODULE_3__.getData)(`https://api.themoviedb.org/3/person/${id}/movie_credits?${_script__WEBPACK_IMPORTED_MODULE_0__.API_KEY}&language=en-US`)
                .then(data => {
                    console.log(data.cast);
                    (0,_movieList__WEBPACK_IMPORTED_MODULE_1__.setPersonMovies)(data.cast);
                    new _panel__WEBPACK_IMPORTED_MODULE_2__["default"]().openPanel();   
                    numPanel.style.display = 'none';
                });
        })
    }
 
/* harmony default export */ __webpack_exports__["default"] = (personCard);


/***/ }),

/***/ "./src/js/moduls/randomMovie.js":
/*!**************************************!*\
  !*** ./src/js/moduls/randomMovie.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _services_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/spinner */ "./src/js/moduls/services/spinner.js");
/* harmony import */ var _services_videoPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/videoPlayer */ "./src/js/moduls/services/videoPlayer.js");






const randomMovieWrapepr = document.querySelector('.tariler_container.random'),  
        movieName = randomMovieWrapepr.querySelector('.title'),
        movieYear = randomMovieWrapepr.querySelector('.year'),
        movieLanguage = randomMovieWrapepr.querySelector('.language'),
        movieAverage = randomMovieWrapepr.querySelector('.average'),
        movieGenre = randomMovieWrapepr.querySelector('.genre__box'),
        moviePopularity = randomMovieWrapepr.querySelector('.popularity'),
        movieViem = randomMovieWrapepr.querySelector('.count'),
        description =randomMovieWrapepr.querySelector('.movie__description'),
        trailerWindow = randomMovieWrapepr.querySelector('.trailer__window'),
        bgrInf = randomMovieWrapepr.querySelector('.movie__inform img'),
        rndBtn = document.querySelector('.random__btn');
       

const randomMovie = () => {
    const getRandomMovies = () => {

        getMovies(_script__WEBPACK_IMPORTED_MODULE_0__.POPULAR_MOVIE + `${Math.floor(Math.random()*9) + 1}`)
        function getMovies(url) {
            fetch(url)
                .then(res => res.json())
                    .then(data => {
                        let id = Math.floor(Math.random() * 20);
                        setRandomMovie(data.results[id])
                        openRNDWithPlayer(data.results[id].id)
                    })
        }
    }
    setTimeout(getRandomMovies, 800)
    // setInterval(getRandomMovies, 15000)

    rndBtn.addEventListener('click', () => getRandomMovies());

    function setRandomMovie(info) {
        const {
            title,
            original_language,
            vote_average,
            genre_ids,
            release_date,
            popularity,
            vote_count, 
            overview,
            backdrop_path,
            poster_path
        } = info;

        let genreName = '';

        _script__WEBPACK_IMPORTED_MODULE_0__.genres.forEach((genre, i) => {
            if(genre_ids[0] === genre.id) {
                genreName = genre.name
            }
        })

        let name = title;
        if (title.length > 20) {
            name = `${title.slice(0, 30)}...` 
        }
        
        movieName.textContent = name;
            movieYear.textContent = release_date.replace(/-/g, '.');
            movieLanguage.textContent = original_language;
            movieGenre.textContent = genreName;
            movieAverage.textContent = vote_average;
            moviePopularity.textContent = popularity;
            movieViem.textContent = vote_count;
            description.textContent = overview;
            trailerWindow.style = `background-image: url(${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + backdrop_path});
                                    background-size: cover;
                                    background-position: center;`
            bgrInf.src = `${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path}`
        
    }
    function openRNDWithPlayer(id) {
        document.querySelectorAll('.loadingio-spinner-spin-wffps27ze9i').forEach(spin => {
            spin.remove();
        })
        ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getVideo)(id)
        .then(videoData => {
            let {key} = videoData.results[Math.floor(Math.random() *  videoData.results.length)];
                    if(document.querySelector('iframe#random')) {
                        const play = document.querySelector('iframe#random');
                        play.src = `https://www.youtube.com/embed/${key}`;
                        new _services_spinner__WEBPACK_IMPORTED_MODULE_2__["default"]('random').createSpinner();
                        play.style.display = 'none';
                        play.onload = (() => {
                            new _services_spinner__WEBPACK_IMPORTED_MODULE_2__["default"]('random').deleteSpinner();
                            play.style.display = 'inline-block';
                        })
                    } else {
                        new _services_videoPlayer__WEBPACK_IMPORTED_MODULE_3__["default"](id, 'random').createPlayer();
                }
            })
            .catch(() => {
                new _services_spinner__WEBPACK_IMPORTED_MODULE_2__["default"]('random').createSpinner();
                const play = document.querySelector('iframe#random');
                play.style.display = 'none';
            })
        }
    
}
/* harmony default export */ __webpack_exports__["default"] = (randomMovie);

/***/ }),

/***/ "./src/js/moduls/services/getData.js":
/*!*******************************************!*\
  !*** ./src/js/moduls/services/getData.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": function() { return /* binding */ getData; },
/* harmony export */   "getInfo": function() { return /* binding */ getInfo; },
/* harmony export */   "getVideo": function() { return /* binding */ getVideo; }
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script */ "./src/js/script.js");


const getData = async (url) => {
    let data = await fetch (url);

    if(!data.ok) {
        throw new Error(`Could nod fetch ${url}, status: ${data.status}`)
    }

    return await data.json();
}

const getInfo = async (id) => {
    let info = await fetch(`${_script__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/movie/${id}?${_script__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`)

    if(!info.ok) {
        throw new Error(`Could nod fetch ${id}, status: ${info.status}`)
    }

    return await info.json();
}

const getVideo = async (id) => {
    let videos = await fetch(`${_script__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/movie/${id}/videos?${_script__WEBPACK_IMPORTED_MODULE_0__.API_KEY}`)
    
    if(!videos.ok) {
        throw new Error(`Could nod fetch ${id}, status: ${videos.status}`)
    }

    return await videos.json();
}



/***/ }),

/***/ "./src/js/moduls/services/scrollTo.js":
/*!********************************************!*\
  !*** ./src/js/moduls/services/scrollTo.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScrollTo; }
/* harmony export */ });
class ScrollTo {
    constructor() {
        this.anchors = document.querySelectorAll('.nav__btn');
        this.aDef = document.querySelectorAll('a');
        this.upBtn = document.getElementById("myBtn");
        this.panel = document.querySelector('.overlay');
    }

    getAncors () {
        this.aDef.forEach(a => a.addEventListener('click', (e) => e.preventDefault()))
        this.anchors.forEach(anc => {
            anc.addEventListener('click', (e) => {
                e.preventDefault()
                const id = anc.childNodes[1].getAttribute('href')
                this.toBlock(id);
            })
        })
    }

    toBlock(id) {
        document.querySelector(`#${id}`).scrollIntoView({
            behavior: "smooth",
            block: 'center'
        })
    }

    scrollFunction() {
        document.body.onscroll = () => {
            this.scrollOn(this.upBtn)
        };
        this.panel.onscroll = () => {
            this.scrollOn(this.upBtn)
        };
    }

    scrollOn(btn) {
        if(this.panel.classList.contains('open__panel')) {
            if (this.panel.scrollTop > 50) {
                btn.style.opacity = "1";
            } else {
                btn.style.opacity = "0";
            }
                btn.addEventListener('click', () => {
                document.querySelector('.overlay').scrollTop = 0;
            })
        } else {
            if (window.scrollY > 50) {
                btn.style.opacity = "1";
            } else { 
                btn.style.opacity = "0";
            }
                btn.addEventListener('click', () => {
                document.querySelector('body').scrollTop = 0;
            })
        }    
    }
    
    init() {
        this.getAncors()
        this.scrollFunction();
    }
}

/***/ }),

/***/ "./src/js/moduls/services/spinner.js":
/*!*******************************************!*\
  !*** ./src/js/moduls/services/spinner.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Spinner; }
/* harmony export */ });
class Spinner{
    constructor(selector = ''){
        this.selector = selector;
    }
    createSpinner() {
        this.spinnerElem = document.createElement('div');
        this.spinnerElem.classList.add('loadingio-spinner-spin-wffps27ze9i');
        this.spinnerElem.innerHTML = `
            <div class="ldio-zv7gliytzt">
                <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
            </div>
        `
        document.querySelector(`#${this.selector}`).parentElement.appendChild(this.spinnerElem);
    }
    deleteSpinner() {
        document.querySelector(`#${this.selector}`).parentElement.querySelector('.loadingio-spinner-spin-wffps27ze9i').remove()
    }
    createSpinnerMov(block){
        this.spinnerElem = document.createElement('div');
        this.spinnerElem.classList.add('loadingio-spinner-spin-wffps27ze9i');
        this.spinnerElem.innerHTML = `
            <div class="ldio-zv7gliytzt">
                <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
            </div>
        `
        this.block = block;
        this.block.appendChild(this.spinnerElem);
    }
}

/***/ }),

/***/ "./src/js/moduls/services/videoPlayer.js":
/*!***********************************************!*\
  !*** ./src/js/moduls/services/videoPlayer.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VideoPlayer; },
/* harmony export */   "videoPlayer": function() { return /* binding */ videoPlayer; }
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script */ "./src/js/script.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner */ "./src/js/moduls/services/spinner.js");




const videoPlayer = () => {

  let tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

class VideoPlayer{
  constructor(id, selector) {
    this.id = id;
    this.block = selector;
  }
  createPlayer() {
    new _spinner__WEBPACK_IMPORTED_MODULE_2__["default"](this.block).createSpinner();
    (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getVideo)(this.id)
      .then(data => {
        this.key = data.results[Math.floor(Math.random()*data.results.length)].key
        this.setPlayer(this.key)
      })
      .finally(() => {
        new _spinner__WEBPACK_IMPORTED_MODULE_2__["default"](this.block).deleteSpinner();
      })
      .catch(() => {
        new _spinner__WEBPACK_IMPORTED_MODULE_2__["default"](this.block).createSpinner();
      })
      
      
  }
  setPlayer(key) {
    let player;
  
    player = new YT.Player(this.block, {
      height: '100%',
      width: '100%',
      videoId: `${this.key}`,
      events: {
        'onReady': onPlayerReady
      }
    });
    function onPlayerReady(event) {
      let video = event.target.h;
    }
  }
}



/***/ }),

/***/ "./src/js/moduls/slider.js":
/*!*********************************!*\
  !*** ./src/js/moduls/slider.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);

const slider = () => {
    let position = 0;
    const slidesToShow = 3,
        slidesToScroll = 2,
        container = document.querySelector('.movie__now__box'),
        track = document.querySelector('.movie__now__box__wrapper'),
        slide = document.querySelectorAll('.movie__now');
    
    const itemWidth = slide[0].offsetWidth;
    let start = 0;
    let move = 0;
    container.addEventListener('touchstart', (e) => {
        start = e.touches[0].clientX
    })
    container.addEventListener('touchend', (e) => {

        move = e.changedTouches[0].clientX

        if(window.body.clientWidth <= 1000 && window.body.clientWidth > 800) {
            if (-itemWidth*2 < position){
                if(move < start - 50) {
                    position -= itemWidth
                    track.style = `
                        transform: translateX(${position}px);
                    `
                }
            }
            if(!position <= 0) {
                if(move > start + 50) {
                    position += itemWidth
                    track.style = `
                        transform: translateX(${position}px);
                    `
                }
            }
        }
        if(window.body.clientWidth <= 800) {
            if (-itemWidth*3 < position){
                if(move < start - 50) {
                    position -= itemWidth
                    track.style = `
                        transform: translateX(${position}px);
                    `
                }
            }
            if(!position <= 0) {
                if(move > start + 50) {
                    position += itemWidth
                    track.style = `
                        transform: translateX(${position}px);
                    `
                }
            }
        }
    })
}
/* harmony default export */ __webpack_exports__["default"] = (slider);



/***/ }),

/***/ "./src/js/moduls/top.js":
/*!******************************!*\
  !*** ./src/js/moduls/top.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _infoPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infoPanel */ "./src/js/moduls/infoPanel.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");



const top = () => {
    const TOPWrapper = document.querySelector('.top'),
        nameTOP = TOPWrapper.querySelectorAll('.raitings__img a'),
        imgTOP = TOPWrapper.querySelectorAll('img'),
        seeMoreBtn = document.querySelector('.ratings .raitings__wrapper .top .header a'),
        voteTop = document.querySelectorAll('.vote');

    function top() {
         (0,_services_getData__WEBPACK_IMPORTED_MODULE_2__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.POPULAR_MOVIE + `${Math.floor(Math.random()*9) + 1}`)
        .then(data => {
            setNewTOP(data.results);
        })
    }
    top();
    // setInterval(top, 50000)

    seeMoreBtn.addEventListener('click', () => top()) /* Обновление по кнопке */

    function setNewTOP(movie) {
        for (let i = 0; i < 6; i++) {
            const {
               title,
               poster_path,
               id,
               vote_average
            } = movie[Math.floor(Math.random()*movie.length)]
            nameTOP[i].textContent = title.length > 20 ? (title.slice(0, 20) + `...`) : title ;
            nameTOP[i].id = id;
            imgTOP[i].src = `${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path}`
            imgTOP[i].id = id;
            voteTop[i].textContent = vote_average;
        }
        new _infoPanel__WEBPACK_IMPORTED_MODULE_1__["default"]('.top .ratings__items .ratings__item .raitings__img .title', '.top .ratings__items .ratings__item .raitings__img img').open();
    }
}

/* harmony default export */ __webpack_exports__["default"] = (top);

/***/ }),

/***/ "./src/js/moduls/trailerPanel.js":
/*!***************************************!*\
  !*** ./src/js/moduls/trailerPanel.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TrailerPanel; }
/* harmony export */ });
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel */ "./src/js/moduls/panel.js");
/* harmony import */ var _services_videoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/videoPlayer */ "./src/js/moduls/services/videoPlayer.js");



class TrailerPanel {
    constructor(triggers) {
        this.panelInner = document.querySelector('.overlay__info');
        this.triggers = document.querySelectorAll(triggers);
        this.numPanel = document.querySelector('.num__page');
    }
    open() {
        this.triggers.forEach(btn => {
            btn.addEventListener('click', () => {
                new _panel__WEBPACK_IMPORTED_MODULE_0__["default"]().openPanel();
                this.trailerPanel = document.createElement('div');
                this.trailerPanel.classList.add('trailer__panel');
                this.trailerPanel.innerHTML = `
                <div class='trailer__panel__player' id='trailer__panel__player'>
                </div>
                `
                this.panelInner.appendChild(this.trailerPanel);
                new _services_videoPlayer__WEBPACK_IMPORTED_MODULE_1__["default"](btn.id, 'trailer__panel__player').createPlayer();
                this.numPanel.style.display = 'none';
            })
        })
    }
}

/***/ }),

/***/ "./src/js/moduls/wallpapers.js":
/*!*************************************!*\
  !*** ./src/js/moduls/wallpapers.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel */ "./src/js/moduls/panel.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");




document.querySelectorAll('.wallpapers_items img').forEach(item => {
    item.addEventListener('click', () => {
        setWalpapers()
        document.querySelector('.num__page').style.display = 'none';
        document.querySelector('.wallpapers__list').style.display = 'block'
    })
})

const wallpapers = () => {
    const WPWrapper = document.querySelector('.wallpapers_items'),
        nameWP = WPWrapper.querySelectorAll('span'),
        imgWP = WPWrapper.querySelectorAll('img');

    function wallpapers() {
         (0,_services_getData__WEBPACK_IMPORTED_MODULE_2__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.POPULAR_MOVIE)
        .then(data => {
            setNewWP(data.results);
            console.log(data.results)
        })
    }
    wallpapers();
    // setInterval(wallpapers, 52000)

    function setNewWP(movie) {

        for (let i = 0; i < movie.length - 2; i++) {
            const {
               title,
               backdrop_path,
               id
            } = movie[Math.floor(Math.random()*movie.length)]

            nameWP[i].textContent = title.length > 20 ? (title.slice(0, 20) + `...`) : title;
            nameWP[i].id = id;
            imgWP[i].src = `${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + backdrop_path}`;
            imgWP[i].id = id;
        }
        
    }
}
function setWalpapers() {
    const wallpapersListBox = document.querySelector('.wallpapers__list');

    (0,_services_getData__WEBPACK_IMPORTED_MODULE_2__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.POPULAR_MOVIE)
    .then(data => {
        wallpapersListBox.innerHTML =``;
        console.log(data.results)
        data.results.forEach((item, i) => {
            const {
                backdrop_path,
                title
            } = data.results[i]
            
            const wallpapersItem = document.createElement('div');
            wallpapersItem.classList.add('wallpaper__inner');
            wallpapersItem.innerHTML = `
             <img src='${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + backdrop_path}'>
             <h1>${title.length > 28 ? title.slice(0, 28) + `...` : title}</h1>
            `;
            wallpapersListBox.appendChild(wallpapersItem);
        })
        new _panel__WEBPACK_IMPORTED_MODULE_1__["default"]().openPanel()
    })

}

/* harmony default export */ __webpack_exports__["default"] = (wallpapers);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_KEY": function() { return /* binding */ API_KEY; },
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; },
/* harmony export */   "POPULAR_MOVIE": function() { return /* binding */ POPULAR_MOVIE; },
/* harmony export */   "IMG_URL": function() { return /* binding */ IMG_URL; },
/* harmony export */   "PSN__URL": function() { return /* binding */ PSN__URL; },
/* harmony export */   "NON__PSN": function() { return /* binding */ NON__PSN; },
/* harmony export */   "POP_PSN__URL": function() { return /* binding */ POP_PSN__URL; },
/* harmony export */   "NON__IMG": function() { return /* binding */ NON__IMG; },
/* harmony export */   "SEARCH__URL": function() { return /* binding */ SEARCH__URL; },
/* harmony export */   "SEARCH__GEN": function() { return /* binding */ SEARCH__GEN; },
/* harmony export */   "ALL__MOVIE": function() { return /* binding */ ALL__MOVIE; },
/* harmony export */   "genres": function() { return /* binding */ genres; },
/* harmony export */   "rndNum20": function() { return /* binding */ rndNum20; }
/* harmony export */ });
/* harmony import */ var _moduls_getPopMovies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/getPopMovies */ "./src/js/moduls/getPopMovies.js");
/* harmony import */ var _moduls_infoPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/infoPanel */ "./src/js/moduls/infoPanel.js");
/* harmony import */ var _moduls_numPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduls/numPanel */ "./src/js/moduls/numPanel.js");
/* harmony import */ var _moduls_randomMovie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduls/randomMovie */ "./src/js/moduls/randomMovie.js");
/* harmony import */ var _moduls_services_scrollTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moduls/services/scrollTo */ "./src/js/moduls/services/scrollTo.js");
/* harmony import */ var _moduls_services_videoPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moduls/services/videoPlayer */ "./src/js/moduls/services/videoPlayer.js");
/* harmony import */ var _moduls_person__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moduls/person */ "./src/js/moduls/person.js");
/* harmony import */ var _moduls_trailerPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./moduls/trailerPanel */ "./src/js/moduls/trailerPanel.js");
/* harmony import */ var _moduls_personCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moduls/personCard */ "./src/js/moduls/personCard.js");
/* harmony import */ var _moduls_bd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./moduls/bd */ "./src/js/moduls/bd.js");
/* harmony import */ var _moduls_wallpapers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./moduls/wallpapers */ "./src/js/moduls/wallpapers.js");
/* harmony import */ var _moduls_mp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./moduls/mp */ "./src/js/moduls/mp.js");
/* harmony import */ var _moduls_top__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./moduls/top */ "./src/js/moduls/top.js");
/* harmony import */ var _moduls_boxOffice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./moduls/boxOffice */ "./src/js/moduls/boxOffice.js");
/* harmony import */ var _moduls_middle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./moduls/middle */ "./src/js/moduls/middle.js");
/* harmony import */ var _moduls_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./moduls/slider */ "./src/js/moduls/slider.js");

















const API_KEY = 'api_key=84dadd31473be27d40ab4886ee4c7978',
    BASE_URL = 'https://api.themoviedb.org/3',
    IMG_URL = `https://image.tmdb.org/t/p/original`, 
    PSN__URL = `${BASE_URL}/trending/person/day?${API_KEY}&language=en-US&page=`,
    POP_PSN__URL = `${BASE_URL}/person/popular?${API_KEY}&language=en-US&page=`,
    NON__PSN = `https://w7.pngwing.com/pngs/462/558/png-transparent-user-profile-computer-icons-account-others-miscellaneous-user-interface-design-head.png`,
    POPULAR_MOVIE = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}&language=en-US&page=`,
    ALL__MOVIE = `https://api.themoviedb.org/3/movie/top_rated?${API_KEY}&language=en-US&page=`,
    NON__IMG = `https://thumbs.dreamstime.com/b/unknown-person-hidden-covered-masked-face-mysterious-strange-man-anonymous-character-vector-illustration-simple-163315936.jpg`,
    SEARCH__URL = `${BASE_URL}/search/movie?${API_KEY}&query=`,
    SEARCH__GEN = `${BASE_URL}/discover/movie?api_key=84dadd31473be27d40ab4886ee4c7978&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`



const genres = [{"id":28,"name":"Action"},
                {"id":12,"name":"Adventure"},
                {"id":16,"name":"Animation"},
                {"id":35,"name":"Comedy"},
                {"id":80,"name":"Crime"},
                {"id":99,"name":"Documentary"},
                {"id":18,"name":"Drama"},
                {"id":10751,"name":"Family"},
                {"id":14,"name":"Fantasy"},
                {"id":36,"name":"History"},
                {"id":27,"name":"Horror"},
                {"id":10402,"name":"Music"},
                {"id":9648,"name":"Mystery"},
                {"id":10749,"name":"Romance"},
                {"id":878,"name":"Science Fiction"},
                {"id":10770,"name":"TV Movie"},
                {"id":53,"name":"Thriller"},
                {"id":10752,"name":"War"},
                {"id":37,"name":"Western"}];
const rndNum20 = Math.floor(Math.random()*(20-1) + 1)


window.addEventListener('DOMContentLoaded', () => {
    (0,_moduls_services_videoPlayer__WEBPACK_IMPORTED_MODULE_5__.videoPlayer)();
    (0,_moduls_randomMovie__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_moduls_person__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_moduls_bd__WEBPACK_IMPORTED_MODULE_9__["default"])();
    (0,_moduls_personCard__WEBPACK_IMPORTED_MODULE_8__["default"])('.to_list');
    (0,_moduls_wallpapers__WEBPACK_IMPORTED_MODULE_10__["default"])();
    (0,_moduls_mp__WEBPACK_IMPORTED_MODULE_11__["default"])();
    (0,_moduls_top__WEBPACK_IMPORTED_MODULE_12__["default"])();
    (0,_moduls_boxOffice__WEBPACK_IMPORTED_MODULE_13__["default"])();
    (0,_moduls_middle__WEBPACK_IMPORTED_MODULE_14__["default"])(POPULAR_MOVIE);
    (0,_moduls_slider__WEBPACK_IMPORTED_MODULE_15__["default"])();
    new _moduls_getPopMovies__WEBPACK_IMPORTED_MODULE_0__["default"](POPULAR_MOVIE + rndNum20).init();
    new _moduls_services_scrollTo__WEBPACK_IMPORTED_MODULE_4__["default"]().init();
    new _moduls_infoPanel__WEBPACK_IMPORTED_MODULE_1__["default"]('.information__item').open();
    new _moduls_trailerPanel__WEBPACK_IMPORTED_MODULE_7__["default"]('.watch__trailer').open();
    new _moduls_numPanel__WEBPACK_IMPORTED_MODULE_2__["default"]().init();
    
    
    // getData(POPULAR_MOVIE + 1)
    //     .then(data => {
    //         getInfo(data.results[0].id)
    //             .then(inf => console.log(inf))
    //     })
    
    // getData(POPULAR_MOVIE + `${Math.floor(Math.random()*20) + 1}`)
    // .then(data => {
    //     // setMovie(data.results)
    //     getInfo(data.results[Math.floor(Math.random()*data.results.length - 1) + 1].id)
    //         .then(inf => {
    //             console.log(inf.revenue)
    //             // setBudget(inf.budget)
    //         })
    // })


    // document.addEventListener('click', (e) => {
    //     console.log(e.target)
    // })
})





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map