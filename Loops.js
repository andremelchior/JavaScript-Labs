// while (condição){codes...} *ENQUANTO*

let cont = 0;
while (cont < 5) {
    console.log(cont); // Imprime os números de 0 a 4
    cont++; //incremento
}


// do {codes...} while (condição); *CONTINUA / REPITA*

let x = 0;
do {
    //executa o código primeiro e depois testa a condição
    console.log(x); // Imprime os números de 0 a 4
    x++; //incremento
} while (x < 5);


// for (inicializador; condição-saida; incremento){codes...} *PARA*

let notas = [2, 5, 10, 20, 50, 100];
let total = 0;

for (let i = 0; i <= notas.length; i++) {
    total = total + notas[i];
    //ou: total += notas[i];
}

console.log(total);