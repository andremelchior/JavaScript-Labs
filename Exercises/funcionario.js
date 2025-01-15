let horas = 8;
let salario = 30;
let total_sal, salario_semana;

// Cálculo do salário semanal e total
salario_semana = salario * 40;
total_sal = horas * salario;

if (horas > 160) {
    // Ajuste do salário se ultrapassar 160 horas
    total_sal = (salario_semana + salario_semana / 2) * 4;
}

console.log("O salário total é de: " + total_sal);
console.log("A carga horária é: " + horas);