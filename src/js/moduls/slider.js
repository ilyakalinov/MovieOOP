
const slider = () => {
    let position = 0;
    const slidesToShow = 3,
        slidesToScroll = 2,
        container = document.querySelector('.movie__now__box'),
        track = document.querySelector('.movie__now__box__wrapper'),
        slide = document.querySelectorAll('.movie__now');
    
    const itemWidth = slide[0].offsetWidth;
    let start = 0;
    let move = 0;
    container.addEventListener('touchstart', (e) => {
        start = e.touches[0].clientX
    })
    container.addEventListener('touchend', (e) => {

        move = e.changedTouches[0].clientX

        if(window.body.clientWidth <= 1000 && window.body.clientWidth > 800) {
            if (-itemWidth*2 < position){
                if(move < start - 50) {
                    position -= itemWidth
                    track.style = `
                        transform: translateX(${position}px);
                    `
                }
            }
            if(!position <= 0) {
                if(move > start + 50) {
                    position += itemWidth
                    track.style = `
                        transform: translateX(${position}px);
                    `
                }
            }
        }
        if(window.body.clientWidth <= 800) {
            if (-itemWidth*3 < position){
                if(move < start - 50) {
                    position -= itemWidth
                    track.style = `
                        transform: translateX(${position}px);
                    `
                }
            }
            if(!position <= 0) {
                if(move > start + 50) {
                    position += itemWidth
                    track.style = `
                        transform: translateX(${position}px);
                    `
                }
            }
        }
    })
}
export default slider;

