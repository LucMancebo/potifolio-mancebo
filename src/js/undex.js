/* 
objetivos

1 - abrir mais projetos com o clique do usuario;
2 - identificar clique no botão;
3 - adicionar classe ativo nos projetos escondidos
4 - esconbder o botão.

*/
const botaomostrarmais = document.querySelector('.btn-mostrar-mais');
const projetosinativos = document.querySelectorAll('.projeto:not(.ativo)');


botaomostrarmais.addEventListener('click', () => {
    mostrarmaisprojetos();
    esconderbotao();
});

function esconderbotao() {
    botaomostrarmais.classList.add('remover');
}

function mostrarmaisprojetos() {
    projetosinativos.forEach(projetoinativo => {
        projetoinativo.classList.add('ativo');
    });
}

