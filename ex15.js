

const despesas = [
    {
        nome: "Jornal Online",
        categoria: "Informação",
        preco: 89.99
    }, 
    {
        nome: "Cinema",
        categoria: "Entretenimento",
        preco: 150

    }
];

function despesasTotais(lista){
    let total = lista.reduce((acumulador, item) => {return acumulador = acumulador + item.preco}, 0);

    console.log(total);
}      

despesasTotais(despesas);