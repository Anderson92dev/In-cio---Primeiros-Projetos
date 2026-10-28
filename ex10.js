
const teste = {
    nome: "Anderson",
    idade: 34
};

function alterar(obj, parametro){

    delete obj[parametro];
   
    console.log(obj);
}   

alterar(teste, "nome");
