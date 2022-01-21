import { setNewMovieData } from "../information";
import { toList } from "../movieList";
import { navPanelPage } from "../watch";
import { getVideo } from "./getData";
import { rmvActClass } from "./search";
import { createPalyer, videoPlayer } from "./videoPlayer";

const cardBlock = document.querySelector('.card__wrapper'),
    cardsBlock = document.querySelector('.movie__cards'),
    closeBtn = document.querySelector('.closebtn'),
    informationWrapper = document.querySelector('.information.tariler_container'),
    photoBox = document.querySelector('.photo__box'),
    columns = document.querySelectorAll('.gallery__column'),
    actMovie = document.querySelector('.actors__movie'),
    cardPerson = document.querySelector('.card__person'),
    cardName = document.querySelector('b'),
    navPanel = document.querySelector('.num__page'),
    btnPhoto = informationWrapper.querySelector('.btn__click');

/* Открыть Overlay */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").classList.add('open');
    document.querySelector('html').classList.add('no__scroll');
}

/* Закрыть Overlay по клику на Крестик */
closeBtn.addEventListener('click', () => closeNav())

/* Закрыть Overlay по клику на Overlay */
document.querySelector('.overlay').addEventListener('click', (e) => {
    
    if((e.target.parentElement == document.querySelector('.overlay') || e.target == document.querySelector('.overlay')) && e.target != document.querySelector('#myBtn')) {
        closeNav();
    }
})

/* Закрыть Overlay, и все содержимое*/
function closeNav() {

    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").classList.remove('open');

    document.querySelector('html').classList.remove('no__scroll');
    document.querySelector('.wallpapers__list').style.display = 'none';

    /* Очистка блока информации */
    informationWrapper.style.display = 'none';

    /* Очистка и установка начальных параметров листа фильмов */
    cardBlock.style.display = 'none';
    cardsBlock.innerHTML = '';
    cardBlock.classList.remove('watch__list');
    cardBlock.style.paddingTop = '90px';
    cardBlock.classList.remove('all__movie');
    /* Устновка начальных параметров карточки актера */
    cardName.textContent = 'John Doe';
    cardPerson.style.display = 'block';
    actMovie.style.display = 'block';

    /* Очистка и установка начальных параметров листа фото */
    photoBox.style.display = 'none';
    columns.forEach(column => {
      column.innerHTML = '';
    });
    
    /* Очистка и установка начальных параметров панели навигации */
    navPanelPage.style.display = 'none';
    navPanelPage.classList.remove('search')
    navPanelPage.classList.remove('genre')
    rmvActClass();
    navPanelPage.id = ''
    document.querySelector('.search__panel button').style.top = '140px'
    
    /* В зависимости от ранее открытого плеера закрываем его вместе с overlay */
    if(document.querySelector('iframe#player')) {
        document.querySelector('iframe#player').src = `https://www.youtube.com/embed/${''}`
        document.querySelector('#player').style.display = 'none';
    }

    if(document.querySelector('iframe#trailer__window')) {
        document.querySelector('iframe#trailer__window').src = `https://www.youtube.com/embed/${''}`
        document.querySelector('#trailer__window').style.display = 'none';
    }

    if(document.querySelector('iframe#trailer__window_play')) {
      document.querySelector('iframe#trailer__window_play').src = `https://www.youtube.com/embed/${''}`
      document.querySelector('#trailer__window_play').style.display = 'none';
  }
    navPanel.style.marginTop = '100px'
}

/* Загрузка плеера(от openNavWithInf)*/
function openNavWithPlayer(id) {
    btnPhoto.id = id;
    document.querySelector('.overlay').scrollTo(0, 0)
    getVideo(id)
    .then(videoData => {
        let {key} = videoData.results[Math.floor(Math.random() *  videoData.results.length)];
          if(window.body.clientWidth >= 1250) {
          if(document.querySelector('iframe#trailer__window')) {
              openNav();
              document.querySelector('#trailer__window').style.display = 'inline-block';
              document.querySelector('iframe#trailer__window').src = `https://www.youtube.com/embed/${key}`
          } else {
            createPalyer(key, 'trailer__window')
            videoPlayer();
          }
        } 
        if(window.body.clientWidth <= 1250) {
            if(document.querySelector('iframe#trailer__window_play')) {
                openNav();
                document.querySelector('#trailer__window').style.display = 'inline-block';
                document.querySelector('iframe#trailer__window_play').src = `https://www.youtube.com/embed/${key}`
            } else {
              createPalyer(key, 'trailer__window_play')
              videoPlayer();
            }
        }
      })
  }

  /* Загрузка информации о филме и вызов загрузки плеера(openNavWithPlayer) + строка страниц фильмов*/
  function openNavWithInf(btn) {
    document.querySelectorAll(btn).forEach(btn => {
        btn.addEventListener('click', (e) => {
          const target = e.target;

          let wdth = 130;

          if(window.body.clientWidth <= 1500) {
            wdth = 200
          }
          if(window.body.clientWidth <= 1250) {
            wdth = 800
          }
          if(window.body.clientWidth <= 900) {
            wdth = 950
          }
          
          if(target.parentElement == btn) {
            
            openNav()
            informationWrapper.style.display = 'block';
            cardBlock.style = `padding-top: ${wdth}px; display: block;`
            navPanel.style = `float: left; margin-top: ${wdth+100}px; display: none`
            if(cardName.textContent == 'John Doe' || cardName.textContent == '') {
              navPanel.style = `margin-top: ${wdth+100}px; display: block;`
              // cardBlock.style = `display: none;`
            }
            openNavWithPlayer(target.parentElement.id)
            setNewMovieData(target.parentElement.id);
          }
          if (target == btn) {
            openNav()
            informationWrapper.style.display = 'block';
            if(cardName.textContent == 'John Doe' || cardName.textContent == '') {
              navPanel.style = `float: left; margin-top: ${wdth}px; display: block; `
              // cardBlock.style = `display: none;`
            }
            document.querySelector('.search__panel button').style.top = '140px'
            openNavWithPlayer(target.id)
            setNewMovieData(target.id)
            console.log(window.body.clientWidth)
            
          }
        })
      })
    }

    /* Вызов листа с фильмами */
    function toListTrigger() {
      const bntOpenList = document.querySelectorAll('.to_list')
      bntOpenList.forEach(btn => {
          btn.addEventListener('click', (e) => {
              const target = e.target;
              toList(target.id)
          })
      })
     
  }

export {openNavWithInf, openNavWithPlayer, openNav, closeNav, toListTrigger}