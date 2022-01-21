import {genres, IMG_URL, POPULAR_MOVIE } from "../script";
import { getVideo } from "./services/getData";
import { createPalyer } from "./services/videoPlayer";

const randomMovieWrapepr = document.querySelector('.tariler_container.random'),  
        movieName = randomMovieWrapepr.querySelector('.title'),
        movieYear = randomMovieWrapepr.querySelector('.year'),
        movieLanguage = randomMovieWrapepr.querySelector('.language'),
        movieAverage = randomMovieWrapepr.querySelector('.average'),
        movieGenre = randomMovieWrapepr.querySelector('.genre__box'),
        moviePopularity = randomMovieWrapepr.querySelector('.popularity'),
        movieViem = randomMovieWrapepr.querySelector('.count'),
        description =randomMovieWrapepr.querySelector('.movie__description'),
        trailerWindow = randomMovieWrapepr.querySelector('.trailer__window'),
        bgrInf = randomMovieWrapepr.querySelector('.movie__inform img'),
        rndBtn = document.querySelector('.random__btn');

const randomMovie = () => {
    
    const getRandomMovies = () => {

        getMovies(POPULAR_MOVIE + `${Math.floor(Math.random()*9) + 1}`)
        function getMovies(url) {
            fetch(url)
                .then(res => res.json())
                    .then(data => {
                        let id = Math.floor(Math.random() * 20);
                       setRandomMovie(data.results[id])
                       openRNDWithPlayer(data.results[id].id)
                    })
        }
    }
    setTimeout(getRandomMovies, 800)
    // setInterval(getRandomMovies, 15000)

    rndBtn.addEventListener('click', () => getRandomMovies());

    function setRandomMovie(info) {
        const {
            title,
            original_language,
            vote_average,
            genre_ids,
            release_date,
            popularity,
            vote_count, 
            overview,
            backdrop_path,
            poster_path
        } = info;

        let genreName = '';

        genres.forEach((genre, i) => {
            if(genre_ids[0] === genre.id) {
                genreName = genre.name
            }
        })

        let name = title;
        if (title.length > 20) {
            name = `${title.slice(0, 30)}...` 
        }

        movieName.textContent = name;
            movieYear.textContent = release_date.replace(/-/g, '.');
            movieLanguage.textContent = original_language;
            movieGenre.textContent = genreName;
            movieAverage.textContent = vote_average;
            moviePopularity.textContent = popularity;
            movieViem.textContent = vote_count;
            description.textContent = overview;
            trailerWindow.style = `background-image: url(${IMG_URL + backdrop_path});
                                    background-size: cover;
                                    background-position: center;`
            bgrInf.src = `${IMG_URL + poster_path}`
        
    }
    function openRNDWithPlayer(id) {
        getVideo(id)
        .then(videoData => {
                if(window.body.clientWidth <= 1000) {
                    let {key} = videoData.results[Math.floor(Math.random() *  videoData.results.length)];
                    if(document.querySelector('iframe#random__mob')) {
                        document.querySelector('#random__mob').style.display = 'inline-block';
                        document.querySelector('iframe#random__mob').src = `https://www.youtube.com/embed/${key}`;
                    } else {
                    createPalyer(key, 'random__mob')
                    }
                } else {
                    let {key} = videoData.results[Math.floor(Math.random() *  videoData.results.length)];
                    if(document.querySelector('iframe#random')) {
                        document.querySelector('#random').style.display = 'inline-block';
                        document.querySelector('iframe#random').src = `https://www.youtube.com/embed/${key}`;
                    } else {
                    createPalyer(key, 'random')
                }
            }
          })
      }
}
export default randomMovie;