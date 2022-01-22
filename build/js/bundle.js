/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        this.galleryBox = document.querySelector('.photo__box')
    }
    open() {
        if(this.galleryBox) {
            this.galleryBox.remove();
        }
        this.gallery = document.querySelector('.gallery');
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
                        photoOne.classList.add('gallery__item');
                        photoOne.src = _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + data[p].file_path;
                        this.columns[0].appendChild(photoOne)
                        this.showPhoto()
                    }
                    for(let p = Math.floor(data.length/4); p < Math.floor((data.length/4)*2); p++) {
                        const photoTwo = document.createElement('img');
                        photoTwo.classList.add('gallery__item');
                        photoTwo.src = _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + data[p].file_path;
                        this.columns[1].appendChild(photoTwo)
                        this.showPhoto()
                    }
                    for(let p = Math.floor(data.length/2); p < Math.floor((data.length/4)*3); p++) {
                        const photoThree = document.createElement('img');
                        photoThree.classList.add('gallery__item');
                        photoThree.src = _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + data[p].file_path;
                        this.columns[2].appendChild(photoThree)
                        this.showPhoto()
                    }
                    for(let p = Math.floor((data.length/4)*3); p < data.length; p++) {
                        const photoFour = document.createElement('img');
                        photoFour.src = _script__WEBPACK_IMPORTED_MODULE_0__.IMG_URL + data[p].file_path;
                        this.columns[3].appendChild(photoFour)
                        this.showPhoto()
                    }
                })
                this.navGallery();
        }

    close() {
        this.galleryBox.remove();
    }

    showPhoto() {
        const imgItem = document.querySelectorAll('.gallery__column img');
        const elements = document.getElementsByClassName("gallery__column");
        console.log(imgItem)
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
    constructor(trigger) {
        this.panel = document.querySelector('.overlay');
        this.panelInner = document.querySelector('.overlay__inner');
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
                                    ${title > 20 ? `${title.slice(0, 20)}...` : title}
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
                    <button class="btn__click"><h4 href="photo__box">Open gallery</h4></button>
                    <button class="btn__click__close"><h4>Close gallery</h4></button>
                </div>
                
            </div>
            `;
            this.panelInner.appendChild(this.infoPanel)
            new _services_videoPlayer__WEBPACK_IMPORTED_MODULE_4__["default"](id, 'trailer__window').createPlayer();
            new _galleryPanel__WEBPACK_IMPORTED_MODULE_1__["default"](id).init();
        })
    }
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
class Panel {
    constructor() {
        this.panel = document.querySelector('.overlay');
        this.panelInner = document.querySelector('.overlay__inner');
        this.closebtn = document.querySelector('.closebtn');
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
    }
}

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
            block: 'start'
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
                btn.querySelector('.overlay').scrollTop = 0;
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
    constructor(selector){
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
        this.panelInner = document.querySelector('.overlay__inner');
        this.triggers = document.querySelectorAll(triggers);
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
                })
            })
        }
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
/* harmony export */   "genres": function() { return /* binding */ genres; },
/* harmony export */   "rndNum20": function() { return /* binding */ rndNum20; }
/* harmony export */ });
/* harmony import */ var _moduls_getPopMovies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduls/getPopMovies */ "./src/js/moduls/getPopMovies.js");
/* harmony import */ var _moduls_infoPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/infoPanel */ "./src/js/moduls/infoPanel.js");
/* harmony import */ var _moduls_panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduls/panel */ "./src/js/moduls/panel.js");
/* harmony import */ var _moduls_services_scrollTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduls/services/scrollTo */ "./src/js/moduls/services/scrollTo.js");
/* harmony import */ var _moduls_services_videoPlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./moduls/services/videoPlayer */ "./src/js/moduls/services/videoPlayer.js");
/* harmony import */ var _moduls_trailerPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moduls/trailerPanel */ "./src/js/moduls/trailerPanel.js");







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
    (0,_moduls_services_videoPlayer__WEBPACK_IMPORTED_MODULE_4__.videoPlayer)();
    new _moduls_getPopMovies__WEBPACK_IMPORTED_MODULE_0__["default"](POPULAR_MOVIE + rndNum20).init();
    new _moduls_services_scrollTo__WEBPACK_IMPORTED_MODULE_3__["default"]().init();
    new _moduls_infoPanel__WEBPACK_IMPORTED_MODULE_1__["default"]('.information__item').open();
    new _moduls_trailerPanel__WEBPACK_IMPORTED_MODULE_5__["default"]('.watch__trailer').open();
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