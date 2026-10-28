/*
30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
*/

const valores = ()=>{
    let vetor = [];
    let n = 0;
    while(n <= 20){
        vetor.push(Math.floor(Math.random()*100));
        n++;
    }
    return vetor;
}

function verificarDados(lista){
    const maior = lista.reduce((acumulador, item)=>{return item > acumulador ? item : acumulador}, lista[0])
    const menor = lista.reduce((acumulador, item)=>{return item < acumulador ? item : acumulador}, lista[0])
    //const maior1 = Math.max(...lista);
    //const menor1 = Math.min(...lista);
    return {maior, menor};
}const {maior, menor} = verificarDados(valores());

console.log(`MAIOR:${maior} e MENOR: ${menor}`);

 