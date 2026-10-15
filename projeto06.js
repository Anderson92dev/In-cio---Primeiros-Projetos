/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 

A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
 

juros simples => M = C + J ou (M = C * (1 + i * t)\)

juros compostos => M = C*(1+i)^{t})
*/

const capital = document.querySelector("#capital");
const juros = document.querySelector("#juros");
const tempo = document.querySelector("#tempo"); 
const botao = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

function jurosSimples(capital, juros, tempo){
    const montante = capital * (1 + juros * tempo);

    return `O montante dos juros simples é: ${montante.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })}`
}

function jurosCompostos(capital, juros, tempo){
    const montante = capital * ((1 + juros)** tempo);

    return `O montante dos juros compostos é: ${montante.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })}`  
}

//execução
botao.addEventListener("click",function(){
    if(capital.value.trim() === "" || 
        juros.value.trim() === "" || 
        tempo.value.trim() === ""){
        resultado.textContent = `Valores vazios!`;
        return;
    }

    const C = Number(capital.value.trim()); 
    const J = Number(juros.value.trim()); 
    const T = Number(tempo.value.trim()); 
    const i = J / 100;

    if(T <= 0 || 
        J <= 0 ||
        C <= 0 ||  
        !Number.isFinite(C) || 
        !Number.isFinite(J) || 
        !Number.isFinite(T) || 
        !Number.isInteger(T)){
        resultado.textContent = `Valores Inválidos!`;
        return;
    }

    
    resultado.textContent = `${jurosSimples(C, i, T)}\n${jurosCompostos(C, i, T)}`;
    
});





