// Document Object Model (DOM) é um facilitador para acessarmos elementos diretamento para o JavaScript

//Métodos de seleção de elementos DOM:

var corpo = document.body;
var p1 = document.getElementsByTagName("p")[0]; //[0] seleciona o primeiro <p>.
// document.writeln("texto: " + p1.innerText)

p1.style.color = "red"; //muda cor do texto
corpo.style.background = "black"; //muda cor do fundo do corpo de pagina

document.writeln("texto: " + p1.innerHTML); //Vai o texto com a formatação de tags HTML, diferente de innerText que é apenas o texto.

//"getElementsBy" é um padrão de comando para mais de 1 elemento, exceto quando utilizamos "[]" com o numero que referencia a hierarquia de elementos.

//O comando pode pegar varias coisas como: TagName, Name, Class e Id, basta colocar no final.

var d = window.document.querySelector("div.msg");
d.style.color = "green";

//querySelector funciona da mesma formas porém mais recente e recomendavel de usar.