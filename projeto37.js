/*
37) ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica.

recebam como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos , bem como a soma dos elementos. 
*/

//// variaveis ////
const a1 = 2; // a1 !== 1, senão dá erro ao dividir por zero.
const r = 2;
const n = 10;

//// calcular P.A. ////
function pa(a1, r, n){
    //variáveis
    let termos = [];
    
    //calcular termos
    while(0 < n){
        let an = a1 + r * (n - 1);
        termos.push(an);
        n--;
    }

    //calcular soma de todos termos
    function somaTermosPA (lista){
       return ((lista[0] + lista[lista.length - 1]) * lista.length)/2;
    } 
    
    //executar código
    const listaTermosPA = termos.reverse();
    const somaPA = somaTermosPA(listaTermosPA);
    

    //retornar resultado
    return {listaTermosPA, somaPA};

} 
const {listaTermosPA, somaPA} = pa(a1, r, n);

//// calcular P.G. ////
function pg(a1, r, n){
    //variáveis
    let termos = [];
    
    //calcular termos
    while(0 < n){
        let an = a1 * r ** (n - 1);
        termos.push(an);
        n--;
    }

    //calcular soma de todos termos
    function somaTermosPG (lista){
       return (lista[0]*((r**lista.length)-1))/(r-1);
    } 
    
    //executar código
    const listaTermosPG = termos.reverse();
    const somaPG = somaTermosPG(listaTermosPG);

    //retornar resultado
    return {listaTermosPG, somaPG};

} 
const {listaTermosPG, somaPG} = pg(a1, r, n);


console.log(`Os ${n} primeiros termos da P.A. são: ${listaTermosPA} e\n a soma total dos termos: ${somaPA}\n`);

console.log(`Os ${n} primeiros termos da P.G. são: ${listaTermosPG} e\n a soma total dos termos: ${somaPG}\n`);