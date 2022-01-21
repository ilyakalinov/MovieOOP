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
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _services_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/nav */ "./src/js/moduls/services/nav.js");




const budget = () => {
    const BudgetWrapper = document.querySelector('.weekend'),
        nameBudget = BudgetWrapper.querySelectorAll('.weekend__img .title'),
        imgBudget = BudgetWrapper.querySelectorAll('img'),
        seeMoreBtn = BudgetWrapper.querySelector('.weekend__wrapper .header a'),
        revenue = BudgetWrapper.querySelectorAll('span');
    function budget() {
        
        (0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.POPULAR_MOVIE + `${Math.floor(Math.random()*20) + 1}`)
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
            ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getInfo)(movieId)
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

            ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getInfo)(movieId)
                .then(inf => {
                    var rev = inf.revenue.toString();
                    revenue[n].textContent = `$${rev.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')}`;
                    if (inf.revenue == 0) {
                        moreTimesSetMovie(n)
                    }
                })
        }

        (0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNavWithInf)('.weekend__img .title')
        ;(0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNavWithInf)('.weekend__img img')
    }

}

/* harmony default export */ __webpack_exports__["default"] = (budget);

/***/ }),

/***/ "./src/js/moduls/gallery.js":
/*!**********************************!*\
  !*** ./src/js/moduls/gallery.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _watch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watch */ "./src/js/moduls/watch.js");




const columns = document.querySelectorAll('.gallery__column'),
    btnPhoto = document.querySelector('.btn__click'),
    btnPhotoClose = document.querySelector('.btn__click__close'),
    cardBlock = document.querySelector('.card__wrapper'),
    photoBox = document.querySelector('.photo__box'),
    cardName = document.querySelector('b');
    
    /* Открыть галерею */
    btnPhoto.addEventListener('click', (e) => {
        const target = e.target;
        if(target == btnPhoto) {
            getPhoto(target.id);
        }
        if (target.parentElement == btnPhoto) {
            getPhoto(target.parentElement.id);
        }
        setTimeout(() => document.querySelector('.overlay').scrollTop = 820, 400)
        photoBox.style.display = 'block'
        cardBlock.style.display = 'none';
        _watch__WEBPACK_IMPORTED_MODULE_2__.navPanelPage.style.display = 'none';
    })

    /* Закрыть галерею */
    btnPhotoClose.addEventListener('click', () => {
        if (cardBlock.classList.contains('all__movie')) {
            _watch__WEBPACK_IMPORTED_MODULE_2__.navPanelPage.style.display = 'block';
        }
        if(cardName.textContent == 'John Doe' || cardName.textContent == '') {
            cardBlock.style.display = 'none';
            photoBox.style.display = 'none';
            _watch__WEBPACK_IMPORTED_MODULE_2__.navPanelPage.style.display = 'block';
            console.log('John Doe')
        } else {
            cardBlock.style.display = 'block';
            photoBox.style.display = 'none';
        }
        if (cardBlock.classList.contains('watch__list')) {
            cardBlock.style.display = 'block';
        }
        columns.forEach(column => {
            column.innerHTML = '';
        })

    })

/* Получить фото для галереи */
function getPhoto(id) {
    ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(`https://api.themoviedb.org/3/movie/${id}/images?api_key=84dadd31473be27d40ab4886ee4c7978`)
        .then(data => {
            setPhoto(data.backdrops)
        })
}
/* Загружаем карточки фото */
function setPhoto(data) {
        for(let p = 0; p < Math.floor(data.length/4); p++) {
            const photoOne = document.createElement('img');
            photoOne.src = _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + data[p].file_path;
            columns[0].appendChild(photoOne)
        }
        for(let p = Math.floor(data.length/4); p < Math.floor((data.length/4)*2); p++) {
            const photoTwo = document.createElement('img');
            photoTwo.src = _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + data[p].file_path;
            columns[1].appendChild(photoTwo)
        }
        for(let p = Math.floor(data.length/2); p < Math.floor((data.length/4)*3); p++) {
            const photoThree = document.createElement('img');
            photoThree.src = _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + data[p].file_path;
            columns[2].appendChild(photoThree)
        }
        for(let p = Math.floor((data.length/4)*3); p < data.length; p++) {
            const photoFour = document.createElement('img');
            photoFour.src = _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + data[p].file_path;
            columns[3].appendChild(photoFour)
        }
        showPhotoFromList()
}

/* Управление галереей  */
    const  btnOne = document.querySelector('.btnOne'),
            btnTwo = document.querySelector('.btnTwo'),
            btnFour = document.querySelector('.btnFour'),
            elements = document.getElementsByClassName("column");
            

    btnOne.addEventListener('click', () => {
        one()
    })

    btnTwo.addEventListener('click', () => {
        two()
    })

    btnFour.addEventListener('click', () => {
        four()
    })

    let i;
    /* 1 колонка */
    function one() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.flex = "100%";
        }
    }
    /* 2 колонка */
    function two() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.flex = "50%";
        }
    }
    /* 4 колонка */
    function four() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.flex = "25%";
        }
    }

    /* Показать фото из списка по клику */
    function showPhotoFromList() {
        const imgItem = document.querySelectorAll('.gallery__column img');
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
    }



