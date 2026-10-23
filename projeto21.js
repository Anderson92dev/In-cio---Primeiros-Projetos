/*
21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
1) crianças com menos de 10 anos pagam R$80; 
2) conveniados com idade entre 10 e 30 anos pagam R$50; 
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; 
4) conveniados acima de 60 anos pagam R$130
*/

const idadeDoUsuario = 100;
const valorFixo = 100;

function calcularPlano(idade, valorFixo){
    if(!Number.isInteger(idade) || idade < 0){
        return `Valor inválido...`;
    }

    const adicional = verificarAdicional(idade);

    function verificarAdicional(idade){
        if(idade < 10){ return 80;}
        if(10 <= idade && idade <= 30){return 50;}
        if(30 < idade && idade <= 60){return 95;}
        if(60 < idade){return 130;}
    }

    return valorFixo + adicional;
}

console.log(calcularPlano(idadeDoUsuario, valorFixo))



