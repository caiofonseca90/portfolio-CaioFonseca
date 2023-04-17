const data = {
    Html: `É uma linguagem de marcação usada para criar páginas da web. Ela permite que os desenvolvedores estruturem o conteúdo da página usando elementos como cabeçalhos, parágrafos, imagens, links e muito mais.`,
    Css: `É uma linguagem de estilo que permite que os desenvolvedores definam o layout, o estilo e a aparência visual das páginas da web. Ela trabalha em conjunto com o HTML, permitindo que os desenvolvedores controlem a aparência de todos os elementos em uma página.`,
    Js: `É uma linguagem de programação usada principalmente para criar interatividade em páginas da web. Ela permite que os desenvolvedores criem recursos dinâmicos e interativos, como animações, efeitos visuais e funcionalidades que respondem ao comportamento do usuário.`,
    Bootstrap: `É um framework de front-end que fornece um conjunto de ferramentas e estilos para ajudar os desenvolvedores a criar rapidamente páginas da web responsivas e elegantes. Ele é baseado em HTML, CSS e JavaScript, e é amplamente utilizado em projetos de desenvolvimento web.`,
    React: `É uma biblioteca JavaScript de código aberto usada para criar interfaces de usuário complexas e reativas em aplicações web. Ela permite que os desenvolvedores criem componentes reutilizáveis ​​e interativos que se atualizam dinamicamente em resposta às ações do usuário.`,
    Figma: ` É uma ferramenta de design de interface do usuário que permite que os designers criem e compartilhem protótipos de alta fidelidade de projetos de design. Ela é amplamente utilizada por equipes de design para colaborar e iterar em projetos de design, permitindo que os designers criem fluxos de trabalho eficientes e produtivos.`,
}

const menuiten = document.querySelector('.menu-lines');
const NavMenu = document.querySelector('.nav-menu')
const navbar = document.querySelector('.nav-container');
const menuLink = document.querySelectorAll('.nav-menu a[href^="#"]')

const iconSkills = document.querySelectorAll('.iconSkill' )
const descriptionSkill = document.querySelector('#descriptionSkill');

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



// Funcão que altera o status da descrição ao passar o mouse por cima da tecnologia
const changeDescription = () =>{
    iconSkills.forEach((icone) =>{
        icone.addEventListener('mouseover', () =>{
            
            switch (icone.id) {
                case "01html":
                    descriptionSkill.textContent = data.Html;
                    break;
                case "02css":
                    descriptionSkill.textContent = data.Css;
                    break;
                case "04js":
                    descriptionSkill.textContent = data.Js;
                    break;
                case "05bootstrap":
                    descriptionSkill.textContent = data.Bootstrap;
                    break;
                case "06react":
                    descriptionSkill.textContent = data.React;
                    break;
                case "07figma":
                    descriptionSkill.textContent = data.Figma;
                    break;
                default:
                    break;
            }
          
        })
    })
}
changeDescription();


