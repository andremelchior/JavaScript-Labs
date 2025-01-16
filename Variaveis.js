// Variaveis e constantes


// Variaveis com escopo global (var):

//1. Tipo Inteiro / Int / Interger
var idade = 16;

//2. Tipo Real / Float / Double
var peso = 48.25;

//3. Tipo Booleano / Lógico / Boolean
var humano = false;
var humano = true;

// neste caso é possivel redeclarar a variavel "humano" atribuindo valores diferente
console.log(humano); //true

//4. Tipo Cadeia / Literal / String

var texto = "text";
var num1 = "10";
var num2 = "50.34";
//independente do dado que receba, se estiver entre aspas duplas ou simples será entendido como uma string.

//5. Tipo indefinido / undefined
var indefinido; //sem atribuição
console.log(indefinido); // undefined

//6. Tipo Vazio / Null
const vazio = null;

//7. Tipo Vetor / Array
var vet = ["andre", "marcos", "junior"];
console.log(alunos[0]); // Vetor na posição 0 (primeira posição) irá exibir "andre".

//8. Tipo Objeto / Object / Orientação a Objetos / OOP
var alunos = {
    nome: "andre",
    idade: "16",
    peso: "48.25",
    humano: true,
};
console.log(alunos.nome); // Instanciamento, acessa o nome dentro do objeto alunos e exibe "andre".


// Variaveis com escopo local (let):
let nome1 = "andre";
let idade1 = 10;
let peso1 = 50.34;
// neste caso NÃO é possivel redeclarar essas variaveis como com o "var", senão daria erro.


//Constantes:

//tem a mesma finalidade da variavel, porém seu valor não pode mudar no meio do código, por isso se chama constante.

const texto2 = "text";
const inteiro = 10;
const decimal = 50.34;

const vetor = ["julia", "sara", "bianca"];

const users = {
    nome: "andré",
    idade: "21",
    peso: "65.25",
    humano: true,
};