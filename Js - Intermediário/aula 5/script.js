let n1 = document.getElementById("n1");
let calcular = document.getElementById("calcular")
let resultado = document.getElementById("resultado")

function calculo() {
    
    let calc = Math.PI * (n1.value * n1.value );
    console.log(calc)
    resultado.innerText = ("A área arredondada do raio: " + n1.value + " é: " + calc)
}

calcular.addEventListener("click", calculo)