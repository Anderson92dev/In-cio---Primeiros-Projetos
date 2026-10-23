/*
13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
*/
const diaEscolhido = 5;

function calcularDiaSemana(data){
    const sabado = 7;
    const domingo = 1;

    function criarLista(sabado, domingo){
        //variaveis
        let n = 1;
        const valores = [];
        valores.push(domingo);
        valores.push(sabado);

        //criar lista
        while(n <= 4){
            let acumulador1 = domingo + 7;
            let acumulador2 = sabado + 7;
            domingo = acumulador1;
            sabado = acumulador2;
            valores.push(domingo);
            valores.push(sabado);
            n++;
        }
        return valores;
    }
    const lista = criarLista(sabado, domingo);

    function comparar(referencia, dias){
        if(referencia < 1 || 
            referencia > 31 || 
            !Number.isInteger(referencia)){
                return "Valor inválido!";
        }

        //comparar datas
        const diaEncontrado = dias.some((dia)=>{return dia === referencia});
        const opcao = diaEncontrado === true ? 1 : 2;

        return opcao;
    }
    const resultado = comparar(data, lista);

    switch(resultado){
        case 1:
            return "fim de semana";
        case 2: 
           return "dia de semana";

        default:
            return "valor inválido";

    }
}
console.log(calcularDiaSemana(diaEscolhido));










