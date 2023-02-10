let titulo = document.getElementsByTagName('h1')[0];
let cor = document.getElementById('cor');

function mudarCor(color){
    titulo.style.color = color
}


function mudarTitulo(){
    titulo.innerHTML = cor.value

    setTimeout( mudarCor, 1000, cor.value)
}