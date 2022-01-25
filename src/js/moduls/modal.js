document.querySelector(".modal-btn").addEventListener('click', function(e){
  e.preventDefault()
  document.querySelector(".overlay__modal").classList.add("active__modal");
  document.querySelector(".modal").classList.add("active__modal");
});

document.querySelector(".overlay__modal").addEventListener('click', () => {
    document.querySelector(".modal").classList.remove("active__modal");
  document.querySelector(".overlay__modal").classList.remove("active__modal");
});

document.querySelector(".overlay__modal").click( function(){
  document.querySelector(".modal").removeClass("active__modal");
  document.querySelector(".overlay__modal").removeClass("active__modal");
});

document.querySelectorAll(".modal .options a").forEach(btn => {
    btn.addEventListener('click', function(e){
        console.log(document.querySelectorAll(".modal .options a"))
        if(!e.target.classList.contains("active__modal")){
            e.target.parentElement.querySelector("a.active__modal").classList.remove("active__modal")
            e.target.classList.add("active__modal")
            e.target.parentElement.parentElement.querySelector(".wrapper").classList.toggle("switch")
        }
      });
})