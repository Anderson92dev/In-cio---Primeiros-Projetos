const base = document.querySelector("#valor1");
const expoente = document.querySelector("#valor2");
const botao = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

function potencializar(base, expoente){
    return `Resultado: ${base}<sup>${expoente}</sup> = ${base ** expoente}`;
}

/* function potenciacao(base, expoente){
    let acumulador = 1;
        for(let i = 1; i <= expoente; i++){
            acumulador = acumulador * base;
        }
    console.log(acumulador);
}

function potencia(base, expoente){
    let acumulador = 1;
    let i = 1;
    while(i <= expoente){
        acumulador = acumulador * base;
        i++;
    }
    console.log(acumulador);
} */

botao.addEventListener("click", function(){
    const n1 = Number(base.value.trim());
    const n2 = Number(expoente.value.trim());

    //validação
    if (base.value.trim() === '' || expoente.value.trim() === '') {
    resultado.textContent = 'Preencha os dois campos!';
    return;
}
    //validação
    if(!Number.isFinite(n1) || !Number.isFinite(n2) || n2 < 0){
        return resultado.textContent = `Valores inválidos!`;
    }

    //execução
    resultado.innerHTML = potencializar(n1, n2);
})

