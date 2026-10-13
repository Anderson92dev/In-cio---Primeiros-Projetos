let base = 2;
let expoente = 3;

function potencializar(base, expoente){
    console.log(base ** expoente)
}

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

potencializar(base, expoente);