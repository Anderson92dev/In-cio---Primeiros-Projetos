/**
 *27)​ Construa uma função que receba como parâmetros as alturas e as taxas crescimento anuais de duas crianças.
 
 calcule se existe uma criança menor. 
 
 caso exista, se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. 
 
 utilize centímetros para as unidades de medida.
 */

const lista = [
    {   nome: "alexandre",
        altura: 160,
        taxa: 2
    },
    {   nome: "Geovana",
        altura: 155,
        taxa: 2
    },
    {   nome: "Pedro",
        altura: 110,
        taxa: 3
    }
];

function validar(lista) {
    const temInvalido = lista.some(item =>
        !Number.isInteger(item.altura) || item.altura <= 0
    );

    return temInvalido;
}

if (validar(lista)) {
    console.log("Existe valor inválido!");
} else {
    console.log("Valores verificados.");
}

//verificar alturas
function verificarAlturas(lista, funcao){
    let verificar = lista.every((item)=>{return item.altura === lista[0].altura}); //verificar se todas aturas são iguais

    if(verificar === true){
        return `Alturas iguais`;
    } else{
        //verificar menor altura
        const menor = lista.reduce((menorAtual, item)=>{return item.altura < menorAtual.altura ? item : menorAtual}, lista[0]);

        //cria lista com todos tirando o menor
        const listaAlturas = lista
        .filter((item) => {return item.altura !== menor.altura;})

        return funcao(menor, listaAlturas);
    }
} 

//calcular tempo de crescimento
function calcularCrescimento(menorAltura, todasAlturas){
    for(let item of todasAlturas){
        if(item.taxa < menorAltura.taxa){
            let anos = 0;
            let alturaDoMenor = menorAltura.altura;
            let alturaDoMaior = item.altura;

            while(alturaDoMenor <= alturaDoMaior){
                alturaDoMaior = alturaDoMaior + item.taxa;
                alturaDoMenor = alturaDoMenor + menorAltura.taxa;
                anos++;
            }

            console.log(`Existe criança menor com altura com ${(menorAltura.altura)/100} m de altura. Ultrapassará a maior em ${anos} anos.`);
        } else {
            console.log(`A criança é menor, porém, nunca crescerá mais do que a maior...`);
        }   
    }
}

verificarAlturas(lista, calcularCrescimento);






    

  
