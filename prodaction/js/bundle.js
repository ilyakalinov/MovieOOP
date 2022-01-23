!function(){"use strict";var e={d:function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}};e.d({},{N0:function(){return Q},$h:function(){return R},_n:function(){return G},bV:function(){return W},A3:function(){return Z},n5:function(){return J},d1:function(){return K},Rb:function(){return Y},r4:function(){return X},Tz:function(){return te},Xc:function(){return ee},Xx:function(){return ne}});const t=async e=>{let t=await fetch(e);if(!t.ok)throw new Error(`Could nod fetch ${e}, status: ${t.status}`);return await t.json()},n=async e=>{let t=await fetch(`${G}/movie/${e}?${R}`);if(!t.ok)throw new Error(`Could nod fetch ${e}, status: ${t.status}`);return await t.json()},i=async e=>{let t=await fetch(`${G}/movie/${e}/videos?${R}`);if(!t.ok)throw new Error(`Could nod fetch ${e}, status: ${t.status}`);return await t.json()};class o{constructor(e){this.url=e,this.movieNow=document.querySelectorAll(".movie__now__wrapper"),this.infoBox=document.querySelectorAll(".now__menu"),this.infoInner=document.querySelectorAll(".menu__item"),this.movieName=document.querySelectorAll(".movie__now__wrapper .title"),this.genreList=document.querySelectorAll(".movie__now__wrapper .movie__now__genre"),this.descr=document.querySelectorAll(".movie__now_description"),this.spinner=document.querySelectorAll(".cssload-thecube")}showPopMovies(e){for(let n=0;n<=this.movieNow.length;n++)t(e).then((e=>e.results)).then((e=>{const{title:t,poster_path:i,genre_ids:o,id:r}=e[Math.floor(Math.random()*e.length)],l=[];o.forEach((e=>{var t;t=e,ne.forEach((e=>{e.id===t&&l.push(e.name)}))})),this.movieNow[n].style=`background-image: url('${W+i}');`,this.movieName[n].textContent=t,this.genreList[n].textContent=l,this.movieNow[n].parentElement.querySelector(".watch__trailer").id=`${r}`,this.movieNow[n].parentElement.querySelector(".information__item").id=`${r}`})).finally((()=>{this.movieNow[n].style.display="flex",this.spinner[n].remove()}))}showInfoPanel(e){e.forEach((e=>{e.addEventListener("mouseover",(t=>{const n=t.target;this.hideInfo(this.infoBox,this.descr),n.parentElement!=e&&n!=e&&n.parentElement.parentElement!=e||this.showInfo(e)}))}))}showInfo(e){e.parentElement.querySelector(".now__menu").classList.add("active__movie"),e.querySelector(".movie__now_description").classList.add("description__active")}hideInfo(...e){this.infoBox.forEach((e=>{e.classList.remove("active__movie")})),this.descr.forEach((e=>{e.classList.remove("description__active")}))}init(){this.showPopMovies(this.url),this.showInfoPanel(this.movieNow)}}class r{constructor(e){this.id=e,this.btnOpen=document.querySelector(".btn__click"),this.btnClose=document.querySelector(".btn__click__close"),this.galleryBox=document.querySelector(".photo__box"),this.gallery=document.querySelector(".gallery__box__wrapper")}open(){this.btnOpen,this.galleryBox&&this.galleryBox.remove(),this.gallery.style.display="block",setTimeout((()=>{this.gallery.scrollIntoView({behavior:"smooth",block:"start"}),this.btnOpen.querySelector(".loadingio-spinner-spin-ld66ttjruz").style.opacity="0",this.btnOpen.querySelector("h4").style.opacity="1"}),1e3),this.btnOpen.querySelector(".loadingio-spinner-spin-ld66ttjruz").style.opacity="1",this.btnOpen.querySelector("h4").style.opacity="0.4",this.galleryBox=document.createElement("div"),this.galleryBox.classList.add("photo__box"),this.galleryBox.innerHTML='\n            <div class="photo__box">\n                <div class="btn__box">\n                    <button class="btnOne btn__gallery">1</button>\n                    <button class="btnTwo btn__gallery">2</button>\n                    <button class="btnFour btn__gallery">4</button>\n                </div>\n                <div class="row">\n                    <div class="column gallery__column">\n\n                    </div>\n                    <div class="column gallery__column">\n\n                    </div>\n                    <div class="column gallery__column">\n                \n                    </div>\n                    <div class="column gallery__column">\n\n                    </div>\n                </div>\n            </div>\n        ',this.gallery.appendChild(this.galleryBox),this.columns=document.querySelectorAll(".gallery__column"),t(`https://api.themoviedb.org/3/movie/${this.id}/images?api_key=84dadd31473be27d40ab4886ee4c7978`).then((e=>e.backdrops)).then((e=>{for(let t=0;t<Math.floor(e.length/4);t++){const n=document.createElement("img");n.id="gallery__item",n.src=W+e[t].file_path,this.columns[0].appendChild(n),this.showPhoto()}for(let t=Math.floor(e.length/4);t<Math.floor(e.length/4*2);t++){const n=document.createElement("img");n.id="gallery__item",n.src=W+e[t].file_path,this.columns[1].appendChild(n),this.showPhoto()}for(let t=Math.floor(e.length/2);t<Math.floor(e.length/4*3);t++){const n=document.createElement("img");n.id="gallery__item",n.src=W+e[t].file_path,this.columns[2].appendChild(n),this.showPhoto()}for(let t=Math.floor(e.length/4*3);t<e.length;t++){const n=document.createElement("img");n.id="gallery__item",n.src=W+e[t].file_path,this.columns[3].appendChild(n),this.showPhoto()}})),this.navGallery()}close(){this.galleryBox.remove(),this.gallery.style.display="none"}showPhoto(){const e=document.querySelectorAll(".gallery__column img"),t=document.getElementsByClassName("gallery__column");let n;e.forEach((e=>{e.addEventListener("click",(e=>{const i=e.target;!function(){for(n=0;n<t.length;n++)t[n].style.flex="100%"}(),i.scrollIntoView({behavior:"smooth",block:"center"},50)}))}))}navGallery(){this.btnOne=document.querySelector(".btnOne"),this.btnTwo=document.querySelector(".btnTwo"),this.btnFour=document.querySelector(".btnFour");const e=document.getElementsByClassName("gallery__column");let t;this.btnOne.addEventListener("click",(()=>{!function(){for(t=0;t<e.length;t++)e[t].style.flex="100%"}()})),this.btnTwo.addEventListener("click",(()=>{!function(){for(t=0;t<e.length;t++)e[t].style.flex="50%"}()})),this.btnFour.addEventListener("click",(()=>{!function(){for(t=0;t<e.length;t++)e[t].style.flex="25%"}()}))}init(){this.btnOpen.addEventListener("click",(()=>{this.open()})),this.btnClose.addEventListener("click",(()=>{this.close()}))}}const l=document.querySelector(".card__wrapper");var s=function(e){l.style.display="flex",l.innerHTML="";for(let t=0;t<e.results.length;t++){const{poster_path:n,title:i,genre_ids:o,id:r}=e.results[t],s=[];o.forEach((e=>{var t;t=e,ne.forEach((e=>{e.id===t&&s.push(e.name)}))}));const a=document.createElement("div");a.classList.add("movie__card__wrapper"),a.classList.add("flip-card"),a.innerHTML=`\n            <div class="movie__card__inner flip-card-inner">\n                <div class="movie__card flip-card-front" style = 'background-image:url(${n?W+n:"./img/nowplay.png>"});'>\n                    <div class="movie__card_description" id='movie__card_description'>\n                        <h2 class="title">\n                            ${i.length>30?i.slice(0,30)+"...":i}\n                        </h2>\n                        <span class="movie__now__genre">\n                            ${s}\n                        </span>\n                        </div>\n                </div>\n                <div class="movie__card flip-card-back" style = 'background-image:url(${n?W+n:"./img/nowplay.png>"});'>\n                    <div class="movie__inform__box">\n                        <div class="movie__back__inner">\n                            <div id='${r}' class="container__play">\n                                <i id='${r}'class="fas fa-play"></i>\n                            </div>  \n                        </div>\n                    </div>\n                </div>\n            </div>\n            `,l.appendChild(a)}new q(".container__play").open()};class a{constructor(){this.btnOpen=document.querySelector(".watch__online"),this.numPanel=document.querySelector(".num__page")}navNumPanel(){}init(){this.btnOpen.addEventListener("click",(e=>{const n=e.target;n!=this.btnOpen&&n.parentElement!=this.btnOpen||((new w).openPanel(),this.numPanel.style.display="block",u.forEach((e=>{e.addEventListener("click",(()=>{g(),e.classList.add("btn__genre__active"),t(te+e.id).then((e=>s(e))),_.classList.remove("search"),_.classList.add("genre"),_.id=e.id,y()}))})),p.addEventListener("submit",(e=>{t(ee+m.value).then((e=>s(e))),_.classList.add("search"),_.classList.remove("genre"),_.id=m.value,y(),g(),m.value=""})),f())}))}}let c=1;const d=document.querySelectorAll(".pagination a"),_=document.querySelector(".num__page"),u=document.querySelectorAll(".geners__btn"),p=document.querySelector("#search__form"),h=document.querySelector(".card__wrapper"),m=document.querySelector("#search");function v(){d.forEach((e=>{e.classList.remove("active")}))}function y(){for(let e=1;e<11;e++)d[e].textContent=e,d[e].classList.remove("active");d[1].classList.add("active")}function g(){u.forEach((e=>{e.classList.remove("btn__genre__active")}))}function f(e){c=e,t(Q+e).then((e=>{(new w).openPanel(),s(e),h.classList.add("all__movie"),_.style.display="block"}))}v(),d[c].classList.add("active"),d.forEach(((e,n)=>{e.addEventListener("click",(n=>{"pre"==n.target.id||"next"==n.target.id?("pre"==n.target.id&&function(){if(1==d[1].textContent);else for(let e=1;e<11;e++){const t=d[e].textContent;d[e].textContent=Math.floor(Number(t)-10)}}(),"next"==n.target.id&&function(){if(991==d[1].textContent);else for(let e=1;e<11;e++){const t=d[e].textContent;d[e].textContent=Math.floor(Number(t)+10)}}()):(_.classList.contains("search")||_.classList.contains("genre")?_.classList.contains("genre")?t(`https://api.themoviedb.org/3/discover/movie?api_key=84dadd31473be27d40ab4886ee4c7978&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${n.target.textContent}&with_genres=`+_.id).then((e=>s(e))):t(`${G}/search/movie?${R}&language=en-US&query=${_.id}&page=${n.target.textContent}`).then((e=>s(e))):f(n.target.textContent),v(),e.classList.add("active"))}))}));class w{constructor(){this.panel=document.querySelector(".overlay"),this.panelInner=document.querySelector(".overlay__info"),this.closebtn=document.querySelector(".closebtn"),this.numPanel=document.querySelector(".num__page"),this.cardPerson=document.querySelector(".card__person"),this.gallery=document.querySelector(".gallery__box__wrapper")}openPanel(){this.panel.classList.add("open__panel")}closePanel(){this.closebtn.addEventListener("click",(e=>{e.preventDefault(),this.setStartSetup()})),this.panel.addEventListener("click",(e=>{e.target===this.panel&&this.setStartSetup()}))}setStartSetup(){this.panel.classList.remove("open__panel"),this.panelInner.innerHTML="",v(),g(),this.gallery.style.display="none",this.numPanel.style.display="block",his.cardPerson.style.display="none"}}class b{constructor(e=""){this.selector=e}createSpinner(){this.spinnerElem=document.createElement("div"),this.spinnerElem.classList.add("loadingio-spinner-spin-wffps27ze9i"),this.spinnerElem.innerHTML='\n            <div class="ldio-zv7gliytzt">\n                <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>\n            </div>\n        ',document.querySelector(`#${this.selector}`).parentElement.appendChild(this.spinnerElem)}deleteSpinner(){document.querySelector(`#${this.selector}`).parentElement.querySelector(".loadingio-spinner-spin-wffps27ze9i").remove()}createSpinnerMov(e){this.spinnerElem=document.createElement("div"),this.spinnerElem.classList.add("loadingio-spinner-spin-wffps27ze9i"),this.spinnerElem.innerHTML='\n            <div class="ldio-zv7gliytzt">\n                <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>\n            </div>\n        ',this.block=e,this.block.appendChild(this.spinnerElem)}}class S{constructor(e,t){this.id=e,this.block=t}createPlayer(){new b(this.block).createSpinner(),i(this.id).then((e=>{this.key=e.results[Math.floor(Math.random()*e.results.length)].key,this.setPlayer(this.key)})).finally((()=>{new b(this.block).deleteSpinner()})).catch((()=>{new b(this.block).createSpinner()}))}setPlayer(e){let t;t=new YT.Player(this.block,{height:"100%",width:"100%",videoId:`${this.key}`,events:{onReady:function(e){e.target.h}}})}}class q{constructor(...e){this.panel=document.querySelector(".overlay"),this.panelInner=document.querySelector(".overlay__info"),this.triggers=document.querySelectorAll(e),this.closebtn=document.querySelector(".closebtn")}open(){(new w).closePanel(),this.triggers.forEach((e=>{e.addEventListener("click",(()=>{console.log(),this.setInfo(e.id),(new w).openPanel()}))}))}setInfo(e){n(e).then((e=>{const{id:t,genres:n,title:i,production_countries:o,release_date:l,runtime:s,budget:a,vote_average:c,poster_path:d,overview:_}=e;this.panelInner.innerHTML="",this.infoPanel=document.createElement("div"),this.infoPanel.classList.add("information","tariler_container"),this.infoPanel.innerHTML=`\n            <div class="information__wrapper">\n            <div class="trailers">\n                <h2 class="trailer__side">\n                    IFORMATION\n            </div>\n                <div class="movie__from">\n                    <div class="movie__inform">\n                        <img src="${W+d}">\n                        <div class="movie__inform__box">\n                            <div class="movie__inform__geners">\n                                <h1 class="title">\n                                    ${i.length>20?`${i.slice(0,20)}...`:i}\n                                </h1>\n                                <div class="inf__stat">\n                                    <span>year</span>\n                                    <span class="inf year">${l.replace(/-/g,".")}</span>\n                                </div>\n                                <div class="inf__stat">\n                                    <span>country</span>\n                                    <span class="inf country">${o[0].name}</span>\n                                </div>\n                                <div class="inf__stat">\n                                    <span>Voite</span>\n                                    <span class="inf average">${c}</span>\n                                </div>\n                                <div class="inf__stat">\n                                    <span>genres</span>\n                                    <div class="genre__box genre__box">\n                                        ${n[0].name}\n                                        <div class="genre__box__color"><div>.</div></div>\n                                    </div>\n                                </div>\n                                <div class="inf__stat">\n                                    <span>budget</span>\n                                    <span class="inf budget">${a}</span>\n                                </div>\n                                <div class="inf__stat">\n                                    <span>duration</span>\n                                    <span class="inf runtime">${s} min</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class="trailer__window inform__play">\n                    <div id='trailer__window' >\n                    </div>\n                </div>\n            </div>\n            <div class="movie__description__wrapper">\n                <div class="trailer__window inform__play_mob" id="trailer__window_play"\n                style='background-size: cover;\n                        background-position: center;'>\n                \n                </div>\n                <div class="movie__description">\n                    ${_}\n                </div>\n            </div>\n            <div class="gallery">\n                <div class="movies__photos">\n                    <h1>Movie's photo</h1>\n                    <button class="btn__click">\n                        <div class="loadingio-spinner-spin-ld66ttjruz"><div class="ldio-ubk447plaon">\n                            <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>\n                        </div></div>\n                        <h4 href="photo__box">Open gallery</h4>\n                    </button>\n                    <button class="btn__click__close"><h4>Close gallery</h4></button>\n                </div>\n            </div>\n            `,this.panelInner.appendChild(this.infoPanel),new S(t,"trailer__window").createPlayer(),new r(t).init(),this.panelInner.scrollIntoView({behavior:"smooth",block:"center"},50)}))}}const $=document.querySelector(".tariler_container.random"),k=$.querySelector(".title"),E=$.querySelector(".year"),L=$.querySelector(".language"),x=$.querySelector(".average"),M=$.querySelector(".genre__box"),C=$.querySelector(".popularity"),P=$.querySelector(".count"),A=$.querySelector(".movie__description"),T=$.querySelector(".trailer__window"),I=$.querySelector(".movie__inform img"),O=document.querySelector(".random__btn");class B{constructor(){this.anchors=document.querySelectorAll(".nav__btn"),this.aDef=document.querySelectorAll("a"),this.upBtn=document.getElementById("myBtn"),this.panel=document.querySelector(".overlay")}getAncors(){this.aDef.forEach((e=>e.addEventListener("click",(e=>e.preventDefault())))),this.anchors.forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const n=e.childNodes[1].getAttribute("href");this.toBlock(n)}))}))}toBlock(e){document.querySelector(`#${e}`).scrollIntoView({behavior:"smooth",block:"center"})}scrollFunction(){document.body.onscroll=()=>{this.scrollOn(this.upBtn)},this.panel.onscroll=()=>{this.scrollOn(this.upBtn)}}scrollOn(e){this.panel.classList.contains("open__panel")?(this.panel.scrollTop>50?e.style.opacity="1":e.style.opacity="0",e.addEventListener("click",(()=>{document.querySelector(".overlay").scrollTop=0}))):(window.scrollY>50?e.style.opacity="1":e.style.opacity="0",e.addEventListener("click",(()=>{document.querySelector("body").scrollTop=0})))}init(){this.getAncors(),this.scrollFunction()}}const N=document.querySelector(".card__person"),H=N.querySelector("img"),z=N.querySelector("b"),j=N.querySelector(".popularity"),F=document.querySelector(".num__page"),D=N.querySelector(".known_for_department");var U=function(...e){document.querySelectorAll(e).forEach((e=>{e.addEventListener("click",(()=>{var n;n=e.id,t(G+`/person/${n}?`+R).then((e=>{const{name:i,profile_path:o,popularity:r,known_for_department:s}=e;z.textContent=i,H.src=`${W+o}`,D.textContent=s,j.textContent=Math.floor(r),t(`https://api.themoviedb.org/3/person/${n}/movie_credits?${R}&language=en-US`).then((e=>{console.log(e.cast),function(e){l.innerHTML="",l.style.display="flex";try{for(let t=0;t<60;t++){const{poster_path:n,title:i,genre_ids:o,id:r}=e[t],s=[];o.forEach((e=>{var t;t=e,ne.forEach((e=>{e.id===t&&s.push(e.name)}))}));const a=document.createElement("div");a.classList.add("movie__card__wrapper"),a.classList.add("flip-card"),a.innerHTML=`\n            <div class="movie__card__inner flip-card-inner">\n                <div class="movie__card flip-card-front" style = 'background-image:url(${n?W+n:"./img/nowplay.png>"});'>\n                    <div class="movie__card_description" id='movie__card_description'>\n                        <h2 class="title">\n                            ${i.length>30?i.slice(0,30)+"...":i}\n                        </h2>\n                        <span class="movie__now__genre">\n                            ${s}\n                        </span>\n                        </div>\n                </div>\n                <div class="movie__card flip-card-back" style = 'background-image:url(${n?W+n:"./img/nowplay.png>"});'>\n                    <div class="movie__inform__box">\n                        <div class="movie__back__inner">\n                            <div id='${r}' class="container__play">\n                                <i id='${r}'class="fas fa-play"></i>\n                            </div>  \n                        </div>\n                    </div>\n                </div>\n            </div>\n            `,l.appendChild(a)}}catch{}new q(".container__play").open()}(e.cast),(new w).openPanel(),F.style.display="none"}))})),N.style.display="block"}))}))};class V{constructor(e){this.panelInner=document.querySelector(".overlay__info"),this.triggers=document.querySelectorAll(e)}open(){this.triggers.forEach((e=>{e.addEventListener("click",(()=>{(new w).openPanel(),this.trailerPanel=document.createElement("div"),this.trailerPanel.classList.add("trailer__panel"),this.trailerPanel.innerHTML="\n                    <div class='trailer__panel__player' id='trailer__panel__player'>\n                    </div>\n                    ",this.panelInner.appendChild(this.trailerPanel),new S(e.id,"trailer__panel__player").createPlayer()}))}))}}document.querySelectorAll(".wallpapers_items img").forEach((e=>{e.addEventListener("click",(()=>{!function(){const e=document.querySelector(".wallpapers__list");t(K).then((t=>{e.innerHTML="",console.log(t.results),t.results.forEach(((n,i)=>{const{backdrop_path:o,title:r}=t.results[i],l=document.createElement("div");l.classList.add("wallpaper__inner"),l.innerHTML=`\n             <img src='${W+o}'>\n             <h1>${r.length>28?r.slice(0,28)+"...":r}</h1>\n            `,e.appendChild(l)})),(new w).openPanel()}))}(),document.querySelector(".num__page").style.display="none",document.querySelector(".wallpapers__list").style.display="block"}))}));const R="api_key=84dadd31473be27d40ab4886ee4c7978",G="https://api.themoviedb.org/3",W="https://image.tmdb.org/t/p/original",X=`${G}/trending/person/day?${R}&language=en-US&page=`,Y=`${G}/person/popular?${R}&language=en-US&page=`,J="https://w7.pngwing.com/pngs/462/558/png-transparent-user-profile-computer-icons-account-others-miscellaneous-user-interface-design-head.png",K=`${G}/discover/movie?sort_by=popularity.desc&${R}&language=en-US&page=`,Q=`https://api.themoviedb.org/3/movie/top_rated?${R}&language=en-US&page=`,Z="https://thumbs.dreamstime.com/b/unknown-person-hidden-covered-masked-face-mysterious-strange-man-anonymous-character-vector-illustration-simple-163315936.jpg",ee=`${G}/search/movie?${R}&query=`,te=`${G}/discover/movie?api_key=84dadd31473be27d40ab4886ee4c7978&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=`,ne=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],ie=Math.floor(19*Math.random()+1);window.addEventListener("DOMContentLoaded",(()=>{(()=>{let e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})(),(()=>{const e=()=>{var e;e=K+`${Math.floor(9*Math.random())+1}`,fetch(e).then((e=>e.json())).then((e=>{let t=Math.floor(20*Math.random());!function(e){const{title:t,original_language:n,vote_average:i,genre_ids:o,release_date:r,popularity:l,vote_count:s,overview:a,backdrop_path:c,poster_path:d}=e;let _="";ne.forEach(((e,t)=>{o[0]===e.id&&(_=e.name)}));let u=t;t.length>20&&(u=`${t.slice(0,30)}...`),k.textContent=u,E.textContent=r.replace(/-/g,"."),L.textContent=n,M.textContent=_,x.textContent=i,C.textContent=l,P.textContent=s,A.textContent=a,T.style=`background-image: url(${W+c});\n                                    background-size: cover;\n                                    background-position: center;`,I.src=`${W+d}`}(e.results[t]),function(e){document.querySelectorAll(".loadingio-spinner-spin-wffps27ze9i").forEach((e=>{e.remove()})),i(e).then((t=>{let{key:n}=t.results[Math.floor(Math.random()*t.results.length)];if(document.querySelector("iframe#random")){const e=document.querySelector("iframe#random");e.src=`https://www.youtube.com/embed/${n}`,new b("random").createSpinner(),e.style.display="none",e.onload=()=>{new b("random").deleteSpinner(),e.style.display="inline-block"}}else new S(e,"random").createPlayer()})).catch((()=>{new b("random").createSpinner(),document.querySelector("iframe#random").style.display="none"}))}(e.results[t].id)}))};setTimeout(e,800),O.addEventListener("click",(()=>e()))})(),(()=>{const e=document.querySelector(".last__news .menu__items"),n=document.querySelector(".last__news a");function i(){t(X+`${Math.floor(9*Math.random())+1}`).then((t=>{!function(t){e.innerHTML="";for(let n=0;n<3;n++){const{name:n,known_for:i,profile_path:o,id:r}=t[Math.floor(Math.random()*t.length)],l=document.createElement("div");l.classList.add("menu__item");try{l.innerHTML=`\n                <img id='${r||608}' class='person__img to_list' src="${o?W+o:J} " alt="">\n                <div class="description">\n                    <div class="title">\n                        <a class='to_list' id='${r}' style='color: black;'>${n}</a>\n                    </div>\n                    <div class="films__wrapper">\n                        <div class="films">\n                            <a class='psn__movie' id='${i[0].id}'>\n                                1.${i[0].title?i[0].title.length>12?i[0].title.slice(0,15)+"...":i[0].title:"Not data"}\n                                        (${i[0].release_date?i[0].release_date.slice(0,4):"not data"})</a>\n                            <a class='psn__movie' id='${i[1].id}'>\n                                2.${i[1].title?i[1].title.length>12?i[1].title.slice(0,15)+"...":i[1].title:"Not data"}\n                                        (${i[1].release_date?i[1].release_date.slice(0,4):"not data"})</a>\n                            <a class='psn__movie' id='${i[2].id}'>\n                                3.${i[2].title?i[2].title.length>12?i[2].title.slice(0,15)+"...":i[2].title:"Not data"}\n                                        (${i[2].release_date?i[2].release_date.slice(0,4):"not data"})</a>\n                        </div>\n                    </div>\n                </div>\n            `}catch{l.innerHTML=`\n               <img id='' class='person__img to_list' src="${J}" alt="">\n               <div class="description">\n                   <div class="title">\n                       <a class='to_list' id='$' style='color: black;'>'not data'</a>\n                   </div>\n                   <div class="films__wrapper">\n                       <div class="films">\n                           <a class='psn__movie' id=''>'not data'}</a>\n                           <a class='psn__movie' id=''>\n                               2.'not data'</a>\n                           <a class='psn__movie' id=''>\n                               3.'not data'</a>\n                       </div>\n                   </div>\n               </div>\n           `}e.appendChild(l),document.querySelectorAll(".person__img").src=o?`${W+o}`:Z,new q(".psn__movie").open(),U(".last__news img",".last__news .to_list")}}(t.results)}))}e.innerHTML="",i(),n.addEventListener("click",(()=>i()))})(),(()=>{const e=document.querySelector(".born__today__wrapper .photo"),n=e.querySelectorAll("a"),i=e.querySelectorAll("img"),o=document.querySelector(".news__container .midle__news .header a");function r(){t(Y+`${Math.floor(9*Math.random())+1}`).then((e=>{!function(e){for(let t=0;t<5;t++){const{name:o,profile_path:r,id:l}=e[Math.floor(Math.random()*e.length)];i[t].src=`${W+r}`,i[t].id=l,n[t].textContent=`${o}`,n[t].id=l}}(e.results)}))}r(),setInterval(r,45e3),o.addEventListener("click",(()=>r()))})(),U(".to_list"),(()=>{const e=document.querySelector(".wallpapers_items"),n=e.querySelectorAll("span"),i=e.querySelectorAll("img");t(K).then((e=>{!function(e){for(let t=0;t<e.length-2;t++){const{title:o,backdrop_path:r,id:l}=e[Math.floor(Math.random()*e.length)];n[t].textContent=o.length>20?o.slice(0,20)+"...":o,n[t].id=l,i[t].src=`${W+r}`,i[t].id=l}}(e.results),console.log(e.results)}))})(),(()=>{const e=document.querySelector(".netflix__wrapper"),n=e.querySelectorAll(".photo_item a"),i=e.querySelectorAll("img"),o=document.querySelector(".news__container .midle__news .netflix__wrapper .header a");function r(){t(K+`${Math.floor(9*Math.random())+1}`).then((e=>{!function(e){for(let t=0;t<5;t++){const{title:o,poster_path:r,id:l}=e[Math.floor(Math.random()*e.length)];n[t].textContent=o.length>30?o.slice(0,30)+"...":o,n[t].id=l,i[t].src=`${W+r}`,i[t].id=l}}(e.results)})),new q(".netflix__wrapper .photo_item a",".netflix__wrapper img").open()}r(),o.addEventListener("click",(()=>{r()}))})(),(()=>{const e=document.querySelector(".top"),n=e.querySelectorAll(".raitings__img a"),i=e.querySelectorAll("img"),o=document.querySelector(".ratings .raitings__wrapper .top .header a"),r=document.querySelectorAll(".vote");function l(){t(K+`${Math.floor(9*Math.random())+1}`).then((e=>{!function(e){for(let t=0;t<6;t++){const{title:o,poster_path:l,id:s,vote_average:a}=e[Math.floor(Math.random()*e.length)];n[t].textContent=o.length>20?o.slice(0,20)+"...":o,n[t].id=s,i[t].src=`${W+l}`,i[t].id=s,r[t].textContent=a}new q(".top .ratings__items .ratings__item .raitings__img .title",".top .ratings__items .ratings__item .raitings__img img").open()}(e.results)}))}l(),o.addEventListener("click",(()=>l()))})(),(()=>{const e=document.querySelector(".weekend"),i=e.querySelectorAll(".weekend__img .title"),o=e.querySelectorAll("img"),r=e.querySelector(".weekend__wrapper .header a"),l=e.querySelectorAll("span");function s(){t(K+`${Math.floor(20*Math.random())+1}`).then((e=>{!function(e){for(let r=0;r<6;r++){let s=Math.floor(Math.random()*e.length);const{title:a,poster_path:c,id:d}=e[s];i[r].textContent=a.length>20?a.slice(0,20)+"...":a,i[r].id=d,o[r].src=`${W+c}`,o[r].id=d,n(d).then((e=>{var n=e.revenue.toString();l[r].textContent=`$${n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")}`,0==e.revenue&&(t(r),console.log("00000000000000000000"))}))}function t(r){let s=Math.floor(Math.random()*e.length);const{title:a,poster_path:c,id:d}=e[s];i[r].textContent=a.length>20?a.slice(0,20)+"...":a,i[r].id=d,o[r].src=`${W+c}`,o[r].id=d,n(d).then((e=>{var n=e.revenue.toString();l[r].textContent=`$${n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")}`,0==e.revenue&&t(r)}))}new q(".weekend__img .title",".weekend__img img").open()}(e.results)}))}s(),r.addEventListener("click",(()=>s()))})(),function(e){const n=document.querySelector(".random__wrapper"),i=document.querySelector(".info__random .title"),o=document.querySelector(".genres__random");t(e+`${Math.floor(9*Math.random())+1}`).then((e=>{console.log(e.results[0].title);const{poster_path:t,genre_ids:r,id:l}=e.results[0],s=[];r.forEach((e=>{var t;t=e,ne.forEach((e=>{e.id===t&&s.push(e.name)}))})),n.style=`background-image: url('${W+t}'); background-size: contain;`,i.textContent=e.results[0].title,o.textContent=s,n.id=`${l}`,i.id=`${l}`,new q(".random__wrapper",".random__wrapper .info__random").open()}))}(K),new o(K+ie).init(),(new B).init(),new q(".information__item").open(),new V(".watch__trailer").open(),(new a).init()}))}();