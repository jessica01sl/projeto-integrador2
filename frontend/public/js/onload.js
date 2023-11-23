
const btnentrar = document.querySelector('#btnentrar');
const btnperfil = document.querySelector('#btnperfil');


const estalogado = localStorage.getItem('estalogado');
if (estalogado){
    btnentrar.style.display = 'none';
}
else{
    btnperfil.style.display = 'none';
}
