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


//outro exemplo:

const carros = ["Mercedes", "Toyota", "Ferrari"];

for (let i; i < carros.length; i++){
    console.log(carros[i])
}// executa enquanto o "i" for menor que a quantidade de itens do array.

//faz o mesmo que o for de cima:
for (let car of carros){
    console.log(car);
}


// for each

carros.forEach(function(car, i){
    console.log(i)
    console.log(car);
});
//faz um looping com função que da o mesmo resultado dos dois últimos for.

// for in

const pessoa = {
    nome: "andre",
    idade: 21,
};

//tem mais serventia para objetos, onde ele acessa o objeto e executa nas propriedades.

for (propriedade in pessoa){
    console.log(property)
    console.log(pessoa[propriedade]);
}

//não é muito perfomatico, por isso muitos devs usam apenas em casos especificos.