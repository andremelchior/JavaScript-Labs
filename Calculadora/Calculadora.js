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

function sair(){
    if (confirm("Saindo do programa...")) {
        close();
    } else {
        close();
    }
}

let op = window.prompt("Deseja fazer uma conta? (S) SIM | (n) NÃO | (Q) SAIR");

while (op === "S" || op === "s") {
    let num1 = Number(window.prompt("Digite o primeiro número: "));
    let num2 = Number(window.prompt("Digite o segundo número: "));

    let operacao = window.prompt(
        "Digite a operação que deseja realizar: (1) SOMA | (2) SUBTRAÇÃO | (3) MULTIPLICAÇÃO | (4) DIVISÃO | (Q) SAIR"
    );

    switch (operacao) {
        case "1":
            window.alert(
                "A soma de " + num1 + " e " + num2 + " é: " + soma(num1, num2)
            );
            break;
        case "2":
            window.alert(
                "A subtração de " +
                    num1 +
                    " e " +
                    num2 +
                    " é: " +
                    subtracao(num1, num2)
            );
            break;
        case "3":
            window.alert(
                "A multiplicação de " +
                    num1 +
                    " e " +
                    num2 +
                    " é: " +
                    multiplicacao(num1, num2)
            );
            break;
        case "4":
            window.alert(
                "A divisão de " +
                    num1 +
                    " e " +
                    num2 +
                    " é: " +
                    divisao(num1, num2)
            );
            break;
        case "Q":
            op = "Q";
            break;
        case "q":
            op = "Q";
            break;
        default:
            window.alert("Erro!");
            break;
    }
    if(op === "S" || op === "s"){
        op = window.prompt("Deseja fazer outra conta? (S) SIM. (n) NÃO.");
    } else if(op === "Q"){
        window.alert("Ok! você optou por não concluir a conta.");
    } else {
        window.alert("Erro!");
    }
}

if (op === "n" || op === "N" || op === "Q") {
    sair();
} else {
    window.alert("Erro! Esta é uma opção incorreta, tente novamente.");
}