let operador;
let valor1;
let valor2;
let resposta;
function calculadora(operador, valor1, valor2) {
    switch (operador) {
        case "suma":
            resposta = valor1 + valor2;
            break;
        case "resta":
            resposta = valor1 - valor2;
            break;
        case "producte":
            resposta = valor1 * valor2;
            break;
    }
    return resposta;
}

//Proves amb diferents valors
console.log(calculadora("resta", 30, 12));
console.log(calculadora("suma", 15, 4));
console.log(calculadora("producte", 6, 6));
