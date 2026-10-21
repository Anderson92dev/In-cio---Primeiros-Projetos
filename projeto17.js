/*
17) Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido
*/

console.log("Escolha um dos planos: A, B ou C\n");
const plano = "Ç";

console.log("Diga o salário do funcionário:\n");
const salario = 5000;

function calcular(plano, salario){
    if(salario < 1300 || salario > 10000 || !Number.isFinite(salario)){
        return `Valor Inválido...`;
    }

    plano = plano
    .trim()
    .toLowerCase()
    .normalize("NFD") //Separa a letra do seu acento
    .replace(/[\u0300-\u036f]/g, ""); //Remove os sinais diacríticos

    switch(plano){
        case "a":
            return salario * (1 + 0.10);
        
        case "b":
            return salario * (1 + 0.15);
        
        case "c":
            return salario * (1 + 0.20);
        
        default:
            return `valor Inválido!`;
    }
}
console.log(`SALÁRIO ATUALIZADO: ${calcular(plano, salario)}`)