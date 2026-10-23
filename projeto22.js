/*
22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 

A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. 

Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

console.log(`Escolha o mês para pagamento...\n
    1 - Janeiro\n 
    2- Feveriro\n
    3 - Março\n
    4 - Abril\n
    5 - Maio\n
    6 - Junho\n
    7 - Julho\n
    8 - Agosto\n
    9 - Setembro\n
    10 - Outubro\n
    11 - Novembro\n
    12 - Dezembro\n`);
//dado inserido pelo usuário
const mesEscolhido = 2;

//variáveis (podem ser modificados conforme desejar)
const anuidade = 1000;
const juros = 5;

function calcularPagamento(anuidade, taxa, mes){
    if(!Number.isFinite(anuidade) || 
    !Number.isFinite(taxa) || 
    !Number.isInteger(mes) || 
    anuidade <= 0 || 
    taxa <= 0 || 
    mes < 1 || 
    mes > 12){
        return `Valor Inválido...`;
    }

    const juros = taxa / 100;
    const mesJuros = mes - 1;

    if(mes === 1){return anuidade;}

    return anuidade * (1 + juros)**mesJuros;
}

console.log(calcularPagamento(anuidade, juros, mesEscolhido));

