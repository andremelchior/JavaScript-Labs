// IF, ELSE IF, ELSE and SWITCH CASE

// M ou F
// Masculino ou Feminino

//Syntax:
// if (condition) {
//     //codes...
// } else {
//     //codes...
// }

function retornaSexo(sexo) {
    if (sexo === "M") {
        return "Masculino";
    } else if (sexo === "F") {
        return "Feminino";
    } else {
        return "Erro!";
    }
}

var result = retornaSexo("F");
console.log(result);

//Com switch case

function retornaSexo2(sexo2) {
    switch (
        sexo2 //Não precisa de break
    ) {
        case "M":
            return "Masculino";
            break;
        case "F":
            return "Feminino";
            break;
        default:
            return "Erro!";
            break;
    }
}
var result2 = retornaSexo2("M");
console.log(result2);
