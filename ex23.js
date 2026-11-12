

function retirarVogais(palavra){
    const resultado = palavra.replace(/[aeiou]/gi, "");
    console.log(resultado);
}

retirarVogais("Cod3r");

/* 
[aeiou] — identifica qualquer vogal.

g — substitui todas as ocorrências, não apenas a primeira.

i — ignora a diferença entre maiúsculas e minúsculas.

"" — substitui as vogais por nada, removendo-as. 
*/