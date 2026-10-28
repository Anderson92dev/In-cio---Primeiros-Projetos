let lista = [];

let n = 0;
while(n < 5){
    lista.push(Math.floor(Math.random()*100));
    n++;
}

function retornarPrimeiroUltimo(lista){
    let valores = [];

    valores.push(lista[0]);
    valores.push(lista[lista.length - 1]);

    console.log(`Valores: ${valores}`);
}

console.log(lista);
retornarPrimeiroUltimo(lista);

    

