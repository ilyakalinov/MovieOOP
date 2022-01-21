const mobMenu = () => {
    const menu = document.querySelector('.topnav'),
        btnMenuMob = document.querySelector('.mobMenu');
    function openMobMenu() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
            menu.style.width = '50px'
        } else {
          x.style.display = "block";
          menu.style.width = '400px'
        }
      }
      btnMenuMob.addEventListener('click', (e) => {
          const t = e.target;
          if(t.parentElement == btnMenuMob || t == btnMenuMob) {
            openMobMenu()
          }
      })
}

export default mobMenu;