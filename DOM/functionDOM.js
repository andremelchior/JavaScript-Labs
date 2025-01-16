var a = window.document.getElementsByClassName("area")[0];

/*
Invés de usar dentro da div:

class="area" onclick="clicar()" onmouseenter="enter()" onmouseout="sair()"

use:
*/

a.addEventListener("click", clicar);
a.addEventListener("mouseenter", enter);
a.addEventListener("mouseout", sair);

function clicar() {
    a.innerText = "clicou!";
    a.style.background = "red";
    a.style.transition = "0.7s";
}

function enter() {
    a.innerText = "entrou!";
    a.style.background = "blue";
    a.style.transition = "0.7s";
}

function sair() {
    a.innerText = "saiu!";
    a.style.background = "green";
    a.style.transition = "0.7s";
}
