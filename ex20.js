
//contar palavras. split() usa "espaço" entre palavras como referencia... (também existe o "Intl.Segmenter". ver em references > documentação)
function contarPalavras(palavra){
    const contar = palavra.split(" ");
    console.log(contar.length);
}

contarPalavras("Sou uma frase");
contarPalavras("Me divirto aprendendo a programar");
