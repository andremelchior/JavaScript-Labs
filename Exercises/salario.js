let salario = 0;

let nome = prompt("Digite o seu nome:");
document.writeln("<br> Seja bem vindo " + nome + " e uma boa noite.");

salario = Number(prompt("Digite seu salário:"));

if (salario < 2500) {
    salario = salario + salario * 0.102;
} else if (salario <= 3500) {
    salario = salario + salario * 0.087;
} else {
    salario = salario + salario * 0.057;
}

document.writeln(`<br> Seu salário é ${salario}`);
