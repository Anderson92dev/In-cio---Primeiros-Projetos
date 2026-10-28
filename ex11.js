
const lista = ["numeros"];

function filtrar(lista){

    const numeros = lista.filter((item) => {
        return typeof(item) === "number";
    });
    
    //se a lista numeros estiver vazia, imprimir vazia. do contrario, imprimir o array.
    numeros.length === 0  ? console.log(`Sem números`) : console.log(numeros)
}
filtrar(lista);
