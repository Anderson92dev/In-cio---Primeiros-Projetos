/*
28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

//criar lista de números
let n = 1;
let lista = [];
while(n <= 10){
    lista.push(Math.floor(Math.random()*100));
    n++;
}

//verificar dados
let pares = 0;
let impares = 0;
for(let item of lista){
    if(item % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

//exibir resultado
console.log(`São ${pares} pares e ${impares} ímpares...`);
console.log(lista);
