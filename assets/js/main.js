
window.sr = ScrollReveal({ reset: true });
const data = {
    Html: `HTML é uma linguagem de marcação usada para criar páginas da web. Ela permite que os desenvolvedores estruturem o conteúdo da página usando elementos como cabeçalhos, parágrafos, imagens, links e muito mais.`,
    Css: `CSS é uma linguagem de estilo que permite que os desenvolvedores definam o layout, o estilo e a aparência visual das páginas da web. Ela trabalha em conjunto com o HTML, permitindo que os desenvolvedores controlem a aparência de todos os elementos em uma página.`,
    Js: `JavaScript é uma linguagem de programação usada principalmente para criar interatividade em páginas da web. Ela permite que os desenvolvedores criem recursos dinâmicos e interativos, como animações, efeitos visuais e funcionalidades que respondem ao comportamento do usuário.`,
    Bootstrap: `Bootstrap se trata de um framework de front-end que fornece um conjunto de ferramentas e estilos para ajudar os desenvolvedores a criar rapidamente páginas da web responsivas e elegantes. Ele é baseado em HTML, CSS e JavaScript, e é amplamente utilizado em projetos de desenvolvimento web.`,
    React: `React é uma biblioteca JavaScript de código aberto usada para criar interfaces de usuário complexas e reativas em aplicações web. Ela permite que os desenvolvedores criem componentes reutilizáveis ​​e interativos que se atualizam dinamicamente em resposta às ações do usuário.`,
    Figma: ` Figma é uma ferramenta de design de interface do usuário que permite que os designers criem e compartilhem protótipos de alta fidelidade de projetos de design. Ela é amplamente utilizada por equipes de design para colaborar e iterar em projetos de design, permitindo que os designers criem fluxos de trabalho eficientes e produtivos.`,
}
// variables menu /hamburguer
const menuiten = document.querySelector('.menu-lines');
const NavMenu = document.querySelector('.nav-menu')
const navbar = document.querySelector('.nav-container');
const menuLink = document.querySelectorAll('.nav-menu a[href^="#"]')
// variables skills
const iconSkills = document.querySelectorAll('.iconSkill' )
const descriptionSkill = document.querySelector('#descriptionSkill');

// variables contact
const inputNome = document.querySelector('.inputName');
const inputEmail = document.querySelector('.inputEmail');
const inputTopic = document.querySelector('.inputTopic');
const btnEnviar = document.querySelector('.btnSend')

const navgationLink = () =>{
    // função que leva até a section clicada pelo atributo referenciado na função " setDistanceTop"
    function scrollToSection(evento) {
        evento.preventDefault(); // previne o padrao de alterar as # no link da pagina
        const distanceTop = setDistanceTop(evento.target) -100;
        nativeScroll(distanceTop);
    };

    function setDistanceTop(elemento) {
        const id = elemento.getAttribute("href");
        NavMenu.classList.toggle('active');
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
}
navgationLink();


// menu hamburguer toggle
const menuHambuerguer = () =>{
    menuiten.addEventListener('click', () =>{
        menuiten.classList.toggle('active');
        NavMenu.classList.toggle('active');
    });
}
menuHambuerguer();

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

//efeito maquina de escrever no header
const descriptiontionWriter = () =>{
    let text1 = "Front-End Developer.";
    let text2 = "UI Designer.";
    // Velocidade de digitação (em milissegundos)
    let timeText = 100;
    // Índice do caractere atual
    let i = 0;
    function escreverTexto(texto, callback) {
        if (i < texto.length) {
            document.querySelector(".content-description").innerHTML += texto.charAt(i);
            i++;
            setTimeout(function() {
                escreverTexto(texto, callback);
            }, timeText);
        } else {
            setTimeout(function() {
                apagarTexto(callback);
            }, 1000);
        }
    }
    function apagarTexto(callback) {
        if (i >= 0) {
            let currentText = document.querySelector(".content-description").innerHTML;
            let newText = currentText.substring(0, currentText.length - 1);
            document.querySelector(".content-description").innerHTML = newText;
            i--;
            setTimeout(function() {
                apagarTexto(callback);
            }, timeText);
        } else {
            callback();
        }
    }

    function exibirFrases() {
        escreverTexto(document.querySelector('.text-h3'), function() {
            escreverTexto(text1, function() {
                apagarTexto(function() {
                    escreverTexto(text2, function() {
                        apagarTexto(function() {
                            exibirFrases();
                        });
                    });
                });
            });
        });
    }
    exibirFrases();
}
descriptiontionWriter();

// events
btnEnviar.addEventListener('click', function validationINputs(e){
    e.preventDefault()
    let nome = inputNome.value;
    let email = inputEmail.value;
    let assunto = inputTopic.value;

    switch (nome, email) {
        case nome:
            if(nome === '') {
                alert(`Por favor, preencha o campo "NOME"`);
            }if(!/^[a-zA-Z]+$/.test(nome)) {
                alert('Por favor, insira somente letras no campo de nome.');
            }
            break;
        case email:
            if(email === '') {
                alert(`Por favor, preencha o campo "E-MAIL"`);
            }if(!/\S+@\S+\.\S+/.test(email)) {
                alert('Por favor, insira um endereço de e-mail válido.');
            }
        case assunt:
        if(assunto === '') {
            alert(`Por favor, descreva o assunto`);
        }
        default:
            break;
    }
})




// Reveal

sr.reveal('.text-h3',{
    rotate:{x:10,y:5, z:1},
    duration: 1600
})
    