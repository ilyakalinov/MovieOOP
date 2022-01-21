import {IMG_URL, POPULAR_MOVIE} from "../script"
import { getData } from "./services/getData"
import { setWalpapers } from "./wallpapersList"

document.querySelectorAll('.wallpapers_items img').forEach(item => {
    item.addEventListener('click', () => {
        setWalpapers()
        document.querySelector('.wallpapers__list').style.display = 'block'
    })
})

const wallpapers = () => {
    const WPWrapper = document.querySelector('.wallpapers_items'),
        nameWP = WPWrapper.querySelectorAll('span'),
        imgWP = WPWrapper.querySelectorAll('img');

    function wallpapers() {
         getData(POPULAR_MOVIE)
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
            imgWP[i].src = `${IMG_URL + backdrop_path}`;
            imgWP[i].id = id;
        }
        
    }
}

export default wallpapers;