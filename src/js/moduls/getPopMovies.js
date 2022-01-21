import { genres, IMG_URL } from "../script";
import { getData } from "./services/getData";

export default class PopMovies {
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
        getData(url)
            .then(data => data.results)
                .then(movies => {
                    movies.forEach(i => {
                        for (let i = 0; i <= this.movieNow.length; i++) {
                            
                            const{title, poster_path, genre_ids, id} = movies[Math.floor(Math.random()*movies.length)];
                            
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
            
                            this.movieNow[i].style = `background-image: url('${IMG_URL + poster_path}');`
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

