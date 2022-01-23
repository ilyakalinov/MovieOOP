import { IMG_URL } from "../script";
import GalleryPanel from "./galleryPanel";
import Panel from "./panel";
import { getInfo } from "./services/getData";
import VideoPlayer from "./services/videoPlayer";

export default class InfoPanel {
    constructor(...trigger) {
        this.panel = document.querySelector('.overlay');
        this.panelInner = document.querySelector('.overlay__info');
        this.triggers = document.querySelectorAll(trigger);
        this.closebtn = document.querySelector('.closebtn');
    }
    open() {
        new Panel().closePanel()
        this.triggers.forEach(btn => {
            btn.addEventListener('click', () => {
                console.log()
                this.setInfo(btn.id);
                new Panel().openPanel();
                
            })
        })
    }
    setInfo(id) {
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
                overview
            } = info;
            this.panelInner.innerHTML = '';
            this.infoPanel = document.createElement('div');
            this.infoPanel.classList.add('information', 'tariler_container');
            this.infoPanel.innerHTML = `
            <div class="information__wrapper">
            <div class="trailers">
                <h2 class="trailer__side">
                    IFORMATION
            </div>
                <div class="movie__from">
                    <div class="movie__inform">
                        <img src="${IMG_URL + poster_path}">
                        <div class="movie__inform__box">
                            <div class="movie__inform__geners">
                                <h1 class="title">
                                    ${title.length > 20 ? `${title.slice(0, 20)}...` : title}
                                </h1>
                                <div class="inf__stat">
                                    <span>year</span>
                                    <span class="inf year">${release_date.replace(/-/g, ".")}</span>
                                </div>
                                <div class="inf__stat">
                                    <span>country</span>
                                    <span class="inf country">${production_countries[0].name}</span>
                                </div>
                                <div class="inf__stat">
                                    <span>Voite</span>
                                    <span class="inf average">${vote_average}</span>
                                </div>
                                <div class="inf__stat">
                                    <span>genres</span>
                                    <div class="genre__box genre__box">
                                        ${genres[0].name}
                                        <div class="genre__box__color"><div>.</div></div>
                                    </div>
                                </div>
                                <div class="inf__stat">
                                    <span>budget</span>
                                    <span class="inf budget">${budget}</span>
                                </div>
                                <div class="inf__stat">
                                    <span>duration</span>
                                    <span class="inf runtime">${runtime} min</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="trailer__window inform__play">
                    <div id='trailer__window' >
                    </div>
                </div>
            </div>
            <div class="movie__description__wrapper">
                <div class="trailer__window inform__play_mob" id="trailer__window_play"
                style='background-size: cover;
                        background-position: center;'>
                
                </div>
                <div class="movie__description">
                    ${overview}
                </div>
            </div>
            <div class="gallery">
                <div class="movies__photos">
                    <h1>Movie's photo</h1>
                    <button class="btn__click">
                        <div class="loadingio-spinner-spin-ld66ttjruz"><div class="ldio-ubk447plaon">
                            <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
                        </div></div>
                        <h4 href="photo__box">Open gallery</h4>
                    </button>
                    <button class="btn__click__close"><h4>Close gallery</h4></button>
                </div>
            </div>
            `;
            this.panelInner.appendChild(this.infoPanel)
            new VideoPlayer(id, 'trailer__window').createPlayer();
            new GalleryPanel(id).init();
            this.panelInner.scrollIntoView({
                behavior: "smooth",
                block: 'center'
            }, 50)
        })
    }
}