/* 
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. 

    lembretes:
const resultado = Math.trunc(dividendo / divisor); => exibe o quociente inteiro.
*/

const dividendo = document.querySelector("#valor1");
const divisor = document.querySelector("#valor2");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

function divisao(a, b){
    const quociente = a / b;
    const resto = a % b;

    return `O resultado é ${quociente} e resto ${resto}`;
}

console.log("ameixa")

/* botao.addEventListener("click", function(){
    const valor1 = Number(dividendo.value.trim());
    const valor2 = Number(divisor.value.trim());

    resultado.textContent = `funcionando...`;

}); */
