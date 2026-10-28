


function funcaoDaSorte(valor){
    const numAleatorio = Math.floor(Math.random()*10) + 1;
    (valor === numAleatorio) ? console.log(`Parabéns! O número sorteado foi ${numAleatorio}`) : console.log(`Que pena! O número sorteado foi ${numAleatorio}`)
}
funcaoDaSorte(10);