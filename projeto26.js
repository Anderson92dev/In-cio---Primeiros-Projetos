/**
 * 26)​ Fazer um programa para encontrar todos os pares entre 1 e 100.
 */

let n = 1;
while(n <= 100){
    if(n % 2 === 0) console.log(n);
    n++;
}

let x = 1;
do{
    if(x % 2 === 0) console.log(x);
    x++;
} while(x <= 100)


for(let a = 2; a <= 100; a = a + 2){
    console.log(a);
}

for(let a = 1; a <= 100; a++){
    if(a % 2 === 0) console.log(a);
}