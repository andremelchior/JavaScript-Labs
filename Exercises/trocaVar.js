// algoritmo que troca valores entre duas variaveis sem o uso de um auxiliar

let n1 = 1
let n2 = 5

console.log(n1 + " | " + n2);

n1 = n1 + n2
n2 = n1 - n2
n1 = n1 - n2

console.log(n1 + " | " + n2)

// ou: n1 = (n1 + n2) - (n2 = n1)