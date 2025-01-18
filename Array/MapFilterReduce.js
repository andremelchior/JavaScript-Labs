// Map
const numbers = [1, 2, 3, 4, 5];

const multiplicaPorDois = numbers.map(function(number){
    return number * 2;
}); //cria um novo array para adicionar os resultados de multiplica por cada indice de "number".

console.log(multiplicaPorDois) //resultado da multiplicação.

// Filter
const ages = [6, 15, 34, 12, 21, 17];

const evenAges = ages.filter(function(age){
    return age % 2 === 0; //retorna par se o resto da divisão por 2 for 0.
}); //filtra e cria um novo array para adicionar os resultados de idades pares por cada indice de "ages".

console.log(evenAges); //resultado do filtro para verificar números pares.


// Reduce
const sumAges = ages.reduce(function(age, accumulator){
    return accumulator + age;
}, 0);//setar valor inicial
//esse método está com uma função que reduz todos os itens de "ages" para um único número, que seria a soma de todos os indices.

console.log(sumAges); //resultado da redução de itens feita por soma.