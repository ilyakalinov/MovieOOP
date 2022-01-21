import { IMG_URL, POPULAR_MOVIE } from "../script";
import { getData } from "./services/getData";
import { openNav } from "./services/nav";


function setWalpapers() {
    const wallpapersListBox = document.querySelector('.wallpapers__list');

    getData(POPULAR_MOVIE)
    .then(data => {
        wallpapersListBox.innerHTML =``;
        console.log(data.results)
        data.results.forEach((item, i) => {
            const {
                backdrop_path,
                title
            } = data.results[i]
            
            const wallpapersItem = document.createElement('div');
            wallpapersItem.classList.add('wallpaper__inner');
            wallpapersItem.innerHTML = `
             <img src='${IMG_URL + backdrop_path}'>
             <h1>${title.length > 28 ? title.slice(0, 28) + `...` : title}</h1>
            `;
            wallpapersListBox.appendChild(wallpapersItem);
        })
        openNav();
    })

}

export {setWalpapers};
