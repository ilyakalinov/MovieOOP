export default class ScrollTo {
    constructor() {
        this.anchors = document.querySelectorAll('.nav__btn');
        this.aDef = document.querySelectorAll('a');
        this.upBtn = document.getElementById("myBtn");
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
        document.querySelector('.overlay').onscroll = () => {
            this.scrollOn(this.upBtn)
        };
    }

    scrollOn(btn) {
        if( document.getElementById("myNav").style.display = 'block') {
            if (document.querySelector('.overlay').scrollTop > 50) {
                btn.style.opacity = "1";
            } else {
                btn.style.opacity = "0";
            }
                btn.addEventListener('click', () => {
                btn.querySelector('.overlay').scrollTop = 0;
            })
        } 
        if(document.getElementById("myNav").style.display = 'none') {
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