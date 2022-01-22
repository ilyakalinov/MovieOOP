import Panel from "./panel";
import VideoPlayer from "./services/videoPlayer";

export default class TrailerPanel {
    constructor(triggers) {
        this.panelInner = document.querySelector('.overlay__inner');
        this.triggers = document.querySelectorAll(triggers);
    }
    open() {
            this.triggers.forEach(btn => {
                btn.addEventListener('click', () => {
                    new Panel().openPanel();
                    this.trailerPanel = document.createElement('div');
                    this.trailerPanel.classList.add('trailer__panel');
                    this.trailerPanel.innerHTML = `
                    <div class='trailer__panel__player' id='trailer__panel__player'>
                    </div>
                    `
                    this.panelInner.appendChild(this.trailerPanel);
                    new VideoPlayer(btn.id, 'trailer__panel__player').createPlayer();
                })
            })
        }
}