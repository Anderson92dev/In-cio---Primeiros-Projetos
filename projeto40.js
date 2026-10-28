/*
40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada: 

de 0,0 a 4,9 seja atribuído o conceito D, 

de 5,0 a 6,9 seja atribuído o conceito C, 

de 7,0 a 8,9 o conceito B 

de 9,0 a 10,0 o conceito A.
*/

const notas = [1.1, 5.5, 7.5, 9.5];

function verificar(lista){
    for(let nota of lista){
        if(9.0 <= nota && nota <= 10.0){console.log(`Conceito A: ${nota}`);}
        if(7.0 <= nota && nota <= 8.9){console.log(`Conceito B: ${nota}`);}
        if(5.0 <= nota && nota <= 6.9){console.log(`Conceito C: ${nota}`);}
        if(0.0 <= nota && nota <= 4.9){console.log(`Conceito D: ${nota}`);}
    }
}
verificar(notas);