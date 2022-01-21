function scrollTo() {
    const anchors = document.querySelectorAll('a');

    for (let anchor of anchors) {
        if(anchor.classList.contains('search__link') || anchor.classList.contains('watch__online')) {
            anchor.addEventListener('click', function(event) { console.log('click')
                event.preventDefault();
            })
        } else {
            anchor.addEventListener('click', function(event) {
                console.log('click')
                event.preventDefault();
                const blockID = anchor.getAttribute('href');
                document.querySelector(`#${blockID}`).scrollIntoView({
                    behavior: "smooth",
                    block: 'start'
                })
            })
            anchor.parentElement.addEventListener('click', function(event) {
                event.preventDefault();
                const parentID = anchor.getAttribute('href');
                document.querySelector(`#${parentID}`).scrollIntoView({
                    behavior: "smooth",
                    block: 'start'
                })
            })
        }
    }
        
}

export default scrollTo;


