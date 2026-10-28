/*
36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. 

Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. 

A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.  
*/

let lista = [];
let valor = Math.floor(Math.random()*10)+1;

let n = 1;
while(n <= 5){
    lista.push(Math.floor(Math.random()*20)+1);
    n++;
}

function multiplicarLista(lista, valor){
   return lista.map(item=>item * valor);
}

function multiplicarSeMaior5(lista, valor){
    return lista
        .filter(item => item > 5)
        .map(item => item * valor);
}

const vetores = multiplicarLista(lista, valor);
console.log(vetores);

const verificador = vetores.every((item)=>{return item>5});
if(verificador){console.log(multiplicarSeMaior5(lista, valor))}







