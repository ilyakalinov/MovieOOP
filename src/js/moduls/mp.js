import {IMG_URL, POPULAR_MOVIE} from "../script";
import InfoPanel from "./infoPanel";
import { getData } from "./services/getData"

const mp = () => {
    const MPWrapper = document.querySelector('.netflix__wrapper'),
        nameMP = MPWrapper.querySelectorAll('.photo_item a'),
        imgMP = MPWrapper.querySelectorAll('img'),
        seeMoreBtn = document.querySelector('.news__container .midle__news .netflix__wrapper .header a');

    function mp() {
         getData(POPULAR_MOVIE + `${Math.floor(Math.random()*9) + 1}`)
        .then(data => {
            setNewMP(data.results);
        })
        new InfoPanel('.netflix__wrapper .photo_item a', '.netflix__wrapper img').open();
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
            imgMP[i].src = `${IMG_URL + poster_path}`
            imgMP[i].id = id;
        }
        
    }
}

export default mp;