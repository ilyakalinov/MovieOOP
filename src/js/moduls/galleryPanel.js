import { IMG_URL } from "../script";
import { getData } from "./services/getData";
export default class GalleryPanel {
    constructor(id) {
        this.id = id;
        this.btnOpen = document.querySelector('.btn__click');
        this.btnClose = document.querySelector('.btn__click__close');
        this.galleryBox = document.querySelector('.photo__box')
    }
    open() {
        this.btnOpen
        if(this.galleryBox) {
            this.galleryBox.remove();
        }
        this.gallery = document.querySelector('.gallery');
        setTimeout(() => {this.gallery.scrollIntoView({
            behavior: "smooth",
            block: 'start'
        });
        this.btnOpen.querySelector('.loadingio-spinner-spin-ld66ttjruz').style.opacity = '0';
        this.btnOpen.querySelector('h4').style.opacity = '1';
        }, 1000)
        this.btnOpen.querySelector('.loadingio-spinner-spin-ld66ttjruz').style.opacity = '1';
        this.btnOpen.querySelector('h4').style.opacity = '0.4';
        this.galleryBox = document.createElement('div');
        this.galleryBox.classList.add('photo__box');
        this.galleryBox.innerHTML = `
            <div class="photo__box">
                <div class="btn__box">
                    <button class="btnOne btn__gallery">1</button>
                    <button class="btnTwo btn__gallery">2</button>
                    <button class="btnFour btn__gallery">4</button>
                </div>
                <div class="row">
                    <div class="column gallery__column">

                    </div>
                    <div class="column gallery__column">

                    </div>
                    <div class="column gallery__column">
                
                    </div>
                    <div class="column gallery__column">

                    </div>
                </div>
            </div>
        `
        this.gallery.appendChild(this.galleryBox);

        this.columns = document.querySelectorAll('.gallery__column');
        getData(`https://api.themoviedb.org/3/movie/${this.id}/images?api_key=84dadd31473be27d40ab4886ee4c7978`)
            .then(data => data.backdrops)
               .then(data => {
                    for(let p = 0; p < Math.floor(data.length/4); p++) {
                        const photoOne = document.createElement('img');
                        photoOne.id = 'gallery__item';
                        photoOne.src = IMG_URL + data[p].file_path;
                        this.columns[0].appendChild(photoOne);
                        this.showPhoto();
                    }
                    for(let p = Math.floor(data.length/4); p < Math.floor((data.length/4)*2); p++) {
                        const photoTwo = document.createElement('img');
                        photoTwo.id = 'gallery__item';
                        photoTwo.src = IMG_URL + data[p].file_path;
                        this.columns[1].appendChild(photoTwo);
                        this.showPhoto();
                    }
                    for(let p = Math.floor(data.length/2); p < Math.floor((data.length/4)*3); p++) {
                        const photoThree = document.createElement('img');
                        photoThree.id = 'gallery__item';
                        photoThree.src = IMG_URL + data[p].file_path;
                        this.columns[2].appendChild(photoThree);
                        this.showPhoto();
                    }
                    for(let p = Math.floor((data.length/4)*3); p < data.length; p++) {
                        const photoFour = document.createElement('img');
                        photoFour.id = 'gallery__item';
                        photoFour.src = IMG_URL + data[p].file_path;
                        this.columns[3].appendChild(photoFour);
                        this.showPhoto();
                    }
                })
                this.navGallery();
        }

    close() {
        this.galleryBox.remove();
    }

    showPhoto() {
        const imgItem = document.querySelectorAll('.gallery__column img');
        const elements = document.getElementsByClassName("gallery__column");
        imgItem.forEach(img => {
            img.addEventListener('click', (e) => {
                const target = e.target;
                one()
                target.scrollIntoView({
                    behavior: "smooth",
                    block: 'center'
                }, 50)
            })
        })
        let i;
        function one() {
            for (i = 0; i < elements.length; i++) {
                elements[i].style.flex = "100%";
            }
        }
    }
 
    navGallery() {
        this.btnOne = document.querySelector('.btnOne');
        this.btnTwo = document.querySelector('.btnTwo');
        this.btnFour = document.querySelector('.btnFour');
        const elements = document.getElementsByClassName("gallery__column");

        this.btnOne.addEventListener('click', () => {
            one()
        })
    
        this.btnTwo.addEventListener('click', () => {
            two()
        })
    
        this.btnFour.addEventListener('click', () => {
            four()
        })
    
        let i;
        function one() {
            for (i = 0; i < elements.length; i++) {
                elements[i].style.flex = "100%";
            }
        }
        function two() {
            for (i = 0; i < elements.length; i++) {
                elements[i].style.flex = "50%";
            }
        }
        function four() {
            for (i = 0; i < elements.length; i++) {
                elements[i].style.flex = "25%";
            }
        }
    }

    init() {
        this.btnOpen.addEventListener('click', () => {
            this.open();
        })
        this.btnClose.addEventListener('click', () => {
            this.close();
        })
    }
}
