import { pageBtnStart, remBtn, rmvActClass } from "./numPanel";

export default class Panel {
    constructor() {
        this.panel = document.querySelector('.overlay');
        this.panelInner = document.querySelector('.overlay__info');
        this.closebtn = document.querySelector('.closebtn');
        this.numPanel = document.querySelector('.num__page');
        this.cardPerson = document.querySelector('.card__person');
        this.movieList = document.querySelector('.card__wrapper');
        this.gallery = document.querySelector('.gallery__box__wrapper');
        this.wallpapersList = document.querySelector('.wallpapers__list');
    }
    openPanel() {
        this.panel.classList.add('open__panel');
    }
    closePanel() {
        this.closebtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.setStartSetup()
        })
        this.panel.addEventListener('click', (e) => {
            if(e.target === this.panel) {
                this.setStartSetup()
            }
        })
    }
    setStartSetup() {
        this.panel.classList.remove('open__panel');
        this.panelInner.innerHTML = ``;
        remBtn();
        rmvActClass();
        this.gallery.style.display = 'none';
        this.numPanel.style.display = 'block'
        this.cardPerson.style.display = 'none';
        this.movieList.style.display = 'none';
        this.wallpapersList.style.display = 'none';
    }
}