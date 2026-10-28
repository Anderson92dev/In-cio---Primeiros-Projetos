/*
32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

//criador de listas aleatórias
const lista = ()=>{
    let valores = [];

    let n = 1;
    const x = Math.floor(Math.random()*30) + 1; //determina, aleatoriamente, quantos valores criar.
    while(n <= x){
        valores.push(Math.floor(Math.random()*100));
        n++;
    }
    return valores;
}

//calcular media
function calcularMedia(lista){
    const total = lista.reduce((acumulado, item)=>{return item + acumulado}, 0); //soma todos os valores
    return total / lista.length; //calcula a media
}

//exibir resultado
console.log(calcularMedia(lista()));





