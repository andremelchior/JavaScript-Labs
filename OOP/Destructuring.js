const pessoa = {
    nome: "andre",
    sobrenome: "melchior",
    idade: "21",
    hobbies: ["jogar", "estudar", "ouvir musica"],
    pet: {
        tipo: "gato",
        nome: "hiro",
        idade: 3,
    }, //objeto dentro de outro
};

console.log(pessoa.pet.tipo);

// const nome = pessoa.nome;
// const sobrenome = pessoa.sobrenome;
// const idade = pessoa.idade;
// const hobbies = pessoa.hobbies;

//Destructuring: Faz a mesma coisa que o comentário de código acima.
const {
    nome: primeiroNome,
    sobrenome,
    idade,
    hobbies,
    pet: { nome, idade: idadeGato },
} = pessoa;
//O "nome: primeiroNome" está renomeando a variavel "nome" para "primeiroNome"
//O "pet: { nome, idade: idadeGato }" é uma variavel declarada pelo destructuring que recebe as propriedades do "pet". A parte de "idade: idadeGato" é importante para renomear o nome da variavel que recebe a propriedade, senão teria erro por já existir uma variavel chamada "idade" que referencia "pessoa" dentro desse destructuring.

console.log(idadeGato);

const study = pessoa.hobbies[1];
console.log(study); //exibe "estudar"

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);
console.log(pessoa.hobbies);

//adicionando mais propriedades que não foram definidas:
pessoa.altura = 1.75;


// ---------------------------------- //

//arrays com objetos
const tarefas = [
    {
        id: 1,
        description: "programar website",
        isCompleted: true,
    },
    {
        id: 2,
        description: "treinar",
        isCompleted: true,
    },
    {
        id: 3,
        description: "refatorar",
        isCompleted: false,
    },
];

//Destructuring
console.log(tarefas[2].isCompleted); //exibe o ultimo index e a propriedade "isCompleted".