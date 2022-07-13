const body = document.getElementsByTagName('body')[0];
//------------ ITENS DO MENU ------------
const input = document.getElementById('pesquisar');
const icone = document.getElementById('icone-pesquisa');
const dropdown = document.getElementsByClassName('body-dropdown')[0];
const profile = document.getElementById('profile');
const imgProfile = document.getElementById('img-profile');
const heart = document.getElementById('heart');
const notificacoes = document.getElementById('notificacoes');
const publicar = document.getElementById('publicar');
const modalPublicar = document.getElementById('modal-publicar');
const fecharPublicar = document.getElementById('fechar-modal-publicar');
let botaoSeguir = document.querySelectorAll('button.seguir');

if (!icone.classList.contains('hidden-dropdown')) {
    input.addEventListener('click', () => {
        icone.classList.add('hidden-dropdown');
    });
}

function removeHidden() {
    removeHiddenDrop();
    removeHiddenNotificacao();
}

function removeHiddenIcon() {
    icone.classList.remove('hidden-dropdown');
}

function removeHiddenNotificacao() {
    if (!notificacoes.classList.contains('hidden-dropdown')) {
        notificacoes.classList.add('hidden-dropdown');
        heart.classList.toggle('bi-heart');
        heart.classList.toggle('bi-heart-fill');
    }
}

function removeHiddenDrop() {
    if (!dropdown.classList.contains('hidden-dropdown')) {
        dropdown.classList.add('hidden-dropdown');
        imgProfile.classList.toggle('img-profile');
    }
}

profile.addEventListener('click', () => {
    dropdown.classList.toggle('hidden-dropdown');
    imgProfile.classList.toggle('img-profile');
});

heart.addEventListener('click', () => {
    notificacoes.classList.toggle('hidden-dropdown');
    heart.classList.toggle('bi-heart');
    heart.classList.toggle('bi-heart-fill');
});

botaoSeguir.forEach((botaoSeguir) => {
    botaoSeguir.addEventListener('click', () => {
        botaoSeguir.classList.toggle('seguir');
        botaoSeguir.classList.toggle('seguindo');
        
        if (botaoSeguir.innerHTML === 'Seguir') {
            botaoSeguir.innerHTML = 'Seguindo';
        } else {
            botaoSeguir.innerHTML = 'Seguir';
        }
    });
});

publicar.addEventListener('click', ()=>{
    modalPublicar.classList.remove('hidden-dropdown');
});

fecharPublicar.addEventListener('click', ()=>{
    modalPublicar.classList.add('hidden-dropdown');
});
