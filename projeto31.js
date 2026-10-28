/*
31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.
*/

const lista = ()=>{
    let n  = 1;
    let valores = [];
    while(n <= 20){
        valores.push(Math.floor(Math.random()* 200) - 100); //gerar valores negativos e positivos
        n++
    }

    return valores;
}

function verificarNegativos(lista){
    /* 
    OPÇÃO DE CÓDIGO 01
    let listaNegativos = [];

    for(let item of lista){
        if(item < 0){listaNegativos.push(item);}
    }
    let quantidadeNegativos = listaNegativos.length;

    return {listaNegativos, quantidadeNegativos}; 
    */
    
    //OPÇÃO DE CÓDIGO 2
    let listaNegativos2 = lista.filter((item)=>{ return item < 0});

    let quantidadeNegativos = listaNegativos2.length;

    return {listaNegativos2, quantidadeNegativos};
}
const {listaNegativos2, quantidadeNegativos} = verificarNegativos(lista());

console.log(`São ${quantidadeNegativos} números negativos.\nLista de Negativos: ${listaNegativos2}.`);