/***/ }),

/***/ "./src/js/moduls/getPopMovies.js":
/*!***************************************!*\
  !*** ./src/js/moduls/getPopMovies.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");



/* Загрузка пупулярных фильмов */
const getPopMovies = (url, time) => {

    const movieNow = document.querySelectorAll('.movie__now__wrapper'),
      infoBox = document.querySelectorAll('.now__menu'),
      infoInner = document.querySelectorAll('.menu__item'),
      movieName = document.querySelectorAll('.movie__now__wrapper .title'),
      genreList = document.querySelectorAll('.movie__now__wrapper .movie__now__genre')

    /* Получение данных о фильмах */
    setMovies(url)
    function setMovies(url) {
        ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(url + `${Math.floor(Math.random()*9) + 1}`) /* Рандомная страница */
        .then(data =>{
            showPopMovie(data.results)
        })
    }
    /* Обновление данных о фильмах */
    // setInterval(() => setMovies(url), time)

    /* Показать/спрятать меню информации */
    function showInfo(i) {
        infoBox[i].classList.add('active__movie')
        document.querySelectorAll('.movie__now_description')[i].classList.add('description__active')
    }
    function hideInfo() {
        infoBox.forEach(item => {
            item.classList.remove('active__movie')
        })
        document.querySelectorAll('.movie__now_description').forEach(item => {
            item.classList.remove('description__active')
        }) 
    }

    /* События вызова функцый (Показать/спрятать меню информации)  */
    movieNow.forEach((item, i) => {
        item.addEventListener('mouseover', (e) => {
            const target = e.target;
            if(target == item || target == item.firstChild || target == infoInner[i] || target.parentElement.parentElement == item) {
                showInfo(i);
                if(target.parentElement != item.parentElement && target.parentElement.parentElement != item.parentElement  ) {
                    hideInfo();
                }
                if(target.parentElement.parentElement == item) {
                    showInfo(i);
                }
                if(!target.parentElement.parentElement == item && !target.parentElement == item) {
                    hideInfo();
                }
            }

        })
    })

    /* Установка/обновление дыннх фильма в меню информации */
    function showPopMovie(data) {

        data.forEach(i => {
            for (let i = 0; i <= movieNow.length; i++) {
        
                
                const{title, poster_path, genre_ids, id} = data[Math.floor(Math.random()*data.length)];
                
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

                movieNow[i].style = `background-image: url('${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path}');`
                movieName[i].textContent = title;
                genreList[i].textContent = nowGenres;
                movieNow[i].parentElement.querySelector('.watch').id = `${id}`
                movieNow[i].parentElement.querySelector('.information__item').id = `${id}`
            }
        })
    }
}
/* harmony default export */ __webpack_exports__["default"] = (getPopMovies);


/***/ }),

/***/ "./src/js/moduls/information.js":
/*!**************************************!*\
  !*** ./src/js/moduls/information.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "informationWrapper": function() { return /* binding */ informationWrapper; },
/* harmony export */   "movieName": function() { return /* binding */ movieName; },
/* harmony export */   "movieYear": function() { return /* binding */ movieYear; },
/* harmony export */   "movieCountry": function() { return /* binding */ movieCountry; },
/* harmony export */   "movieAverage": function() { return /* binding */ movieAverage; },
/* harmony export */   "movieGenre": function() { return /* binding */ movieGenre; },
/* harmony export */   "movieBudget": function() { return /* binding */ movieBudget; },
/* harmony export */   "movieRuntime": function() { return /* binding */ movieRuntime; },
/* harmony export */   "discription": function() { return /* binding */ discription; },
/* harmony export */   "trailerWindow": function() { return /* binding */ trailerWindow; },
/* harmony export */   "setNewMovieData": function() { return /* binding */ setNewMovieData; }
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _services_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/nav */ "./src/js/moduls/services/nav.js");
 



const closeBtn = document.querySelector('.closebtn'),
    informationWrapper = document.querySelector('.information.tariler_container'),
    movieName = informationWrapper.querySelector('.title'),
    movieYear = informationWrapper.querySelector('.year'),
    movieCountry = informationWrapper.querySelector('.country'),
    movieAverage = informationWrapper.querySelector('.average'),
    movieGenre = informationWrapper.querySelector('.genre__box'),
    movieBudget = informationWrapper.querySelector('.budget'),
    movieRuntime = informationWrapper.querySelector('.runtime'),
    discription = informationWrapper.querySelector('.movie__description'),
    trailerWindow = informationWrapper.querySelector('.trailer__window'),
    bgrInf = informationWrapper.querySelector('.movie__inform img'),
    btnPhoto = informationWrapper.querySelector('.btn__click');



