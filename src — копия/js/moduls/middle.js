import { genres, IMG_URL } from "../script";
import { getData } from "./services/getData";
import { openNavWithInf } from "./services/nav";

function middleMovie(url) {
    const item = document.querySelector('.random__wrapper'),
        name = document.querySelector('.info__random .title'), 
        genreses = document.querySelector('.genres__random');
    getData(url + `${Math.floor(Math.random()*9) + 1}`) 
    .then(data =>{
        console.log(data.results[0].title)
        const{poster_path, genre_ids, id} = data.results[0];
            
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

            item.style = `background-image: url('${IMG_URL + poster_path}'); background-size: contain;`
            name.textContent = data.results[0].title;
            genreses.textContent = nowGenres;
            item.id = `${id}`
            name.id = `${id}`
            openNavWithInf('.random__wrapper')
            openNavWithInf('.random__wrapper .info__random')
    })
}

export default middleMovie;