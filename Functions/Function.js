//Funções


// function sem parametros
function helloWorld(){
  console.log("Hello, World!")
}
helloWorld(); //chamada

//função com parametros que retorna resultado da soma
function soma(n1, n2) {
    var result = n1 + n2;

    return result;
}
var result = soma(1, 2);
console.log(result);


// function arrow

// utilizamos o sinal => (seta) para definir a instrução da função e o valor que ela irá retornar, por isso se chama arrow.

hello1 = () => "Hello World!";

somar = (a) => a + 2;
console.log(somar(5)); //7

//como constante e múltiplos parametros
const somar2 = (a, b) => a + b;
console.log(somar2(3, 7)); // 10


//com múltiplas linhas
const maiorNumero = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
console.log(maiorNumero(10, 20)); // 20

//com objetos
const createUser = (nome, idade) => ({ nome, idade });
console.log(createUser("Andre", 21)); // { nome: 'Andre', idade: 21 }