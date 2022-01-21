import { getVideo } from './services/getData';
import { openNav } from './services/nav';
import { createPalyer } from './services/videoPlayer';

const openBtn = document.querySelectorAll('.menu__item.watch');

function trailers() {
  
    openBtn.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target;

        if(target.parentElement == btn) {
          openNavWithTrailer(target.parentElement.id)
        }
        if (target == btn) {
          openNavWithTrailer(target.id)
        }
      })
    })
      
}
function openNavWithTrailer(id) {
  getVideo(id)
  .then(videoData => {
    videoData.results.forEach(video => {
      let {key} = video;

      if(document.querySelector('iframe#player')) {
          openNav();
          document.querySelector('#player').style.display = 'inline-block';
          document.querySelector('iframe#player').src = `https://www.youtube.com/embed/${key}`
      } else {
        createPalyer(key, 'player')
      }
    })
  })
}

export default trailers;