/* Установка данных о фильме */
function setNewMovieData(id) {
    ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getInfo)(id)
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
            backdrop_path, 
            overview
        } = info;
          
        movieName.textContent = title > 20 ? `${title.slice(0, 20)}...` : title;
        movieYear.textContent = release_date.replace(/-/g, '.');
        movieCountry.textContent = production_countries[0].name;
        movieAverage.textContent = vote_average;
        movieGenre.textContent = genres[0].name;
        movieBudget.textContent = budget;
        movieRuntime.textContent = runtime;
        discription.textContent = overview;
        trailerWindow.style = `background-image: url(${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + backdrop_path});
                                background-size: cover;
                                background-position: center;`
        bgrInf.src = `${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + poster_path}`;
        btnPhoto.id = id
    })
      }

const informationBox = (url) => {
    function information() {
      (0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNavWithInf)('#information__item');
        closeBtn.addEventListener('click', () => (0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.closeNav)())
    }
    information();
}


/* harmony default export */ __webpack_exports__["default"] = (informationBox);




/***/ }),

/***/ "./src/js/moduls/middle.js":
/*!*********************************!*\
  !*** ./src/js/moduls/middle.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _services_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/nav */ "./src/js/moduls/services/nav.js");




function middleMovie(url) {
    const item = document.querySelector('.random__wrapper'),
        name = document.querySelector('.info__random .title'), 
        genreses = document.querySelector('.genres__random');
    (0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(url + `${Math.floor(Math.random()*9) + 1}`) 
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
            item.id = `${id}`
            name.id = `${id}`
            ;(0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNavWithInf)('.random__wrapper')
            ;(0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNavWithInf)('.random__wrapper .info__random')
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
/* harmony export */   "cardBlock": function() { return /* binding */ cardBlock; },
/* harmony export */   "cardsBlock": function() { return /* binding */ cardsBlock; },
/* harmony export */   "toList": function() { return /* binding */ toList; }
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _services_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/nav */ "./src/js/moduls/services/nav.js");




const cardPerson = document.querySelector('.card__person'),
        cardImg = cardPerson.querySelector('img'),
        cardName = cardPerson.querySelector('b'),
        cardDepartment = cardPerson.querySelector('.known_for_department'),
        cardPop = cardPerson.querySelector('.popularity'),
        cardBlock = document.querySelector('.card__wrapper'),
        cardsBlock = document.querySelector('.movie__cards');
        

/* Установка карточек фильмов */
function toList(id) {
    ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.BASE_URL + `/person/${id}?` + _script__WEBPACK_IMPORTED_MODULE_0__.API_KEY)
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

            (0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNav)();
            cardBlock.style.display = 'block'
        })

    ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(`https://api.themoviedb.org/3/person/${id}/movie_credits?${_script__WEBPACK_IMPORTED_MODULE_0__.API_KEY}&language=en-US`)
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
                        <div class="movie__card_description">
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
                cardsBlock.appendChild(newCard);
                (0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNavWithInf)('.container__play');
            }  
    })
}


/***/ }),

/***/ "./src/js/moduls/mp.js":
/*!*****************************!*\
  !*** ./src/js/moduls/mp.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _services_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/nav */ "./src/js/moduls/services/nav.js");




const mp = () => {
    const MPWrapper = document.querySelector('.netflix__wrapper'),
        nameMP = MPWrapper.querySelectorAll('.photo_item a'),
        imgMP = MPWrapper.querySelectorAll('img'),
        seeMoreBtn = document.querySelector('.news__container .midle__news .netflix__wrapper .header a');

    function mp() {
         (0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.POPULAR_MOVIE + `${Math.floor(Math.random()*9) + 1}`)
        .then(data => {
            setNewMP(data.results);
        })
    }
    mp();
    // setInterval(mp, 50000)

    seeMoreBtn.addEventListener('click', () => mp()) /* Обновление по кнопке */

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
        (0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNavWithInf)('.netflix__wrapper .photo_item a')
        ;(0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNavWithInf)('.netflix__wrapper img')
    }
}

/* harmony default export */ __webpack_exports__["default"] = (mp);

/***/ }),

/***/ "./src/js/moduls/person.js":
/*!*********************************!*\
  !*** ./src/js/moduls/person.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _services_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/nav */ "./src/js/moduls/services/nav.js");




