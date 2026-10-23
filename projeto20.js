/*
20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. 

Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. 
*/
console.log(`Notas disponíveis para saque:\n
    R$ 100\n
    R$ 50\n
    R$ 10\n
    R$ 1\n
    <DIGA O VALOR DE SAQUE>\n`);

//valor inserido pelo usuário
let valor = 2; 

function caixaEletronico(valor){
    //validação
    if(!Number.isInteger(valor) || valor <= 0){
        return `Valor Inválido...`;
    }

    //variáveis
    let lista = [];
    let nota100 = 0;
    let nota50 = 0;
    let nota10 = 0;
    let nota1 = 0;

    //controlador
    while(valor > 0){
        valor = calcularNotas(valor);
    }

    //calculadora
    function calcularNotas(valor){
        if(valor >= 100){
            lista.push(100);
            return valor - 100;

        } else if(50 <= valor && valor < 100){ //99
            lista.push(50);
            return valor - 50;

        } else if(10 <= valor && valor < 50){
            lista.push(10);
            return valor - 10;

        } else if (valor < 10){
            lista.push(1);
            return valor - 1;
        }
    }

    // contagem de notas e exibição
    function exibirNotas(lista){
        lista.forEach((item)=>{
            if(item === 100){
                nota100++;
            } else if (item === 50){
                nota50++;
            } else if (item === 10){
                nota10++;
            } else {
                nota1++;
            } 
        });
        
        return `NOTAS LIBERADAS: ${nota100===0?'': `${nota100} de R$ 100.`} ${nota50===0?'': `${nota50} de R$ 50.`} ${nota10===0?'': `${nota10} de R$ 10.`} ${nota1===0?'': `${nota1} de R$ 1.`}`;
    }

    //execução do código
    return exibirNotas(lista);
}

console.log(caixaEletronico(valor));

/*
function caixaEletronico(valor) {
    if (!Number.isInteger(valor) || valor <= 0) {
        return "Valor inválido.";
    }

    let notasDisponiveis = [100, 50, 10, 1];
    let resultado = [];

    for (let nota of notasDisponiveis) {
        let quantidade = Math.floor(valor / nota);

        if (quantidade > 0) {
            resultado.push(`${quantidade} nota(s) de R$ ${nota}.`);
            valor %= nota;
        }
    }

    return resultado.join(" ");
}

console.log(caixaEletronico(99));
*/






         