import {IMG_URL, POPULAR_MOVIE} from "../script";
import InfoPanel from "./infoPanel";
import { getData, getInfo } from "./services/getData"

const budget = () => {
    const BudgetWrapper = document.querySelector('.weekend'),
        nameBudget = BudgetWrapper.querySelectorAll('.weekend__img .title'),
        imgBudget = BudgetWrapper.querySelectorAll('img'),
        seeMoreBtn = BudgetWrapper.querySelector('.weekend__wrapper .header a'),
        revenue = BudgetWrapper.querySelectorAll('span');
    function budget() {
        
        getData(POPULAR_MOVIE + `${Math.floor(Math.random()*20) + 1}`)
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
            imgBudget[i].src = `${IMG_URL + poster_path}`
            imgBudget[i].id = id;
            let movieId = id
            getInfo(movieId)
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
            imgBudget[n].src = `${IMG_URL + poster_path}`
            imgBudget[n].id = id;
            let movieId = id

            getInfo(movieId)
                .then(inf => {
                    var rev = inf.revenue.toString();
                    revenue[n].textContent = `$${rev.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')}`;
                    if (inf.revenue == 0) {
                        moreTimesSetMovie(n)
                    }
                })
        }
        new InfoPanel('.weekend__img .title', '.weekend__img img').open();
    }

}

export default budget;