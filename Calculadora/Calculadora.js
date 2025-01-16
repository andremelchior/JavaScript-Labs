function soma(n1, n2) {
    return n1 + n2;
}

function subtracao(n1, n2) {
    return n1 - n2;
}

function multiplicacao(n1, n2) {
    return n1 * n2;
}

function divisao(n1, n2) {
    return n1 / n2;
}

let op = window.prompt("Deseja fazer uma conta? (S) SIM. (n) NÃO.");

while (op === "S" || op === "s") {
    let num1 = Number(window.prompt("Digite o primeiro número: "));
    let num2 = Number(window.prompt("Digite o segundo número: "));

    let operacao = Number(
        window.prompt(
            "Digite a operação que deseja realizar: (1) SOMA | (2) SUBTRAÇÃO | (3) MULTIPLICAÇÃO | (4) DIVISÃO."
        )
    );

    switch (operacao) {
        case 1:
            window.alert(
                "A soma de " + num1 + " e " + num2 + " é: " + soma(num1, num2)
            );
            break;
        case 2:
            window.alert(
                "A subtração de " +
                    num1 +
                    " e " +
                    num2 +
                    " é: " +
                    subtracao(num1, num2)
            );
            break;
        case 3:
            window.alert(
                "A multiplicação de " +
                    num1 +
                    " e " +
                    num2 +
                    " é: " +
                    multiplicacao(num1, num2)
            );
            break;
        case 4:
            window.alert(
                "A divisão de " +
                    num1 +
                    " e " +
                    num2 +
                    " é: " +
                    divisao(num1, num2)
            );
            break;
        default:
            window.alert("Erro!");
            break;
    }
    op = window.prompt("Deseja fazer outra conta? (S) SIM. (n) NÃO.");
}

if (op === "n" || op === "N") {
    if (confirm("Saindo do programa...")) {
        close();
    } else {
        close();
    }
} else {
    window.alert("Erro! Esta é uma opção incorreta, tente novamente.");
}