let th = document.getElementById("texto");
let pergunta = document.getElementById("pergunta");
let resposta = document.getElementById("resposta");
let enviar = document.getElementById("enviar");

function mouseenter() {
    this.innerText = "Pesquisa aí"
}
function mouseout() {
    this.innerText = "Tá enrolando porque? Pesquisa logo"
}
function pesquisar() {
    th.innerHTML = pergunta.value;
}
th.addEventListener("mouseenter", mouseenter);
th.addEventListener("mouseout", mouseout);
enviar.addEventListener("click", pesquisar)