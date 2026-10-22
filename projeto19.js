/*
19) O cardápio de uma lanchonete é o seguinte:

Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

console.log(
    `Escolha seu pedido:\n
    100 - Cachorro Quente R$ 3,00\n
    200 - Hambúrguer Simples R$ 4,00\n
    300 - Cheeseburguer R$ 5,50\n
    400 - Bauru R$ 7,50\n
    500 - Refrigerante R$ 3,50\n
    600 - Suco R$ 2,80\n`
);
const codigo = 300;

console.log(`Diga a quantidade:\n`);
const quantidade = 1000;

function calcular(codigo, quantidade){
    let valor = 0;
    let total = 0;
    let produto;
    
    if(!Number.isInteger(codigo) || 
    !Number.isInteger(quantidade) || 
    quantidade <= 0 || 
    codigo <= 0){
        return `Valor Inválido`;
    }
 
    switch(codigo){
        case 100:   
            valor = 3;
            produto = `Cachorro Quente`;
            total = valor * quantidade;
            return `Seu ${produto} custa R$ ${total}`;
        
        case 200:   
            valor = 4;
            produto = `Hambúrguer Simples`;
            total = valor * quantidade;
            return `Seu ${produto} custa R$ ${total}`;

        case 300:   
            valor = 5.50;
            produto = `Cheeseburguer`;
            total = valor * quantidade;
            return `Seu ${produto} custa R$ ${total}`;
            
        case 400:   
            valor = 7.50;
            produto = `Bauru`;
            total = valor * quantidade;
            return `Seu ${produto} custa R$ ${total}`;

        case 500:   
            valor = 3.50;
            produto = `Refrigerante`;
            total = valor * quantidade;
            return `Seu ${produto} custa R$ ${total}`;

        case 600:   
            valor = 2.80;
            produto = `Suco`;
            total = valor * quantidade;
            return `Seu ${produto} custa R$ ${total}`; 
        
        default:
            return `Valor Inválido...`;
    }
}

console.log(calcular(codigo, quantidade));


