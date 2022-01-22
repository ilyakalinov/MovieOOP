export default class Panel {
    constructor() {
        this.panel = document.querySelector('.overlay');
        this.panelInner = document.querySelector('.overlay__inner');
        this.closebtn = document.querySelector('.closebtn');
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
    }
}