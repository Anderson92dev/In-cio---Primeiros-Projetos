const calcularSalario = (horas, precoPorHora)=>{
    return `Salário igual a R$ ${horas * precoPorHora}.`;
};

console.log(calcularSalario(150, 40.5));