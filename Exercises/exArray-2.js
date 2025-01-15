//Leia 20 valores de um vetor A, e exiba os valores na ordem decrescente dos índices.

let vet = [];

for (let i = 0; i <= 19; i++) {
    vet[i] = prompt("Digite o valor da posição " + i);
}

for (let i = 19; i >= 0; i--) {
    console.log("posição " + i + ":" + vet[i]);
}