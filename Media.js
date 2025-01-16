let n1 = Number(window.prompt("Digite a primeira nota: "));
let n2 = Number(window.prompt("Digite a segunda nota: "));

let media = (n1 + n2) / 2;

window.alert("A sua média é: " + media);

if (media >= 5) {
    window.alert("Aprovado!");
} else {
    window.alert("Reprovado!");
}