const person = () => {
    const newsWrapper = document.querySelector('.last__news .menu__items'),
        seeMoreBtn = document.querySelector('.last__news a');

    newsWrapper.innerHTML = ''
    
    function person() {
         ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.PSN__URL + `${Math.floor(Math.random()*9) + 1}`)
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

            newPerson.innerHTML = `
                <img id='${id}' class='person__img to_list' src="${profile_path ? _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + profile_path : _script__WEBPACK_IMPORTED_MODULE_0__.NON__PSN} " alt="">
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
            newsWrapper.appendChild(newPerson);
            const prsnImg = document.querySelectorAll('.person__img');
            prsnImg.src = !profile_path ? _script__WEBPACK_IMPORTED_MODULE_0__.NON__IMG : `${_script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + profile_path}`
            ;(0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNavWithInf)('.psn__movie');
        }
        (0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.toListTrigger)();
    }
}

/* harmony default export */ __webpack_exports__["default"] = (person);

/***/ }),

/***/ "./src/js/moduls/randomMovie.js":
/*!**************************************!*\
  !*** ./src/js/moduls/randomMovie.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _services_videoPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/videoPlayer */ "./src/js/moduls/services/videoPlayer.js");




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
        (0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getVideo)(id)
        .then(videoData => {
                if(window.body.clientWidth <= 1000) {
                    let {key} = videoData.results[Math.floor(Math.random() *  videoData.results.length)];
                    if(document.querySelector('iframe#random__mob')) {
                        document.querySelector('#random__mob').style.display = 'inline-block';
                        document.querySelector('iframe#random__mob').src = `https://www.youtube.com/embed/${key}`;
                    } else {
                    (0,_services_videoPlayer__WEBPACK_IMPORTED_MODULE_2__.createPalyer)(key, 'random__mob')
                    }
                } else {
                    let {key} = videoData.results[Math.floor(Math.random() *  videoData.results.length)];
                    if(document.querySelector('iframe#random')) {
                        document.querySelector('#random').style.display = 'inline-block';
                        document.querySelector('iframe#random').src = `https://www.youtube.com/embed/${key}`;
                    } else {
                    (0,_services_videoPlayer__WEBPACK_IMPORTED_MODULE_2__.createPalyer)(key, 'random')
                }
            }
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

/***/ "./src/js/moduls/services/mobMenu.js":
/*!*******************************************!*\
  !*** ./src/js/moduls/services/mobMenu.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const mobMenu = () => {
    const menu = document.querySelector('.topnav'),
        btnMenuMob = document.querySelector('.mobMenu');
    function openMobMenu() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
            menu.style.width = '50px'
        } else {
          x.style.display = "block";
          menu.style.width = '400px'
        }
      }
      btnMenuMob.addEventListener('click', (e) => {
          const t = e.target;
          if(t.parentElement == btnMenuMob || t == btnMenuMob) {
            openMobMenu()
          }
      })
}

/* harmony default export */ __webpack_exports__["default"] = (mobMenu);

/***/ }),

/***/ "./src/js/moduls/services/nav.js":
/*!***************************************!*\
  !*** ./src/js/moduls/services/nav.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openNavWithInf": function() { return /* binding */ openNavWithInf; },
/* harmony export */   "openNavWithPlayer": function() { return /* binding */ openNavWithPlayer; },
/* harmony export */   "openNav": function() { return /* binding */ openNav; },
/* harmony export */   "closeNav": function() { return /* binding */ closeNav; },
/* harmony export */   "toListTrigger": function() { return /* binding */ toListTrigger; }
/* harmony export */ });
/* harmony import */ var _information__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../information */ "./src/js/moduls/information.js");
/* harmony import */ var _movieList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movieList */ "./src/js/moduls/movieList.js");
/* harmony import */ var _watch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../watch */ "./src/js/moduls/watch.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ "./src/js/moduls/services/search.js");
/* harmony import */ var _videoPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videoPlayer */ "./src/js/moduls/services/videoPlayer.js");







const cardBlock = document.querySelector('.card__wrapper'),
    cardsBlock = document.querySelector('.movie__cards'),
    closeBtn = document.querySelector('.closebtn'),
    informationWrapper = document.querySelector('.information.tariler_container'),
    photoBox = document.querySelector('.photo__box'),
    columns = document.querySelectorAll('.gallery__column'),
    actMovie = document.querySelector('.actors__movie'),
    cardPerson = document.querySelector('.card__person'),
    cardName = document.querySelector('b'),
    navPanel = document.querySelector('.num__page'),
    btnPhoto = informationWrapper.querySelector('.btn__click');

/* Открыть Overlay */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").classList.add('open');
    document.querySelector('html').classList.add('no__scroll');
}

/* Закрыть Overlay по клику на Крестик */
closeBtn.addEventListener('click', () => closeNav())

/* Закрыть Overlay по клику на Overlay */
document.querySelector('.overlay').addEventListener('click', (e) => {
    
    if((e.target.parentElement == document.querySelector('.overlay') || e.target == document.querySelector('.overlay')) && e.target != document.querySelector('#myBtn')) {
        closeNav();
    }
})

