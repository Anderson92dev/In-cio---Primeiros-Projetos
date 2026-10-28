
function simboloMais(valor){
    let char = "";

    let n = 0;
    while(n < valor){
        char = char + "+";
        n++;
    }
    console.log(char);
}
simboloMais(2);
simboloMais(4);


//// Maneira mais Enxuta ////
/* 
function simboloMais(valor){
    console.log("+".repeat(valor));
}
simboloMais(2); 
*/