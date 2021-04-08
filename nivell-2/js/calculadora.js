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
        case "divisio":
            if (valor2 == 0) {
                resposta = "No es pot dividir per 0";
            } else{
                resposta = valor1 / valor2;
            }
            break;
    }
    return resposta;
}

//Comprovació de la divisió 
console.log(calculadora("divisio", 30, 5));

//Comprovació divisió amb denominador 0
console.log(calculadora("divisio", 30, 0));
