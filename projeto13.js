/*
13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. 
*/
let n = 1;
let domingo = 1;
let sabado = 7;
let lista_domingo = [1];
let lista_sabado = [7];

const diaEscolhido = 3;

//calcular fins de semana
while(n <= 4){
    acumulador1 = domingo + 7;
    acumulador2 = sabado + 7;
    domingo = acumulador1;
    sabado = acumulador2;
    // console.log(`dia de domingo: ${domingo}`);
    lista_domingo.push(domingo);
    lista_sabado.push(sabado);
    n++; 
}
const lista_completa = lista_domingo.concat(lista_sabado);

const comparar = lista_completa.find((item, dia) => {return item === dia});

if(){}