/* Закрыть Overlay, и все содержимое*/
function closeNav() {

    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").classList.remove('open');

    document.querySelector('html').classList.remove('no__scroll');
    document.querySelector('.wallpapers__list').style.display = 'none';

    /* Очистка блока информации */
    informationWrapper.style.display = 'none';

    /* Очистка и установка начальных параметров листа фильмов */
    cardBlock.style.display = 'none';
    cardsBlock.innerHTML = '';
    cardBlock.classList.remove('watch__list');
    cardBlock.style.paddingTop = '90px';
    cardBlock.classList.remove('all__movie');
    /* Устновка начальных параметров карточки актера */
    cardName.textContent = 'John Doe';
    cardPerson.style.display = 'block';
    actMovie.style.display = 'block';

    /* Очистка и установка начальных параметров листа фото */
    photoBox.style.display = 'none';
    columns.forEach(column => {
      column.innerHTML = '';
    });
    
    /* Очистка и установка начальных параметров панели навигации */
    _watch__WEBPACK_IMPORTED_MODULE_2__.navPanelPage.style.display = 'none';
    _watch__WEBPACK_IMPORTED_MODULE_2__.navPanelPage.classList.remove('search')
    _watch__WEBPACK_IMPORTED_MODULE_2__.navPanelPage.classList.remove('genre')
    ;(0,_search__WEBPACK_IMPORTED_MODULE_4__.rmvActClass)();
    _watch__WEBPACK_IMPORTED_MODULE_2__.navPanelPage.id = ''
    document.querySelector('.search__panel button').style.top = '140px'
    
    /* В зависимости от ранее открытого плеера закрываем его вместе с overlay */
    if(document.querySelector('iframe#player')) {
        document.querySelector('iframe#player').src = `https://www.youtube.com/embed/${''}`
        document.querySelector('#player').style.display = 'none';
    }

    if(document.querySelector('iframe#trailer__window')) {
        document.querySelector('iframe#trailer__window').src = `https://www.youtube.com/embed/${''}`
        document.querySelector('#trailer__window').style.display = 'none';
    }

    if(document.querySelector('iframe#trailer__window_play')) {
      document.querySelector('iframe#trailer__window_play').src = `https://www.youtube.com/embed/${''}`
      document.querySelector('#trailer__window_play').style.display = 'none';
  }
    navPanel.style.marginTop = '100px'
}

/* Загрузка плеера(от openNavWithInf)*/
function openNavWithPlayer(id) {
    btnPhoto.id = id;
    document.querySelector('.overlay').scrollTo(0, 0)
    ;(0,_getData__WEBPACK_IMPORTED_MODULE_3__.getVideo)(id)
    .then(videoData => {
        let {key} = videoData.results[Math.floor(Math.random() *  videoData.results.length)];
          if(window.body.clientWidth >= 1250) {
          if(document.querySelector('iframe#trailer__window')) {
              openNav();
              document.querySelector('#trailer__window').style.display = 'inline-block';
              document.querySelector('iframe#trailer__window').src = `https://www.youtube.com/embed/${key}`
          } else {
            (0,_videoPlayer__WEBPACK_IMPORTED_MODULE_5__.createPalyer)(key, 'trailer__window')
            ;(0,_videoPlayer__WEBPACK_IMPORTED_MODULE_5__.videoPlayer)();
          }
        } 
        if(window.body.clientWidth <= 1250) {
            if(document.querySelector('iframe#trailer__window_play')) {
                openNav();
                document.querySelector('#trailer__window').style.display = 'inline-block';
                document.querySelector('iframe#trailer__window_play').src = `https://www.youtube.com/embed/${key}`
            } else {
              (0,_videoPlayer__WEBPACK_IMPORTED_MODULE_5__.createPalyer)(key, 'trailer__window_play')
              ;(0,_videoPlayer__WEBPACK_IMPORTED_MODULE_5__.videoPlayer)();
            }
        }
      })
  }

  /* Загрузка информации о филме и вызов загрузки плеера(openNavWithPlayer) + строка страниц фильмов*/
  function openNavWithInf(btn) {
    document.querySelectorAll(btn).forEach(btn => {
        btn.addEventListener('click', (e) => {
          const target = e.target;

          let wdth = 130;

          if(window.body.clientWidth <= 1500) {
            wdth = 200
          }
          if(window.body.clientWidth <= 1250) {
            wdth = 800
          }
          if(window.body.clientWidth <= 900) {
            wdth = 950
          }
          
          if(target.parentElement == btn) {
            
            openNav()
            informationWrapper.style.display = 'block';
            cardBlock.style = `padding-top: ${wdth}px; display: block;`
            navPanel.style = `float: left; margin-top: ${wdth+100}px; display: none`
            if(cardName.textContent == 'John Doe' || cardName.textContent == '') {
              navPanel.style = `margin-top: ${wdth+100}px; display: block;`
              // cardBlock.style = `display: none;`
            }
            openNavWithPlayer(target.parentElement.id)
            ;(0,_information__WEBPACK_IMPORTED_MODULE_0__.setNewMovieData)(target.parentElement.id);
          }
          if (target == btn) {
            openNav()
            informationWrapper.style.display = 'block';
            if(cardName.textContent == 'John Doe' || cardName.textContent == '') {
              navPanel.style = `float: left; margin-top: ${wdth}px; display: block; `
              // cardBlock.style = `display: none;`
            }
            document.querySelector('.search__panel button').style.top = '140px'
            openNavWithPlayer(target.id)
            ;(0,_information__WEBPACK_IMPORTED_MODULE_0__.setNewMovieData)(target.id)
            console.log(window.body.clientWidth)
            
          }
        })
      })
    }

    /* Вызов листа с фильмами */
    function toListTrigger() {
      const bntOpenList = document.querySelectorAll('.to_list')
      bntOpenList.forEach(btn => {
          btn.addEventListener('click', (e) => {
              const target = e.target;
              (0,_movieList__WEBPACK_IMPORTED_MODULE_1__.toList)(target.id)
          })
      })
     
  }



/***/ }),

