import { ALL__MOVIE, API_KEY, BASE_URL, IMG_URL } from "../script";
import setMovies, { setPersonMovies } from "./movieList";
import Panel from "./panel";
import { getData } from "./services/getData";

const cardPerson = document.querySelector('.card__person'),
        cardImg = cardPerson.querySelector('img'),
        cardName = cardPerson.querySelector('b'),
        cardPop = cardPerson.querySelector('.popularity'),
        numPanel = document.querySelector('.num__page'),
        cardDepartment = cardPerson.querySelector('.known_for_department');

function personCard(...trigerBtns) {
    const btns = document.querySelectorAll(trigerBtns);
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            SetCardPerson(btn.id)
            cardPerson.style.display = 'block'
        })
    })
}
function SetCardPerson(id) {
    getData(BASE_URL + `/person/${id}?` + API_KEY)
        .then(data => {
            const {
                name,
                profile_path,
                popularity,
                known_for_department
            } = data;

            cardName.textContent = name;
            cardImg.src = `${IMG_URL + profile_path}`;
            cardDepartment.textContent = known_for_department;
            cardPop.textContent = Math.floor(popularity);

            getData(`https://api.themoviedb.org/3/person/${id}/movie_credits?${API_KEY}&language=en-US`)
                .then(data => {
                    console.log(data.cast);
                    setPersonMovies(data.cast);
                    new Panel().openPanel();   
                    numPanel.style.display = 'none';
                });
        })
    }
 
export default personCard;
