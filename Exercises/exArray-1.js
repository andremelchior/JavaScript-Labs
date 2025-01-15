//Leia 10 valor de um vetor A do tipo inteiro e 10 valores de um vetor B do tipo inteiro, crie um vetor C de 10 posições cujo o valor é a soma dos vetores A e B.

let A = [];
let B = [];
let C = [];

for (let i = 0; i <= 9; i++) {
    A[i] = Number(prompt("Digite o valor do vetor A na posição " + i));
    B[i] = Number(prompt("Digite o valor do vetor B na posição " + i));
    C[i] = A[i] + B[i];
    
    console.log("O Valor do vetor C é " + C[i]);
}