/***/ "./src/js/moduls/services/scrollBtn.js":
/*!*********************************************!*\
  !*** ./src/js/moduls/services/scrollBtn.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scrollBtn": function() { return /* binding */ scrollBtn; }
/* harmony export */ });
/* harmony import */ var _scrollTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollTo */ "./src/js/moduls/services/scrollTo.js");


const scrollBtn = () => {
    const mybutton = document.getElementById("myBtn");

    document.body.onscroll = function() {
        scrollFunction()};

    document.querySelector('.overlay').onscroll = function() {
        scrollFunction()};

    function scrollFunction() {
        if( document.getElementById("myNav").classList.contains('open')) {
            if (document.querySelector('.overlay').scrollTop > 50) {
                mybutton.style.opacity = "1";
                (0,_scrollTo__WEBPACK_IMPORTED_MODULE_0__["default"])()
            } else {
                mybutton.style.opacity = "0";
            }
            mybutton.addEventListener('click', () => {
                document.querySelector('.overlay').scrollTop = 0;
            })
        } 
        if( !document.getElementById("myNav").classList.contains('open')) {
            if (window.scrollY > 50) {
                mybutton.style.opacity = "1";
                (0,_scrollTo__WEBPACK_IMPORTED_MODULE_0__["default"])()
            } else { 
                mybutton.style.opacity = "0";
            }
            mybutton.addEventListener('click', () => {
                document.querySelector('body').scrollTop = 0;
            })
        }
    
       
    }
}



/***/ }),

/***/ "./src/js/moduls/services/scrollTo.js":
/*!********************************************!*\
  !*** ./src/js/moduls/services/scrollTo.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function scrollTo() {
    const anchors = document.querySelectorAll('a');

    for (let anchor of anchors) {
        if(anchor.classList.contains('search__link') || anchor.classList.contains('watch__online')) {
            anchor.addEventListener('click', function(event) { console.log('click')
                event.preventDefault();
            })
        } else {
            anchor.addEventListener('click', function(event) {
                console.log('click')
                event.preventDefault();
                const blockID = anchor.getAttribute('href');
                document.querySelector(`#${blockID}`).scrollIntoView({
                    behavior: "smooth",
                    block: 'start'
                })
            })
            anchor.parentElement.addEventListener('click', function(event) {
                event.preventDefault();
                const parentID = anchor.getAttribute('href');
                document.querySelector(`#${parentID}`).scrollIntoView({
                    behavior: "smooth",
                    block: 'start'
                })
            })
        }
    }
        
}

/* harmony default export */ __webpack_exports__["default"] = (scrollTo);




/***/ }),

/***/ "./src/js/moduls/services/search.js":
/*!******************************************!*\
  !*** ./src/js/moduls/services/search.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rmvActClass": function() { return /* binding */ rmvActClass; }
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../script */ "./src/js/script.js");
/* harmony import */ var _information__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../information */ "./src/js/moduls/information.js");
/* harmony import */ var _watch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../watch */ "./src/js/moduls/watch.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getData */ "./src/js/moduls/services/getData.js");





const searchInput = document.querySelector('#search'),
    formSearch = document.querySelector('#search__form'),
    genBtn = document.querySelectorAll('.geners__btn');

/* Поиск фильма по шанру или словам */
function search () {
    genBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            rmvActClass()
            btn.classList.add('btn__genre__active')
            ;(0,_getData__WEBPACK_IMPORTED_MODULE_3__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.SEARCH__GEN + btn.id)
            .then(data => (0,_watch__WEBPACK_IMPORTED_MODULE_2__.setMovies)(data))
            
            if(_information__WEBPACK_IMPORTED_MODULE_1__.informationWrapper.style.display == 'block') {
                setTimeout(() => document.querySelector('.overlay').scrollTop = 1200, 400)
            } else {
                setTimeout(() => document.querySelector('.overlay').scrollTop = 230, 400)
            }
            _watch__WEBPACK_IMPORTED_MODULE_2__.navPanelPage.classList.remove('search')
            _watch__WEBPACK_IMPORTED_MODULE_2__.navPanelPage.classList.add('genre')
            _watch__WEBPACK_IMPORTED_MODULE_2__.navPanelPage.id = btn.id
            ;(0,_watch__WEBPACK_IMPORTED_MODULE_2__.pageBtnStart)()
        })
    })

    formSearch.addEventListener('submit', (e) => {
        ;(0,_getData__WEBPACK_IMPORTED_MODULE_3__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.SEARCH__URL + searchInput.value)
            .then(data => (0,_watch__WEBPACK_IMPORTED_MODULE_2__.setMovies)(data))
            if(_information__WEBPACK_IMPORTED_MODULE_1__.informationWrapper.style.display == 'block') {
                setTimeout(() => document.querySelector('.overlay').scrollTop = 1200, 400)
            } else {
                setTimeout(() => document.querySelector('.overlay').scrollTop = 230, 400)
            }
            _watch__WEBPACK_IMPORTED_MODULE_2__.navPanelPage.classList.add('search')
            _watch__WEBPACK_IMPORTED_MODULE_2__.navPanelPage.classList.remove('genre')
            _watch__WEBPACK_IMPORTED_MODULE_2__.navPanelPage.id = searchInput.value
            ;(0,_watch__WEBPACK_IMPORTED_MODULE_2__.pageBtnStart)()
            rmvActClass()
            searchInput.value = ''
    })

    
}
function rmvActClass() {
    genBtn.forEach(btn => {
        btn.classList.remove('btn__genre__active')
    })
}


