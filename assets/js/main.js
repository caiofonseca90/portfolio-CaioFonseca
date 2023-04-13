const data = {
    Js: 'Linguagem de programação abla blab ',
    Css: 'Folha de estilo ',
    Html: 'Linguagem de marcação',
    React: 'Frame de js',
    Bootstrap: 'Frame de Css ',
    Figma: 'Ferramenta de design',
}

const menuiten = document.querySelector('.menu-lines');
const NavMenu = document.querySelector('.nav-menu')
const navbar = document.querySelector('.nav-container');
const menuLink = document.querySelectorAll('.nav-menu a[href^="#"]')

const boxSkills = document.querySelectorAll('.container-skills-show' )

// função que leva até a section clicada pelo atributo referenciado na função " setDistanceTop"
function scrollToSection(evento) {
    evento.preventDefault(); // previne o padrao de alterar as # no link da pagina
    const distanceTop = setDistanceTop(evento.target) -80;
    nativeScroll(distanceTop);
};

function setDistanceTop(elemento) {
    const id = elemento.getAttribute("href");
    return document.querySelector(id).offsetTop;
};
// 
function nativeScroll(setDistanceTop) { 
    window.scroll({
        top:setDistanceTop,
        behavior:"smooth",
    });   
};

menuLink.forEach((link ) =>{ 
    link.addEventListener('click', scrollToSection);
});


// menu hamburguer toggle
menuiten.addEventListener('click', () =>{
    menuiten.classList.toggle('active');
    NavMenu.classList.toggle('active');
});





boxSkills.forEach((iten) => {
    iten.addEventListener('click', () =>{
        iten.getElementsByClassName(".iconSkill");
        
        
    })
})

