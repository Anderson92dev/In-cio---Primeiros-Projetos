
//Dados Recebidos
const lado1 = document.querySelector("#valor1");
const lado2 = document.querySelector("#valor2");
const lado3 = document.querySelector("#valor3");
const botao = document.querySelector("#botao");
const exibir = document.querySelector("#exibir");

//programa
function definirTipoTriangulo(ladoA, ladoB, ladoC){
    if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
        return `Triângulo é equilátero...`;
    } else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return`Triângulo é escaleno...`;
    } else {
        return `Triângulo é isósceles...`;
    }
}

function verificarCondicao(a, b, c, funcao){
    if((a + b) > c && (a + c) > b && (c + b) > a){
        return funcao(a, b, c);
    } return `NÃO é triângulo`;
}

//executar
botao.addEventListener("click", function(){

    //Validação - Tratamento de Erros - Segurança
    const n1 = Number(lado1.value.trim());
    const n2 = Number(lado2.value.trim());
    const n3 = Number(lado3.value.trim());

    if (
        !Number.isFinite(n1) || n1 <= 0 ||
        !Number.isFinite(n2) || n2 <= 0 ||
        !Number.isFinite(n3) || n3 <= 0 
    ) {
        exibir.textContent = "Valores inválidos!";
        return;
    }

    //execução do programa
    exibir.textContent = verificarCondicao(n1, n2, n3, definirTipoTriangulo);
});


/*
Validação 2 etapas:

    HTML >> 
<input type="number" id="valor1" min="0" step="any" required>
    min="0": estabelece zero como limite mínimo permitido pelo navegador.
    step="any": permite números decimais.
    required: declara que o campo é obrigatório.

    JS >>
Verificar se os campos foram preenchidos.
   
Converter os valores para números.

Verificar se são números finitos e estritamente maiores que zero.

Se algum valor for inválido, exibir uma mensagem e encerrar aquela execução com return.

Somente se todos forem válidos, verificar a condição de existência do triângulo e classificá-lo.

*/