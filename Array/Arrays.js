let cargos = [
    "Administrador",
    "Garçom",
    "Dev Jr.",
    "Adovogada",
    "Analista de Dados",
];

// Meios de acesso e alteração nas posições:

cargos[1] = "Vendedor";

cargos.push("DevOps"); //método que adiciona dinamicamente uma nova posição no array
cargos.pop() //método que exclui a última posição do array

console.log(cargos);