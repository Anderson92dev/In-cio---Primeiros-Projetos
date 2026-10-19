/*
10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

const valor = 30;

function verificar(valor){
    if(!Number.isInteger(valor)){
        return `Valor inválido`;
    }

    return valor % 3 === 0;
}
console.log(verificar(valor));