/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./src/js/moduls/services/videoPlayer.js":
/*!***********************************************!*\
  !*** ./src/js/moduls/services/videoPlayer.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "videoPlayer": function() { return /* binding */ videoPlayer; },
/* harmony export */   "createPalyer": function() { return /* binding */ createPalyer; }
/* harmony export */ });
const videoPlayer = () => {

  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function createPalyer(id, name) {

  let player;

  player = new YT.Player(name, {
    height: '360',
    width: '640',
    videoId: `${id}`,
    events: {
      'onReady': onPlayerReady
    }
  });
  function onPlayerReady(event) {
    let video = event.target.h;
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
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _services_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/nav */ "./src/js/moduls/services/nav.js");




const top = () => {
    const TOPWrapper = document.querySelector('.top'),
        nameTOP = TOPWrapper.querySelectorAll('.raitings__img a'),
        imgTOP = TOPWrapper.querySelectorAll('img'),
        seeMoreBtn = document.querySelector('.ratings .raitings__wrapper .top .header a'),
        voteTop = document.querySelectorAll('.vote');

    function top() {
         (0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.POPULAR_MOVIE + `${Math.floor(Math.random()*9) + 1}`)
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
        (0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNavWithInf)('.top .ratings__items .ratings__item .raitings__img .title')
        ;(0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNavWithInf)('.top .ratings__items .ratings__item .raitings__img img')
    }
}

/* harmony default export */ __webpack_exports__["default"] = (top);

/***/ }),

/***/ "./src/js/moduls/trailers.js":
/*!***********************************!*\
  !*** ./src/js/moduls/trailers.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _services_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/nav */ "./src/js/moduls/services/nav.js");
/* harmony import */ var _services_videoPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/videoPlayer */ "./src/js/moduls/services/videoPlayer.js");




const openBtn = document.querySelectorAll('.menu__item.watch');

function trailers() {
  
    openBtn.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target;

        if(target.parentElement == btn) {
          openNavWithTrailer(target.parentElement.id)
        }
        if (target == btn) {
          openNavWithTrailer(target.id)
        }
      })
    })
      
}
function openNavWithTrailer(id) {
  (0,_services_getData__WEBPACK_IMPORTED_MODULE_0__.getVideo)(id)
  .then(videoData => {
    videoData.results.forEach(video => {
      let {key} = video;

      if(document.querySelector('iframe#player')) {
          (0,_services_nav__WEBPACK_IMPORTED_MODULE_1__.openNav)();
          document.querySelector('#player').style.display = 'inline-block';
          document.querySelector('iframe#player').src = `https://www.youtube.com/embed/${key}`
      } else {
        (0,_services_videoPlayer__WEBPACK_IMPORTED_MODULE_2__.createPalyer)(key, 'player')
      }
    })
  })
}

/* harmony default export */ __webpack_exports__["default"] = (trailers);


/***/ }),

/***/ "./src/js/moduls/wallpapers.js":
/*!*************************************!*\
  !*** ./src/js/moduls/wallpapers.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _wallpapersList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallpapersList */ "./src/js/moduls/wallpapersList.js");




document.querySelectorAll('.wallpapers_items img').forEach(item => {
    item.addEventListener('click', () => {
        (0,_wallpapersList__WEBPACK_IMPORTED_MODULE_2__.setWalpapers)()
        document.querySelector('.wallpapers__list').style.display = 'block'
    })
})

const wallpapers = () => {
    const WPWrapper = document.querySelector('.wallpapers_items'),
        nameWP = WPWrapper.querySelectorAll('span'),
        imgWP = WPWrapper.querySelectorAll('img');

    function wallpapers() {
         (0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.POPULAR_MOVIE)
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

/* harmony default export */ __webpack_exports__["default"] = (wallpapers);

/***/ }),

/***/ "./src/js/moduls/wallpapersList.js":
/*!*****************************************!*\
  !*** ./src/js/moduls/wallpapersList.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setWalpapers": function() { return /* binding */ setWalpapers; }
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _services_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/nav */ "./src/js/moduls/services/nav.js");





function setWalpapers() {
    const wallpapersListBox = document.querySelector('.wallpapers__list');

    (0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.POPULAR_MOVIE)
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
        ;(0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNav)();
    })

}




/***/ }),

/***/ "./src/js/moduls/watch.js":
/*!********************************!*\
  !*** ./src/js/moduls/watch.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMovies": function() { return /* binding */ getMovies; },
