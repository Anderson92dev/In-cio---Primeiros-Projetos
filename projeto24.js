/*
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 

Mostre o código do aluno, suas três notas,a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

const codigo = 324345;
const n1 = 20;
const n2 = 70;
const n3 = 10;
const ponderadaMaior = 4;
const ponderadaMenor = 3;

function valores(...notas){
    const lista =  notas.sort((a, b)=>{return b - a});

    let maior = lista[0];
    let lista2 = lista.slice(1);

    return {maior, lista2};
}
const { maior, lista2 } = valores(n1, n2, n3);

function media(maior, lista, ponderada1, ponderada2){
    let resultado = 0;
    for(let i of lista){
        let acumulador = i * ponderada2;
        resultado = acumulador + resultado;
    }

    let valorMaior = maior * ponderada1;

    const mediaTotal = (valorMaior + resultado) / (ponderada1 + lista.length * ponderada2);
    return mediaTotal;
}
console.log(media(maior, lista2, ponderadaMaior, ponderadaMenor));





/* 
const teste2 = (notas) => {
    let maior = notas[0];

    for (let i of notas) {
        if (i > maior) {
            maior = i;
        }
    }
    return maior;
};
 */

//media = (maior_nota * 4 + nota1 * 3 + nota2 * 3) / 3

//return `Código do Aluno: ${codigo}, Notas: ${nota1}, ${nota2} e ${nota3}. MÉDIA: ${media}. RESULTADO: ${media >= 5 ? "APROVADO" : "REPROVADO"}`;