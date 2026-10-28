
function inverso(valor){
    if(typeof(valor) === "boolean"){
        return !valor;
    } else if(typeof(valor) === "number"){
        return valor * -1;
    } else {
        return `Aceita apenas valor booleano ou numérico. Valor do tipo ${typeof(valor)} não é válido!`;
    }
}

console.log(inverso("abacate"));
console.log(inverso(true));
console.log(inverso(10));
console.log(inverso(false));
console.log(inverso(-10));