/* 
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. 

    lembretes:
const resultado = Math.trunc(dividendo / divisor); => exibe o quociente inteiro.
*/

const dividendo = document.querySelector("#dividendo");
const divisor = document.querySelector("#divisor");
const botao = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

function divisao(a, b){
    const quociente = a / b;
    const resto = a % b;

    return `O resultado é ${quociente} e resto ${resto}`;
}


botao.addEventListener("click", function(){
      //validação
    if (dividendo.value.trim() === '' || divisor.value.trim() === '') {
    resultado.textContent = 'Preencha os dois campos!';
    return;
    }

    const valor1 = Number(dividendo.value.trim());
    const valor2 = Number(divisor.value.trim());

    //validação
    if(!Number.isFinite(valor1) || !Number.isFinite(valor2) || valor2 === 0){
        resultado.textContent = `Valores inválidos!`;
        return;
    }

    resultado.textContent = divisao(valor1, valor2);

});
