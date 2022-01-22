import { rndDataNum } from "../../script";
import { getVideo } from "./getData";
import Spinner from "./spinner";

const videoPlayer = () => {

  let tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

export default class VideoPlayer{
  constructor(id, selector) {
    this.id = id;
    this.block = selector;
  }
  createPlayer() {
    new Spinner(this.block).createSpinner();
    getVideo(this.id)
      .then(data => {
        this.key = data.results[Math.floor(Math.random()*data.results.length)].key
        this.setPlayer(this.key)
      })
      .finally(() => {
        new Spinner(this.block).deleteSpinner();
      })
      .catch(() => {
        new Spinner(this.block).createSpinner();
      })
      
      
  }
  setPlayer(key) {
    let player;
  
    player = new YT.Player(this.block, {
      height: '100%',
      width: '100%',
      videoId: `${this.key}`,
      events: {
        'onReady': onPlayerReady
      }
    });
    function onPlayerReady(event) {
      let video = event.target.h;
    }
  }
}

export {videoPlayer};