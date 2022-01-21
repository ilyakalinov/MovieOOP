const videoPlayer = () => {

  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function createPalyer(id, name) {

  let player;

  player = new YT.Player(name, {
    height: '360',
    width: '640',
    videoId: `${id}`,
    events: {
      'onReady': onPlayerReady
    }
  });
  function onPlayerReady(event) {
    let video = event.target.h;
  }
}
export {videoPlayer, createPalyer};