

function repetir(valor, repetidor){
    let lista = [];

    let n = 0;
    while(n < repetidor){
        lista.push(valor);
        n++
    }
    return lista;
}
console.log(repetir("codigo", 2));
console.log(repetir(7, 3));