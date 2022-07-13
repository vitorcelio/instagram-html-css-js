const foto = document.getElementById('foto');
const curtir = document.getElementById('curtida');
const heartLike = document.getElementById('like');

foto.addEventListener('dblclick', () => {
    curtir.classList.remove('hidden-dropdown');
    heartLike.classList.remove('bi-heart');
    heartLike.classList.add('bi-heart-fill');
    heartLike.classList.add('color-red');

    setTimeout( ()=>{
        curtir.classList.add('hidden-dropdown');
    }, 1000);
});

heartLike.addEventListener('click', ()=>{
    heartLike.classList.toggle('bi-heart-fill');
    heartLike.classList.toggle('bi-heart');
    heartLike.classList.toggle('color-red');
});