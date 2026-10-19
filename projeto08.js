/*
 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. 
 Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. 
 
 Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
 */

const lista = [1,1,1,1,5,3,6,0,0,12,11,20,1,30];
const lista2 = lista.map((a)=>{return String(a)}); //dados inseridos pelo usuário (em string)
const lista3 = lista2.map((a)=>{return Number(a)}); 

function calculadorDePontos(lista){
    const primeiroPonto = lista[0];
    let maior = primeiroPonto;
    let menor = primeiroPonto;
    let bateuRecorde = 0;
    let recordes = [];

    lista.forEach((a)=>{
        if(a > maior){
            maior = a;
            bateuRecorde++;
            recordes.push(a);
        } else if(a < menor){
            menor = a;
        }})
    
    return `Pior nota: ${menor}\nRecordes: ${recordes}\nBateu recorde ${bateuRecorde} vezes...`;
}

console.log(calculadorDePontos(lista3));