/* harmony export */   "setMovies": function() { return /* binding */ setMovies; },
/* harmony export */   "navPanelPage": function() { return /* binding */ navPanelPage; },
/* harmony export */   "pageBtnStart": function() { return /* binding */ pageBtnStart; }
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./src/js/script.js");
/* harmony import */ var _services_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/getData */ "./src/js/moduls/services/getData.js");
/* harmony import */ var _services_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/nav */ "./src/js/moduls/services/nav.js");




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
            ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(_script__WEBPACK_IMPORTED_MODULE_0__.ALL__MOVIE + id)
            .then(data => {

                ;(0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNav)();   
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
                    <div class="movie__card_description">
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
            cardsBlock.appendChild(newCard);
            cardBlock.classList.add('watch__list');
            (0,_services_nav__WEBPACK_IMPORTED_MODULE_2__.openNavWithInf)('.container__play');

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
                    (0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(`https://api.themoviedb.org/3/discover/movie?api_key=84dadd31473be27d40ab4886ee4c7978&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${e.target.textContent}&with_genres=` + navPanelPage.id)
                        .then(data => setMovies(data))
                    } else {`https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=hfrd&page=1&include_adult=false`
                    ;(0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(`${_script__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/search/movie?${_script__WEBPACK_IMPORTED_MODULE_0__.API_KEY}&language=en-US&query=${navPanelPage.id}&page=${e.target.textContent}`)
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
/* harmony export */   "genres": function() { return /* binding */ genres; }
/* harmony export */ });
/* harmony import */ var _moduls_getPopMovies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/getPopMovies */ "./src/js/moduls/getPopMovies.js");
/* harmony import */ var _moduls_trailers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/trailers */ "./src/js/moduls/trailers.js");
/* harmony import */ var _moduls_information__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduls/information */ "./src/js/moduls/information.js");
/* harmony import */ var _moduls_randomMovie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduls/randomMovie */ "./src/js/moduls/randomMovie.js");
/* harmony import */ var _moduls_services_videoPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moduls/services/videoPlayer */ "./src/js/moduls/services/videoPlayer.js");
/* harmony import */ var _moduls_person__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moduls/person */ "./src/js/moduls/person.js");
/* harmony import */ var _moduls_bd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./moduls/bd */ "./src/js/moduls/bd.js");
/* harmony import */ var _moduls_mp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./moduls/mp */ "./src/js/moduls/mp.js");
/* harmony import */ var _moduls_wallpapers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moduls/wallpapers */ "./src/js/moduls/wallpapers.js");
/* harmony import */ var _moduls_services_scrollTo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./moduls/services/scrollTo */ "./src/js/moduls/services/scrollTo.js");
/* harmony import */ var _moduls_services_scrollBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./moduls/services/scrollBtn */ "./src/js/moduls/services/scrollBtn.js");
/* harmony import */ var _moduls_gallery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./moduls/gallery */ "./src/js/moduls/gallery.js");
/* harmony import */ var _moduls_services_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./moduls/services/search */ "./src/js/moduls/services/search.js");
/* harmony import */ var _moduls_top__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./moduls/top */ "./src/js/moduls/top.js");
/* harmony import */ var _moduls_boxOffice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./moduls/boxOffice */ "./src/js/moduls/boxOffice.js");
/* harmony import */ var _moduls_services_mobMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./moduls/services/mobMenu */ "./src/js/moduls/services/mobMenu.js");
/* harmony import */ var _moduls_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./moduls/slider */ "./src/js/moduls/slider.js");
/* harmony import */ var _moduls_middle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./moduls/middle */ "./src/js/moduls/middle.js");



















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


window.addEventListener('DOMContentLoaded', () => {
    // mobMenu();
    (0,_moduls_middle__WEBPACK_IMPORTED_MODULE_17__["default"])(POPULAR_MOVIE)
    ;(0,_moduls_slider__WEBPACK_IMPORTED_MODULE_16__["default"])();
    (0,_moduls_getPopMovies__WEBPACK_IMPORTED_MODULE_0__["default"])(POPULAR_MOVIE, 35000);
    (0,_moduls_trailers__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_moduls_information__WEBPACK_IMPORTED_MODULE_2__["default"])(POPULAR_MOVIE);
    (0,_moduls_services_videoPlayer__WEBPACK_IMPORTED_MODULE_4__.videoPlayer)()
    ;(0,_moduls_randomMovie__WEBPACK_IMPORTED_MODULE_3__["default"])(10000);
    (0,_moduls_person__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_moduls_bd__WEBPACK_IMPORTED_MODULE_6__["default"])();
    (0,_moduls_mp__WEBPACK_IMPORTED_MODULE_7__["default"])();
    (0,_moduls_wallpapers__WEBPACK_IMPORTED_MODULE_8__["default"])();
    (0,_moduls_services_scrollTo__WEBPACK_IMPORTED_MODULE_9__["default"])();
    (0,_moduls_services_scrollBtn__WEBPACK_IMPORTED_MODULE_10__.scrollBtn)();
    (0,_moduls_services_search__WEBPACK_IMPORTED_MODULE_12__["default"])();
    (0,_moduls_top__WEBPACK_IMPORTED_MODULE_13__["default"])();
    (0,_moduls_boxOffice__WEBPACK_IMPORTED_MODULE_14__["default"])();
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