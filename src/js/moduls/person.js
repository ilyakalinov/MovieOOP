import { API_KEY, IMG_URL, NON__IMG, NON__PSN, openNav, PSN__URL } from "../script";
import { getData } from "./services/getData";
import { openNavWithInf, toListTrigger } from "./services/nav";

const person = () => {
    const newsWrapper = document.querySelector('.last__news .menu__items'),
        seeMoreBtn = document.querySelector('.last__news a');

    newsWrapper.innerHTML = ''
    
    function person() {
         getData(PSN__URL + `${Math.floor(Math.random()*9) + 1}`)
        .then(data => {
            setNewPerson(data.results);
        })
    }
    person();
    // setInterval(person, 25000)

    seeMoreBtn.addEventListener('click', () => person()) /* Обновление по клику */

    function setNewPerson(persons) {
        newsWrapper.innerHTML = ''

        for (let i = 0; i < 3; i++) {
            
            const {
                name,
                known_for,
                profile_path,
                id
            } = persons[Math.floor(Math.random()*persons.length)]
            
            const newPerson = document.createElement('div');
            newPerson.classList.add('menu__item');

            newPerson.innerHTML = `
                <img id='${id}' class='person__img to_list' src="${profile_path ? IMG_URL + profile_path : NON__PSN} " alt="">
                <div class="description">
                    <div class="title">
                        <a class='to_list' id='${id}' style='color: black;'>${name}</a>
                    </div>
                    <div class="films__wrapper">
                        <div class="films">
                            <a class='psn__movie' id='${known_for[0].id}'>
                                1.${known_for[0].title ? (known_for[0].title.length > 12 ? (known_for[0].title.slice(0, 15) + `...`) : known_for[0].title) : 'Not data'}
                                        (${known_for[0].release_date ? known_for[0].release_date.slice(0, 4) : 'not data'})</a>
                            <a class='psn__movie' id='${known_for[1].id}'>
                                2.${known_for[1].title ? (known_for[1].title.length > 12 ? (known_for[1].title.slice(0, 15) + `...`) : known_for[1].title) : 'Not data'}
                                        (${known_for[1].release_date ? known_for[1].release_date.slice(0, 4) : 'not data'})</a>
                            <a class='psn__movie' id='${known_for[2].id}'>
                                3.${known_for[2].title ? (known_for[2].title.length > 12 ? (known_for[2].title.slice(0, 15) + `...`) : known_for[2].title) : 'Not data'}
                                        (${known_for[2].release_date ? known_for[2].release_date.slice(0, 4) : 'not data'})</a>
                        </div>
                    </div>
                </div>
            `
            newsWrapper.appendChild(newPerson);
            const prsnImg = document.querySelectorAll('.person__img');
            prsnImg.src = !profile_path ? NON__IMG : `${IMG_URL + profile_path}`
            openNavWithInf('.psn__movie');
        }
        toListTrigger();
    }
}

export default person