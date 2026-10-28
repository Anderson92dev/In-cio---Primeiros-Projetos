/*
29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações. 
*/

//criar vetor
const criarLista = ()=>{
    let n = 1;
    let lista = [];

    while(n <= 20){
        lista.push(Math.floor(Math.random()*100));
        n++;
    }

    return lista;
}

//verificar dados
function verificarIntervalo(lista){
    let dentro_intervalo = 0;
    let fora_intervalo = 0;

    for(let item of lista){
        if(item >= 10 && item <= 20){
            dentro_intervalo++;
        } else {
            fora_intervalo++;
        }
    }

    return `São ${dentro_intervalo} valores no intervalo [10, 20] e ${fora_intervalo} não incluídos...\n Lista completa: ${lista}.`;
}

//executar e exibir dados
console.log(verificarIntervalo(criarLista()));


