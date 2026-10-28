/*
33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. 

Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e 
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. 
*/

//criador de listas aleatórias
function criarLista(){
    let lista = [];
    let n = 1;
    const x = Math.floor(Math.random()*30)+1;
    while(n < x){
        lista.push(Math.floor(Math.random()*100))
        n++;
    }
    return lista;
}

//unir todas listas as criadas
function unir(listas){
    const uniao = listas.flat();
    return uniao;
}

//controlar criação de listas
function controladorDeCriação(criarListas, juntarListas){
    //variáveis utilizadas
    let acumuladorDeVetores = [];
    let criadas = [];
    let n = 1;
    const quantidade = Math.floor(Math.random()*40)+1;
    
    //criador de listas
    while(n <= quantidade){
        criadas = criarListas();
        acumuladorDeVetores.push(criadas);
        n++;
    }

    //unir todas as listas
    const resultado = juntarListas(acumuladorDeVetores);

    //retornar resultado
    return resultado;
}

//executar programa
console.log(controladorDeCriação(criarLista, unir));


///// exercício 33 /////
/* 
const vetorInteiro = [1,2,3,4];
const vetorString = ["Ameixa","Abacate","Melão","Melancia"];
const vetorDouble = [1.2, 2.2, 3.2, 4.2];
const resultado = vetorInteiro.concat(vetorString).concat(vetorDouble); 
*/


