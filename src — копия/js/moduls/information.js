import {IMG_URL} from '../script' 
import { getInfo } from './services/getData';
import { closeNav, openNavWithInf } from './services/nav';

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

export {informationWrapper,movieName,movieYear,movieCountry,movieAverage,movieGenre,movieBudget,movieRuntime,discription, trailerWindow}

/* Установка данных о фильме */
function setNewMovieData(id) {
    getInfo(id)
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
        trailerWindow.style = `background-image: url(${IMG_URL + backdrop_path});
                                background-size: cover;
                                background-position: center;`
        bgrInf.src = `${IMG_URL + poster_path}`;
        btnPhoto.id = id
    })
      }

const informationBox = (url) => {
    function information() {
      openNavWithInf('#information__item');
        closeBtn.addEventListener('click', () => closeNav())
    }
    information();
}

export {setNewMovieData}
export default informationBox;


