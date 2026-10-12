let base = 10;
let expoente = 1;

function potenciacao(base, expoente){
    let acumulador = 1;
        for(let i = 1; i <= expoente; i++){
            acumulador = acumulador * base;
        }
    console.log(acumulador);
}

function potencia(base, expoente){
    let acumulador = 1;
    let i = 1;
    while(i <= expoente){
        acumulador = acumulador * base;
        i++;
    }
    console.log(acumulador);
}

potenciacao(base, expoente);