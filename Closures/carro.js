let carro = (function () {
    let velocidade = 0;
    let estadoCarro = "Desligado";
    let tanque = 5;

    function statusCarro(status) {
        return status;
    }

    function acelerar(acelera) {
        velocidade += acelera;
    }

    let abastecimento = (litros) => (tanque += litros);

    return {
        ligarCarro() {
            estadoCarro = "Ligado!";
        },
        desligarCarro() {
            estadoCarro = "Desligado!";
        },
        exibirStatus() {
            console.log(statusCarro(estadoCarro));
        },
        consultarVelocidade() {
            return velocidade;
        },
        aumentarVelocidade() {
            acelerar(10);
        },
        reduzirVelocidade() {
            acelerar(-10);
        },
        abastecer() {
            abastecimento(20);
        },
        consultarTanque() {
            return tanque;
        },
    };
})();

carro.ligarCarro();
carro.exibirStatus();
console.log("Status da velocidade: " + carro.consultarVelocidade() + "km/h");

carro.aumentarVelocidade();
console.log("Status da velocidade: " + carro.consultarVelocidade() + "km/h");

carro.reduzirVelocidade();
console.log("Status da velocidade: " + carro.consultarVelocidade() + "km/h");

console.log("Status Tanque: " + carro.consultarTanque() + " litros");
carro.abastecer();
console.log("Status Tanque: " + carro.consultarTanque() + " litros");

carro.desligarCarro();
carro.exibirStatus();
