import scrollTo from "./scrollTo";

const scrollBtn = () => {
    const mybutton = document.getElementById("myBtn");

    document.body.onscroll = function() {
        scrollFunction()};

    document.querySelector('.overlay').onscroll = function() {
        scrollFunction()};

    function scrollFunction() {
        if( document.getElementById("myNav").classList.contains('open')) {
            if (document.querySelector('.overlay').scrollTop > 50) {
                mybutton.style.opacity = "1";
                scrollTo()
            } else {
                mybutton.style.opacity = "0";
            }
            mybutton.addEventListener('click', () => {
                document.querySelector('.overlay').scrollTop = 0;
            })
        } 
        if( !document.getElementById("myNav").classList.contains('open')) {
            if (window.scrollY > 50) {
                mybutton.style.opacity = "1";
                scrollTo()
            } else { 
                mybutton.style.opacity = "0";
            }
            mybutton.addEventListener('click', () => {
                document.querySelector('body').scrollTop = 0;
            })
        }
    
       
    }
}

export {scrollBtn};