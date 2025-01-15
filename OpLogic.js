//Operadores Lógicos

// AND, OR, NOT -> E, OU, NÃO.
// AND = &&, OR = ||, NOT = !==

var sexo = "F";
var idade = "20";
var sexo2 = "F";
var idade2 = "17";
var sexo3 = "F";

// Operador E

if (sexo === "M" && idade >= 18) {
    console.log("OK");
} else {
    console.log("Erro!");
}

// Operador OU

if (sexo2 === "F" || idade2 >= 18) {
    console.log("OK");
} else {
    Console.log("Erro!");
}

// Operador NÃO
if (sexo !== "M") {
    console.log("OK");
} else {
    console.log("Erro!");
}
