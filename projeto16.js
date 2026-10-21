/*
16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. 

O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. 

Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
*/

console.log("Escolha o primeiro valor:\n");
const valor1 = 1;

console.log("Escolha a operação: SOMA, SUBTRAÇÃO, DIVISÃO ou MULTIPLICAÇÃO\n");
const operacao = "multiplicacao";

console.log("Escolha o segundo valor:\n");
const valor2 = 5;

function calculadora(valor1, operacao, valor2){
    if(!Number.isFinite(valor1) || !Number.isFinite(valor2) ){
        return `Valor inválido.`;
    }

    operacao = operacao
    .trim()
    .toLowerCase()
    .normalize("NFD") //Separa a letra do seu acento
    .replace(/[\u0300-\u036f]/g, ""); //Remove os sinais diacríticos

    switch(operacao){
        case "soma":
        case "+":
            return valor1 + valor2;

        case "subtracao":
        case "-":
            return valor1 - valor2;

        case "multiplicacao":
        case "*":
            return valor1 * valor2;

        case "divisao":
        case "/":
            if (valor2 === 0) {
                 return "Não é possível dividir por zero.";
            }
            return valor1 / valor2;
        
        default:
            return `Valor inválido!`;
    }
}

console.log(`RESULTADO: ${calculadora(valor1, operacao, valor2)}`);