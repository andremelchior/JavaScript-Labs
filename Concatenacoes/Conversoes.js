//conversão para numeros
var n1 = Number(window.prompt("Digite um numero inteiro ou real:")); //string para numero (Number)
var n2 = parseInt(window.prompt("Digite outro numero inteiro:")); //string para inteiro (Int)

var soma = n1 + n2;
window.alert(`A soma de ${n1} e ${n2} é igual a: ${soma}`);
// O sinal de + pode servir tanto para soma como concatenação, porém "$" só funciona como concatenação se tiver entre crases "``".

//Esse tipo de concatenação se chama "Interpolation" que vem através de templete strings.