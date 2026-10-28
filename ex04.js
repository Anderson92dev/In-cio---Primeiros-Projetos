

const n1 = Math.floor(Math.random()*100);
const n2 = Math.floor(Math.random()*100);

function maiorOuIgual(valor1, valor2){
    return valor1 >= valor2 ? true : false;
}

console.log(maiorOuIgual(n1, n2));