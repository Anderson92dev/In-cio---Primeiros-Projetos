

function contarCaracteres(char, frase){
    const listaChar = frase.split("");
    const quantidadeCharIguais = listaChar.filter(item => item === char);

    (quantidadeCharIguais.length === 0) ? console.log(`Caracter "${char}" não encontrado na frase...`) : console.log(`Caracter "${char}" encontrado! Número de ocorrências: ${quantidadeCharIguais.length} `)
}

contarCaracteres("r", "A sorte favorece os audadez");
contarCaracteres("c", "Conhece-te a ti mesmo");