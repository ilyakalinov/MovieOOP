import { SEARCH__GEN, SEARCH__URL } from "../../script";
import { informationWrapper } from "../information";
import { navPanelPage, pageBtnStart, setMovies } from "../watch";
import { getData } from "./getData";

const searchInput = document.querySelector('#search'),
    formSearch = document.querySelector('#search__form'),
    genBtn = document.querySelectorAll('.geners__btn');

/* Поиск фильма по шанру или словам */
function search () {
    genBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            rmvActClass()
            btn.classList.add('btn__genre__active')
            getData(SEARCH__GEN + btn.id)
            .then(data => setMovies(data))
            
            if(informationWrapper.style.display == 'block') {
                setTimeout(() => document.querySelector('.overlay').scrollTop = 1200, 400)
            } else {
                setTimeout(() => document.querySelector('.overlay').scrollTop = 230, 400)
            }
            navPanelPage.classList.remove('search')
            navPanelPage.classList.add('genre')
            navPanelPage.id = btn.id
            pageBtnStart()
        })
    })

    formSearch.addEventListener('submit', (e) => {
        getData(SEARCH__URL + searchInput.value)
            .then(data => setMovies(data))
            if(informationWrapper.style.display == 'block') {
                setTimeout(() => document.querySelector('.overlay').scrollTop = 1200, 400)
            } else {
                setTimeout(() => document.querySelector('.overlay').scrollTop = 230, 400)
            }
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
export {rmvActClass}

export default search;