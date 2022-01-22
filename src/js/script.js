import PopMovies from "./moduls/getPopMovies";
import InfoPanel from "./moduls/infoPanel";
import Panel from "./moduls/panel";
import ScrollTo from "./moduls/services/scrollTo";
import { videoPlayer } from "./moduls/services/videoPlayer";
import TrailerPanel from "./moduls/trailerPanel";

const API_KEY = 'api_key=84dadd31473be27d40ab4886ee4c7978',
    BASE_URL = 'https://api.themoviedb.org/3',
    IMG_URL = `https://image.tmdb.org/t/p/original`, 
    PSN__URL = `${BASE_URL}/trending/person/day?${API_KEY}&language=en-US&page=`,
    POP_PSN__URL = `${BASE_URL}/person/popular?${API_KEY}&language=en-US&page=`,
    NON__PSN = `https://w7.pngwing.com/pngs/462/558/png-transparent-user-profile-computer-icons-account-others-miscellaneous-user-interface-design-head.png`,
    POPULAR_MOVIE = `${BASE_URL}/discover/movie?sort_by=popularity.desc&${API_KEY}&language=en-US&page=`,
    ALL__MOVIE = `https://api.themoviedb.org/3/movie/top_rated?${API_KEY}&language=en-US&page=`,
    NON__IMG = `https://thumbs.dreamstime.com/b/unknown-person-hidden-covered-masked-face-mysterious-strange-man-anonymous-character-vector-illustration-simple-163315936.jpg`,
    SEARCH__URL = `${BASE_URL}/search/movie?${API_KEY}&query=`,
    SEARCH__GEN = `${BASE_URL}/discover/movie?api_key=84dadd31473be27d40ab4886ee4c7978&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`

export { API_KEY, BASE_URL, POPULAR_MOVIE, IMG_URL, PSN__URL, NON__PSN, POP_PSN__URL, NON__IMG, SEARCH__URL, SEARCH__GEN, ALL__MOVIE};

const genres = [{"id":28,"name":"Action"},
                {"id":12,"name":"Adventure"},
                {"id":16,"name":"Animation"},
                {"id":35,"name":"Comedy"},
                {"id":80,"name":"Crime"},
                {"id":99,"name":"Documentary"},
                {"id":18,"name":"Drama"},
                {"id":10751,"name":"Family"},
                {"id":14,"name":"Fantasy"},
                {"id":36,"name":"History"},
                {"id":27,"name":"Horror"},
                {"id":10402,"name":"Music"},
                {"id":9648,"name":"Mystery"},
                {"id":10749,"name":"Romance"},
                {"id":878,"name":"Science Fiction"},
                {"id":10770,"name":"TV Movie"},
                {"id":53,"name":"Thriller"},
                {"id":10752,"name":"War"},
                {"id":37,"name":"Western"}];
const rndNum20 = Math.floor(Math.random()*(20-1) + 1)
export {genres, rndNum20};

window.addEventListener('DOMContentLoaded', () => {
    videoPlayer();
    new PopMovies(POPULAR_MOVIE + rndNum20).init();
    new ScrollTo().init();
    new InfoPanel('.information__item').open();
    new TrailerPanel('.watch__trailer').open();
    // getData(POPULAR_MOVIE + 1)
    //     .then(data => {
    //         getInfo(data.results[0].id)
    //             .then(inf => console.log(inf))
    //     })
    
    // getData(POPULAR_MOVIE + `${Math.floor(Math.random()*20) + 1}`)
    // .then(data => {
    //     // setMovie(data.results)
    //     getInfo(data.results[Math.floor(Math.random()*data.results.length - 1) + 1].id)
    //         .then(inf => {
    //             console.log(inf.revenue)
    //             // setBudget(inf.budget)
    //         })
    // })


    // document.addEventListener('click', (e) => {
    //     console.log(e.target)
    // })
})



