import { API_KEY, IMG_URL, POP_PSN__URL } from "../script"
import { getData } from "./services/getData"

const bd = () => {
    const BDWrapper = document.querySelector('.born__today__wrapper .photo'),
        nameBDPerson = BDWrapper.querySelectorAll('a'),
        imgBD = BDWrapper.querySelectorAll('img'),
        seeMoreBtn = document.querySelector('.news__container .midle__news .header a')

    function bd() {
         getData(POP_PSN__URL + `${Math.floor(Math.random()*9) + 1}`)
        .then(data => {
            setNewBD(data.results);
        })
    }
    bd();
    setInterval(bd, 45000)

    seeMoreBtn.addEventListener('click', () => bd())

    function setNewBD(persons) {

        for (let i = 0; i < 5; i++) {
            const {
                name,
                profile_path,
                id
            } = persons[Math.floor(Math.random()*persons.length)]

            imgBD[i].src=`${IMG_URL + profile_path}`;
            imgBD[i].id = id;
            nameBDPerson[i].textContent=`${name}`;
            nameBDPerson[i].id = id
        }
    }
}

export default bd;