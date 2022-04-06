let bt = document.getElementById('bt');

bt.addEventListener('mouseout', sair);
bt.addEventListener('mouseenter', entrar);

function entrar(){
    bt.style.background = "#151D2E";
}

function sair(){
    bt.style.background = '#008D1E';
}