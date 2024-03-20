document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('.faq__questions__item__question');

    const heroSection  = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        }else{
            exibeElementoDaFuncao()
        }
    })
    
    buttons.forEach(function(botao) {
        botao.addEventListener('click', function(evento){
            const abaAlvo = evento.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is--active');
            removeBotaoAtivo();
            botao.classList.add('shows__tabs__button--is--active'); 
        });
    });

    questions.forEach(function(question) {
        question.addEventListener('click', abreOuFechaResposta);
    });
});

function ocultaElementosDoHeader(){
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden')
}

function exibeElementoDaFuncao(){
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden')
}

function abreOuFechaResposta(evento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = evento.target.parentNode;
    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    buttons.forEach(function(botao) {
        botao.classList.remove('shows__tabs__button--is--active');
    });
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    tabsContainer.forEach(function(tab) {
        tab.classList.remove('shows__list--is--active');
    });
}


