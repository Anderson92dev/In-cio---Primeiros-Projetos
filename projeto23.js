/*
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 

Mostre o código do aluno, suas três notas,a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. 

Repita a operação até que o código lido seja negativo.
*/
console.log(`Diga o código do aluno e as notas:\n`);
//dados inseridos pelo usuário
const codigo = 324345;
const n1 = 2;
const n2 = 7;
const n3 = 1;
console.log(`Escolha o maior peso e o menor:\n`);
const ponderadaMaior = 4;
const ponderadaMenor = 3;

//validacao
function validar(...verificar){
    for(let i of verificar){
        if(i > 10 || i < 0 || !Number.isInteger(i)){ return `Valor Inválido!`;}
    }
} 
const erro = validar(n1, n2, n3, ponderadaMaior, ponderadaMenor);
//decisão executar código ou lançar erro
if (erro) {
    console.log(erro);
} else {
    const { maior, lista2 } = verificarMaiorNota(n1, n2, n3);

    const media = calcularMedia(
        maior, lista2, ponderadaMaior, ponderadaMenor
    );

    console.log(exibirResultado(codigo, n1, n2, n3, media));
}
 
//programa
function verificarMaiorNota(...notas){
    const lista =  notas.sort((a, b)=>{return b - a});
    
    let maior = lista[0];
    let lista2 = lista.slice(1);

    for(let i of lista2){
        if(i === maior){
            maior = maior + i;
        }
    }

    return {maior, lista2};
}

function calcularMedia(maior, lista, ponderada1, ponderada2){
    let resultado = 0;
    for(let i of lista){
        let acumulador = i * ponderada2;
        resultado = acumulador + resultado;
    }

    let valorMaior = maior * ponderada1;

    const mediaTotal = (valorMaior + resultado) / (ponderada1 + lista.length * ponderada2);

    return mediaTotal;
}

function exibirResultado(codigo, valor1, valor2, valor3, media){
    return `Código do Aluno: ${codigo}, Notas: ${valor1}, ${valor2} e ${valor3}. MÉDIA: ${media}. RESULTADO: ${media >= 5 ? "APROVADO" : "REPROVADO"}`;
}


