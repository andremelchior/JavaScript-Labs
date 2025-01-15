function retorno() {
    console.log(
        "O usuário mora em " +
            endereco.cidade +
            " / " +
            endereco.uf +
            ", no bairro " +
            endereco.bairro +
            ", na rua " +
            endereco.rua +
            " com o nº: " +
            endereco.numero
    );
}

var endereco = {
    rua: '"Rua dos pinheiros"',
    numero: "1293",
    bairro: "Centro",
    cidade: "São Caetano",
    uf: "SP",
};

retorno();
