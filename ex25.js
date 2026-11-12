

function filtrarPorQuantidadeDeDigitos(lista, quantidade){

    const resultado = [];

    for(let item of lista){
        if(String(item).length === quantidade){
            resultado.push(item);
        }
    }

    resultado.length > 0 ? console.log(resultado) : console.log(`Nenhum número corresponde ao parâmetro...`) 
}

filtrarPorQuantidadeDeDigitos([38, 100, 365, 10, 125, 11], 2)


