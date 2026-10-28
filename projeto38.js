/*
38) ​Escreva uma função que receba dois parâmetros início e fim. 

Essa função deve imprimir todos os números ímpares que estão entre esses valores. 

Por padrão os valores devem ser 0 para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

const inicio = 100;
const fim = 0;

function verificarImpares(valor1, valor2){
    const lista = [valor1, valor2];
    const impares = [];

    let maior = Math.max(...lista);
    let menor = Math.min(...lista);

    if(maior === menor || 
        !Number.isInteger(maior) || 
        !Number.isInteger(menor) || 
        maior < 0 ||
        menor < 0) {
        return `valores inválidos...`;
    }

    for(let i = menor; i <= maior; i++){
        if(i % 2 !== 0){
           impares.push(i);
        }
    }
    return impares;
}

console.log(verificarImpares(inicio, fim));

 