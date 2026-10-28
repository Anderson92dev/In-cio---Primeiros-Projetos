/*
34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. 
*/

const texto1 = "AcbDf";
const texto2 = "BdCaf";

function tratamentoDados(valor1, valor2){
    //tratar dados
    function tratar(palavra){
        palavra = palavra
        .trim()
        .toLowerCase()
        .normalize("NFD") //Separa a letra do seu acento
        .replace(/[\u0300-\u036f]/g, ""); //Remove os sinais diacríticos

        return palavra;
    } 
    let char1 = tratar(valor1);
    let char2 = tratar(valor2);

    //transformar em array e pôr em ordem crescente
    const lista1 = Array.from(char1).sort(); 
    const lista2 = Array.from(char2).sort();

    return {lista1, lista2}
} const {lista1, lista2} = tratamentoDados(texto1, texto2);

function comparar(a, b) {
    if (a.length !== b.length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
}
console.log(comparar(lista1, lista2));