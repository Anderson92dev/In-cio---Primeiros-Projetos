/*
39) ​Crie uma função que receba dois vetores de igual tamanho. 

Troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. 

Faça a troca sem utilizar uma variável auxiliar.
*/

const vetorA = [1,2,3,4];
const vetorB = [5,6,7,8];

function trocarValores(lista1, lista2) {
    for (let i = 0; i < lista1.length; i++) {
        [lista1[i], lista2[i]] = [lista2[i], lista1[i]]; //solução enxuta
    }
}

trocarValores(vetorA, vetorB);

console.log(vetorA); // [5, 6, 7, 8]
console.log(vetorB); // [1, 2, 3, 4]

/// minha solução inicial ///
/* function trocarValores(lista1, lista2){
    //variaveis
    let n = lista1.length;
    let t = n;
    let i = 0;
    let indice = 0;

    //adicionar novos valores
    while(i < n){
        lista2[t] = lista1[i];
        lista1[t] = lista2[i];
        i++;
        t++;
    }

    //apagar valores antigos
    while(indice < n){
        lista1.shift();
        lista2.shift();
        indice++;
    }

    //retornar
    console.log(`FIM... ${lista1} e ${lista2}`);
}
trocarValores(vetorA, vetorB); */

