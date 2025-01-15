function exibeAlgo() {
    console.log("Hello World!");
}

// O interval é uma função que é executada varias vezes dentro de um intervalo.
setInterval(exibeAlgo, 1000); //1 segundo é 1000 pois é contado em ms
//

setTimeout(exibeAlgo, 5000); 
/*TimeOut é a mesma coisa que o interval, só que ele executa apenas uma vez e com uma delay de segundo*/

/* Utilizamos uma função sem parenteses (parâmetro "()") no intervalo e timeout porque ela estará sendo referenciada no intervalo/timeout, não queremos que ela seja executada, senão ela se repetira apenas uma vez, queremos apenas referenciar. */