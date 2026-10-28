
const lista = [15, 15, 15, 15];

function somarNumeros(lista){
    let total = lista.reduce((acumulador, item) => {return acumulador = acumulador + item}, 0);
    console.log(total);
}

somarNumeros(lista);