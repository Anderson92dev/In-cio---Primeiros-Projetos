/*
14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie também um default, que retornará uma mensagem de erro no console.
*/

console.log("Escolha uma das opções:\nMaçã\nKiwi\nMelancia\n");

const fruta = "mAçA";

function teste(fruta){   
    fruta = fruta
    .trim()
    .toLowerCase()
    .normalize("NFD") //Separa a letra do seu acento
    .replace(/[\u0300-\u036f]/g, ""); //Remove os sinais diacríticos

    switch(fruta){
        case "maca":
            return `Não vendemos essa fruta aqui.`;
        
        case "kiwi":
            return `Estamo com escassez de kiwis.`;
        
        case "melancia":
            return `Aqui está, são 3 reais o quilo.`;
        
        default:
            return `Valor inválido!`;
    }
}

console.log(teste(fruta));




