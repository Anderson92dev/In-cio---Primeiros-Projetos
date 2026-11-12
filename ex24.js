const obj = {
    a: 1,
    b: 2,
    c: 3
}

function inverter(){
    let objeto = {};

    for(let chave in obj){
        objeto[obj[chave]] = chave;
    }
    //objeto[Object.values(obj)[0]] = Object.keys(obj)[0];

    console.log(objeto);
}

inverter(obj);





