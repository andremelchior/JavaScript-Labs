// JSON (JavaScript Object Notation) é um formato de arquivo aberto e de intercâmbio de dados que usa texto legível para armazenar e transmitir objetos de dados entre sistemas.


//vetor de objetos:
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

const tarefasJSON = JSON.stringify(tarefas); //convertendo o array para formato JSON e armazenando na variavel "tarefasJSON".

console.log(tarefasJSON);


//convertendo devolta:
const tarefasList = JSON.parse(tarefasJSON); //converte devolta para um array de objetos e armazena em "tarefasList". Geralmente usado quando está recebendo dados JSON do servidor.

console.log(tarefasJSON);


//se for necessário mandar dados JavaScript para um servidor, não é possivel fazer essa comunicação com listas/objetos diretos ou qualquer outra coisa JS, por isso precisamos do JSON para fazer isso.
