var nome = window.prompt("Qual é o seu nome?");

// JS aceita tags HTML
document.write(
    `Olá, <strong>${nome}</strong>! O seu nome tem ${nome.length} letras. <br/>`
);
document.write(`O seu nome em maiusculo é ${nome.toUpperCase()}<br/>`);
document.write(`Seu nome em letras minusculas é ${nome.toLowerCase()}`);

// é possivel usar funções prontas da linguagem e objetos que alteram o comportamento de uma ação.

/*
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) 'R$ 1,545.50'*/