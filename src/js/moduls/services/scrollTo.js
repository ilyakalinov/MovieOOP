export default class ScrollTo {
    constructor() {
        this.anchors = document.querySelectorAll('.nav__btn');
        this.aDef = document.querySelectorAll('a');
        this.upBtn = document.getElementById("myBtn");
        this.panel = document.querySelector('.overlay');
    }

    getAncors () {
        this.aDef.forEach(a => a.addEventListener('click', (e) => e.preventDefault()))
        this.anchors.forEach(anc => {
            anc.addEventListener('click', (e) => {
                e.preventDefault()
                const id = anc.childNodes[1].getAttribute('href')
                this.toBlock(id);
            })
        })
    }

    toBlock(id) {
        document.querySelector(`#${id}`).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    }

    scrollFunction() {
        document.body.onscroll = () => {
            this.scrollOn(this.upBtn)
        };
        this.panel.onscroll = () => {
            this.scrollOn(this.upBtn)
        };
    }

    scrollOn(btn) {
        if(this.panel.classList.contains('open__panel')) {
            if (this.panel.scrollTop > 50) {
                btn.style.opacity = "1";
            } else {
                btn.style.opacity = "0";
            }
                btn.addEventListener('click', () => {
                btn.querySelector('.overlay').scrollTop = 0;
            })
        } else {
            if (window.scrollY > 50) {
                btn.style.opacity = "1";
            } else { 
                btn.style.opacity = "0";
            }
                btn.addEventListener('click', () => {
                document.querySelector('body').scrollTop = 0;
            })
        }    
    }
    
    init() {
        this.getAncors()
        this.scrollFunction();
    }
}