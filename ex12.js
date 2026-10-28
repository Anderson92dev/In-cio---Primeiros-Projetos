

const obj = {
    nome: "Maria",
    idade: 43
};

function desestruturar(obj){
    const lista = [];

    for(let indice in obj){
        lista.push([indice, obj[indice]]);
        //lista.push(Array.of(indice, obj[indice]));
    }

    console.log(lista);
}

desestruturar(obj);





