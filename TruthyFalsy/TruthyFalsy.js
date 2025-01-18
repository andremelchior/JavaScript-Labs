//O "!!" verifica se é verdadeiro ou falso

//FALSE
const x = ""; // string vazia é falso
console.log(!!x);

const y = 0; // 0 é false
console.log(!!y);

const a = null;
const b = undefined;
console.log(!!a);
console.log(!!b);

//TRUE
const list = []; // lista vazia é true

console.log(!![]);
console.log(!list); // será false porque o "!" inverte o valor

const object = {};
console.log(!!object);

// verifica se a lista tem algum valor
if (list.length > 0) {
    console.log(list);
}