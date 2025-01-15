//document.getElementsByClassName('');seletor para id
//document.getElementById("botao"); seletor para id

let botao = document.querySelector("#botao");
let div = document.querySelector(".resultado");
botao.addEventListener("click", () => {
    let valor = Number(document.querySelector("#numero").value);
    for (let i = 1; i <= 100; i++) {
        let resposta = valor * i;
        let paragrafo = document.createElement("p");
        paragrafo.textContent = valor + "x" + i + "=" + resposta;
        div.append(paragrafo);
    }
});

//acessando o botão limpar
let limpar = document.querySelector("#limpar");

function limparResultado() {
    let i = 1;
    while (i <= 100) {
        document.querySelector("p").remove();
        i++;
    }
}

limpar.addEventListener("click", limparResultado);
