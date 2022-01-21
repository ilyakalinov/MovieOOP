import {genres, IMG_URL} from '../script'
import { getData } from './services/getData';

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
        getData(url + `${Math.floor(Math.random()*9) + 1}`) /* Рандомная страница */
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
                        genres.forEach(genre => {
                                if(genre.id === num) {
                                    nowGenres.push(genre.name)
                                }
                        })
                    }
                    setGenre(genre)
                })  

                movieNow[i].style = `background-image: url('${IMG_URL + poster_path}');`
                movieName[i].textContent = title;
                genreList[i].textContent = nowGenres;
                movieNow[i].parentElement.querySelector('.watch').id = `${id}`
                movieNow[i].parentElement.querySelector('.information__item').id = `${id}`
            }
        })
    }
}
export default getPopMovies;
