
/*
12)​ Faça um algoritmo que calcule o fatorial de um número.
 */

let numero = 0;

function fatorial(valor){
    if(valor < 0 || !Number.isInteger(valor)){
        return `Valor Inválido...`;
    }

    if(valor === 0){
        return 1;
    }

    let acumulador;
    let contador = 1;
    let resultado = valor;

    while(contador < valor){
        acumulador = resultado * (valor - contador);
        resultado = acumulador; 
        contador++; 
    }
    return resultado;
}

console.log(fatorial(numero));
