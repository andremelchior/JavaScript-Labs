function calc() {
    var parag = document.querySelector("p.par");
    var vel = document.getElementById("vel");

    var velo = Number(vel.value);

    if (velo > 60) {
        parag.innerText = `${velo}km/h ultrapassa a velocidade permitida, multado!`;
    } else {
        parag.innerHTML = `<p>${velo}km/h está dentro do limite permitido. `;
        parag.innerHTML +=
            "Você está liberado, não será multado.</p>";
    }
}
