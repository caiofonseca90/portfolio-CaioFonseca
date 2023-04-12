const menuiten = document.querySelector('.menu-lines');
const NavMenu = document.querySelector('.nav-menu')


// menu toggle
menuiten.addEventListener('click', () =>{
    menuiten.classList.toggle('active');
    NavMenu.classList.toggle('active');
})

