

const lista = [1,2,3,4,5];

function calcularMedia(lista){
    const somaTotal = lista.reduce((acumulador, item) => acumulador + item, 0);

    const media = somaTotal / lista.length;

    console.log(media);
}

calcularMedia(lista);