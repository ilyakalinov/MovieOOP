import { pageBtnStart, remBtn, rmvActClass } from "./numPanel";

export default class Panel {
    constructor() {
        this.panel = document.querySelector('.overlay');
        this.panelInner = document.querySelector('.overlay__info');
        this.closebtn = document.querySelector('.closebtn');
        this.numPanel = document.querySelector('.num__page');
        this.gallery = document.querySelector('.gallery__box__wrapper');
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
        // this.numPanel.style.display = 'none';
        remBtn();
        rmvActClass();
        this.gallery.style.display = 'none';
    }
}