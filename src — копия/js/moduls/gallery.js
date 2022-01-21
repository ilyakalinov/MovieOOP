import { API_KEY, BASE_URL, IMG_URL } from "../script";
import { getData } from "./services/getData";
import { navPanelPage } from "./watch";

const columns = document.querySelectorAll('.gallery__column'),
    btnPhoto = document.querySelector('.btn__click'),
    btnPhotoClose = document.querySelector('.btn__click__close'),
    cardBlock = document.querySelector('.card__wrapper'),
    photoBox = document.querySelector('.photo__box'),
    cardName = document.querySelector('b');
    
    /* Открыть галерею */
    btnPhoto.addEventListener('click', (e) => {
        const target = e.target;
        if(target == btnPhoto) {
            getPhoto(target.id);
        }
        if (target.parentElement == btnPhoto) {
            getPhoto(target.parentElement.id);
        }
        setTimeout(() => document.querySelector('.overlay').scrollTop = 820, 400)
        photoBox.style.display = 'block'
        cardBlock.style.display = 'none';
        navPanelPage.style.display = 'none';
    })

    /* Закрыть галерею */
    btnPhotoClose.addEventListener('click', () => {
        if (cardBlock.classList.contains('all__movie')) {
            navPanelPage.style.display = 'block';
        }
        if(cardName.textContent == 'John Doe' || cardName.textContent == '') {
            cardBlock.style.display = 'none';
            photoBox.style.display = 'none';
            navPanelPage.style.display = 'block';
            console.log('John Doe')
        } else {
            cardBlock.style.display = 'block';
            photoBox.style.display = 'none';
        }
        if (cardBlock.classList.contains('watch__list')) {
            cardBlock.style.display = 'block';
        }
        columns.forEach(column => {
            column.innerHTML = '';
        })

    })

/* Получить фото для галереи */
function getPhoto(id) {
    getData(`https://api.themoviedb.org/3/movie/${id}/images?api_key=84dadd31473be27d40ab4886ee4c7978`)
        .then(data => {
            setPhoto(data.backdrops)
        })
}
/* Загружаем карточки фото */
function setPhoto(data) {
        for(let p = 0; p < Math.floor(data.length/4); p++) {
            const photoOne = document.createElement('img');
            photoOne.src = IMG_URL + data[p].file_path;
            columns[0].appendChild(photoOne)
        }
        for(let p = Math.floor(data.length/4); p < Math.floor((data.length/4)*2); p++) {
            const photoTwo = document.createElement('img');
            photoTwo.src = IMG_URL + data[p].file_path;
            columns[1].appendChild(photoTwo)
        }
        for(let p = Math.floor(data.length/2); p < Math.floor((data.length/4)*3); p++) {
            const photoThree = document.createElement('img');
            photoThree.src = IMG_URL + data[p].file_path;
            columns[2].appendChild(photoThree)
        }
        for(let p = Math.floor((data.length/4)*3); p < data.length; p++) {
            const photoFour = document.createElement('img');
            photoFour.src = IMG_URL + data[p].file_path;
            columns[3].appendChild(photoFour)
        }
        showPhotoFromList()
}

/* Управление галереей  */
    const  btnOne = document.querySelector('.btnOne'),
            btnTwo = document.querySelector('.btnTwo'),
            btnFour = document.querySelector('.btnFour'),
            elements = document.getElementsByClassName("column");
            

    btnOne.addEventListener('click', () => {
        one()
    })

    btnTwo.addEventListener('click', () => {
        two()
    })

    btnFour.addEventListener('click', () => {
        four()
    })

    let i;
    /* 1 колонка */
    function one() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.flex = "100%";
        }
    }
    /* 2 колонка */
    function two() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.flex = "50%";
        }
    }
    /* 4 колонка */
    function four() {
        for (i = 0; i < elements.length; i++) {
            elements[i].style.flex = "25%";
        }
    }

    /* Показать фото из списка по клику */
    function showPhotoFromList() {
        const imgItem = document.querySelectorAll('.gallery__column img');
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
    }

