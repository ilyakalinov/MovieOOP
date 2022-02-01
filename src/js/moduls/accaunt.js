import { IMG_URL } from "../script";
import InfoPanel from "./infoPanel";
import { getInfo } from "./services/getData";

const accaunt = () => {
    const btn = document.querySelector('.modal-btn'),
        panel = document.querySelector('.accaunt'),
        settings = document.querySelector('.settings');

    let user = null;
    let login = null;
    let icon = null;
    let movieList = null;

    function getCookie(cookieName, perem) {
        let cookie = {};
        document.cookie.split(';').forEach(function(el) {
            let [key,value] = el.split('=');
            cookie[key.trim()] = value;
        })
        if(perem == "user") {
            if(!(cookie[cookieName] == undefined)) {
                user = cookie[cookieName].replace('%40','@');
            } else {
                user = null;
            }
        }

        if(perem == "login") {
            if(!(cookie[cookieName] == undefined)) {
                login = cookie[cookieName].replace('%40','@');
            } else {
                login = 'Your name';
            }
        }
        if(perem == "movieList") {
            if(!(cookie[cookieName] == undefined)) {
                movieList = cookie[cookieName].replace('%40','@');
            } else {
                movieList = null;
            }
        }
        if(perem == "icon") {
            if(!(cookie[cookieName] == undefined)) {
                // icon = cookie[cookieName].replace('%40','@');
                icon = './img/acc.png';
            } else {
                icon = './img/acc.png';
            }
        }
        return user, login, movieList, icon;
    }

    getCookie('user', 'user');
    getCookie('login', "login");
    getCookie('movieList', "movieList");
    getCookie('icon', "icon");
    console.log(user)
    console.log(icon)
    if(!(movieList)) {
        console.log('null')
    } else {
        console.log(movieList.split('%2C'))
    }
    console.log(login)

    if ((user == '') || !(user)) {
        btn.classList.add('unlog');
    } else {
        btn.classList.add('log');
        function setPerson () {
            document.querySelector('.title.name').textContent = `Hello, ${login} :)`
            document.querySelector('.modal-btn.acc__in').src = `${icon}`
            document.querySelector('.modal-btn.acc').src = `${icon}`
        }

        setPerson();
        function setWatchList(idx) {
            const watchList = document.querySelector('.watch_list');
            watchList.innerHTML = '';
            console.log(idx)
            for (let i = 1; i < idx.length + 1; i++) {
                getInfo(idx[i - 1])
                .then(info =>  {
                    const {
                        id,
                        title, 
                        release_date, 
                        poster_path, 
                    } = info;

                    const listItem = document.createElement('div');
                    listItem.classList.add('list__item');
                    listItem.innerHTML = `
                    <div id='${id}' class="list__item__wrapper">
                        <div class="img" style='background-image:url("${IMG_URL + poster_path}");'>
                        </div>
                        <span id='${id}' class="name">${title.length > 10 ? title.slice(0, 10) + '...' : title}</span>
                    </div>
                    <div class='data__item'>
                        <span class="data">${release_date}</span>
                        <img id='${id}' src="./img/trash.png" alt="">
                    </div>
                    `;
                    watchList.appendChild(listItem);
                    new InfoPanel('.list__item__wrapper', '.list__item__wrapper span').open();
                    watchList.querySelectorAll('.list__item').forEach(item => {
                        item.addEventListener('click', () => {
                            panel.style.display = 'none';
                        })
                    })
                    let listMov = idx.join().replace(/,/g, ', ');
                    watchList.querySelectorAll('.data__item img').forEach(trash => {
                        trash.addEventListener('click', () => {
                            trash.parentElement.parentElement.remove()
                            listMov = listMov.replace(`${trash.id}` ? `${trash.id}` : `${trash.id},`, '');
                            console.log(listMov)
                            let data = {
                                    movie: listMov,
                                    email: user
                                };
                            let postdata = JSON.stringify(data);
                            const postData = async (url, resu) => {
                                console.log(resu);
                                let res = fetch(url, {
                                    method: "POST",
                                    headers: {
                                        'Content-Type': 'application/json;charset=utf-8'
                                      },
                                    body: `${resu}`
                                });

                                return await res;
                            }
                            postData('./server/update.php', postdata)
                                .then(res => {
                                    console.log(res);
                                })
                        })
                    })
                });
            }
            
            
        }
        setWatchList(movieList.split('%2C'));
    }
    document.querySelector('.log').addEventListener('click', () => {
        panel.style.display = 'block';
    })
    document.querySelector('.acc__in').addEventListener('click', () => {
        panel.style.display = 'none';
    })
    document.querySelector('.title.name').addEventListener('click', () => {
        settings.classList.toggle('show');
    })
    

   
    
};

export default accaunt;