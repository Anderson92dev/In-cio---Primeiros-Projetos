let base = 3;
let expoente = 3;

function potenciacao(base, expoente){
    let acumulador = 1;
    if(expoente === 1){
        acumulador = base * 1;
        return console.log(acumulador);
    } else {
        for(let i = 1; i <= expoente; i++){
            acumulador = acumulador * base;
        }
    }
    console.log(acumulador);
}

potenciacao(base, expoente);