//Faça um algoritmo com um número armazenado na memória, se ele for maior que 50 subtraia 20 desse número. Se for menor ou igual, divida por 4 e exiba o resultado final.

let num = 15;

if (num > 50) {
    num = num - 20;
    console.log("Resultado de número maior que 50: " + num);
} else if (num <= 50) {
    num = num / 4;
    console.log("Resultado de número menor ou igual que 50: " + num);
} else {
    console.log("Erro!");
}