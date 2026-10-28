

//buscar palavras numa frase
function buscarPalavrasSemelhantes(palavra, lista){
    
    const encontradas = lista.filter(item => item.includes(palavra));

    encontradas.length === 0 ? console.log(`Nada encontrado!`) : console.log(encontradas)
}

buscarPalavrasSemelhantes("pro",["programação", "mobile", "profissional"]);
buscarPalavrasSemelhantes("python",["javascript", "java", "c++"]);