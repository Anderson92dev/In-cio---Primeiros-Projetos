
const lista = [10, 70, 22, 43];

function retornarNumerosParesComIndicesPares(lista){
    let valores = [];

    for (let indice = 0; indice < lista.length; indice++) {
        if (lista[indice] % 2 === 0 && indice % 2 === 0) {
            valores.push(lista[indice]);
        }
    }

    valores.length === 0 ? console.log(`Nenhum valor enontrado...`) : console.log(valores)
}

retornarNumerosParesComIndicesPares(lista);


