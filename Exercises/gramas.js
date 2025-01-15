let gramas = 100;
let dia = 0;

while (gramas >= 10) {
    gramas *= 0.75;
    dia += 1; // Incrementa o contador de dias
}

console.log("Foi necessário ", dia, "dias.");
