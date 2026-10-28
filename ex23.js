

function retirarVogais(palavra){
    const vogais = ["a","A","e","E","i","I","o","O","u","U"];
    const lista = palavra.split("");

    for(let indice = 0; indice < lista.legth; indice++){
        for(let indice = 0; indice < vogais.legth; indice++){
             if(lista[i] === vogais[i]){
                delete lista[i];
             }
        }
        
    }

    console.log(lista.flat())
    
}

retirarVogais("Cod3r");