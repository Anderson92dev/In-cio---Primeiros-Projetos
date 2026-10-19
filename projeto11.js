/*
11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.

Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a mensagem.
*/

/* 
a1 = 4 + 4 * 0 = 4 = 4 * 1 
a2 = 4 + 4 * 1 = 8 = 4 * 2
a3 = 4 + 4 * 2 = 12 = 4 * 3
a4 = 4 + 4 * 3 = 16 = 4 * 4
an = 4 + 4 * (n -1) = 4 * n
900 = 4 + 4 * (n - 1) = 4 + 4n -4 = 4n => 900 = 4n => 900 / 4 = n
*/

const ano = 0;

function calcularBissexto(n){
    //validação
    if((n <= 0) || !Number.isInteger(n)){
        return  `Valor Inválido...`;
    }

    //execução
    if(n % 100 === 0){
        return (n % 400 === 0) ? `Bissexto`:`Não é Bissexto`;

    } else {
       return n % 4 === 0 ? `É bissexto` : `Não é bissexto`;
    }
}

console.log(calcularBissexto(ano));
