/*
15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. 

Utilizando uma estrutura switch, caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console: “Não trabalhamos com este tipo de automóvel aqui
*/

console.log(`Escolha uma opção:\nHatch\nSedan\nMOtocicleta\nCaminhonete\n`);

const carro = "caminhonete";

function escolha(carro){
    carro = carro
    .trim()
    .toLowerCase()
    .normalize("NFD") //Separa a letra do seu acento
    .replace(/[\u0300-\u036f]/g, ""); //Remove os sinais diacríticos

    switch(carro){
        case "hatch":
            return `compra efetuada com sucesso`;
    
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            return `Tem certeza que não prefere outro modelo?`;
        
        default:
            return `Não trabalahmos com esse tipo de modelo`;
        }
}

console.log(escolha(carro));


