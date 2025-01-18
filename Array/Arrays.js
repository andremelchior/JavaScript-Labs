let cargos = [
    "Administrador",
    "Garçom",
    "Dev Jr.",
    "Adovogada",
    "Analista de Dados",
];

// Meios de acesso e alteração nas posições:

cargos[1] = "Vendedor"; //Reassinalando (atribuindo)

cargos.push("DevOps"); //método que adiciona dinamicamente uma nova posição no array
cargos.unshift("Engenheiro de Software"); //método que adiciona uma nova posição no primeiro index do array
cargos.pop() //método que exclui a última posição do array

const indexOffCargos = cargos.indexOf("Dev Jr."); //busca o index de um array de acorco com o dado que é passado para o método
console.log(indexOffCargos);


const ordenaCargos = cargos.sort(); //ordena alfabeticamente
console.log(ordenaCargos);


console.log(cargos.length); //length retorna quantidade de itens do array 
console.log(cargos);

console.log(typeof cargos); //typeof verifica o tipo da variavel
const cargosIsArray = Array.isArray(cargos) //verifica se "cargos" é uma variavel do tipo array.
console.log(cargosIsArray); //true