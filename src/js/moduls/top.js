import {IMG_URL, POPULAR_MOVIE} from "../script";
import { getData } from "./services/getData"
import { openNavWithInf } from "./services/nav";

const top = () => {
    const TOPWrapper = document.querySelector('.top'),
        nameTOP = TOPWrapper.querySelectorAll('.raitings__img a'),
        imgTOP = TOPWrapper.querySelectorAll('img'),
        seeMoreBtn = document.querySelector('.ratings .raitings__wrapper .top .header a'),
        voteTop = document.querySelectorAll('.vote');

    function top() {
         getData(POPULAR_MOVIE + `${Math.floor(Math.random()*9) + 1}`)
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
            imgTOP[i].src = `${IMG_URL + poster_path}`
            imgTOP[i].id = id;
            voteTop[i].textContent = vote_average;
        }
        openNavWithInf('.top .ratings__items .ratings__item .raitings__img .title')
        openNavWithInf('.top .ratings__items .ratings__item .raitings__img img')
    }
}

export default top;