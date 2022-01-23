
import { genres, IMG_URL, POPULAR_MOVIE } from "../script";
import { getVideo } from "./services/getData";
import Spinner from "./services/spinner";
import VideoPlayer from "./services/videoPlayer";

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
        document.querySelectorAll('.loadingio-spinner-spin-wffps27ze9i').forEach(spin => {
            spin.remove();
        })
        getVideo(id)
        .then(videoData => {
            let {key} = videoData.results[Math.floor(Math.random() *  videoData.results.length)];
                    if(document.querySelector('iframe#random')) {
                        const play = document.querySelector('iframe#random');
                        play.src = `https://www.youtube.com/embed/${key}`;
                        new Spinner('random').createSpinner();
                        play.style.display = 'none';
                        play.onload = (() => {
                            new Spinner('random').deleteSpinner();
                            play.style.display = 'inline-block';
                        })
                    } else {
                        new VideoPlayer(id, 'random').createPlayer();
                }
            })
            .catch(() => {
                new Spinner('random').createSpinner();
                const play = document.querySelector('iframe#random');
                play.style.display = 'none';
            })
        }
    
}
export default randomMovie;