/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    }

    showPopMovies(url) {
        (0,_services_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(url)
            .then(data => data.results)
                .then(movies => {
                    movies.forEach(i => {
                        for (let i = 0; i <= this.movieNow.length; i++) {
                            
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
                            this.movieNow[i].parentElement.querySelector('.watch').id = `${id}`
                            this.movieNow[i].parentElement.querySelector('.information__item').id = `${id}`
                        }
                    })
                })
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
        document.querySelector('.overlay').onscroll = () => {
            this.scrollOn(this.upBtn)
        };
    }

    scrollOn(btn) {
        if( document.getElementById("myNav").style.display = 'block') {
            if (document.querySelector('.overlay').scrollTop > 50) {
                btn.style.opacity = "1";
            } else {
                btn.style.opacity = "0";
            }
                btn.addEventListener('click', () => {
                btn.querySelector('.overlay').scrollTop = 0;
            })
        } 
        if(document.getElementById("myNav").style.display = 'none') {
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
/* harmony import */ var _moduls_services_scrollTo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduls/services/scrollTo */ "./src/js/moduls/services/scrollTo.js");



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
    new _moduls_getPopMovies__WEBPACK_IMPORTED_MODULE_0__["default"](POPULAR_MOVIE).init();
    new _moduls_services_scrollTo__WEBPACK_IMPORTED_MODULE_1__["default"]().init();
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