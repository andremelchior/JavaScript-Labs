function somar() {
    var n1 = window.document.getElementById("txtn1");
    var n2 = window.document.getElementById("txtn2");
    var parag = document.querySelector("p.p1");

    var num1 = Number(n1.value);
    var num2 = Number(n2.value);

    var soma = num1 + num2;

    parag.innerHTML = `Resultado: A soma entre ${num1} e ${num2} é: <strong>${soma}</strong>`;
}