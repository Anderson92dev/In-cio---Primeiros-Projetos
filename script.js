
const campoValor1 = document.querySelector("#valor1");
const campoValor2 = document.querySelector("#valor2");
const botaoCalcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

function operacoes(valor1, valor2){
    const soma = valor1 + valor2;
    const subtracao = valor1 - valor2;
    const multiplicacao = valor1 * valor2;
    const divisao = valor2 === 0 ? "Não é possível dividir por zero": valor1 / valor2;

    return `O resultados são:\nSoma = ${soma}\nSubtação = ${subtracao}\nMultiplicação = ${multiplicacao}\nDivisão = ${divisao}`;
}

botaoCalcular.addEventListener("click", function() {
        //VALIDAÇÃO (detectar uma condição inadequada)
    // const texto1 = campoValor1.value. captura e armazena valor, TRIM() ELIMINA ESPAÇO ENTRE CARACTERES
    const texto1 = campoValor1.value.trim();
    const texto2 = campoValor2.value.trim();

    //CONFERE SE ENTRADA VAZIA
    if (
        texto1 === "" ||
        texto2 === ""
    ) {
        resultado.textContent = "Preencha os dois campos.";
        return;
    }

    //CONVERTE PARA NÚMEROS ao armazenar
    const valor1 = Number(texto1);
    const valor2 = Number(texto2);

    //CONFERE SE VALOR INSERIDO É FINITO (PODEM SER VALORES INFINITOS)
    if (!Number.isFinite(valor1) || !Number.isFinite(valor2)) {
    resultado.textContent = "Digite números válidos.";
    return;
}

    //USO DE text.content POR SEGURANÇA. exibir na DIV a execução da função "operacoes"
    resultado.textContent = operacoes(valor1, valor2);


   /*  
   Validação =  verifica os dados 
        Cuidados tomados: 
            excluir espaços
            impedir numeros infinitos
            conferir entradas vazias

   Tratamento de erros = define como reagir às falhas 
        Cuidados tomados: 
             usa o operador ternário tratar valores divididos por zero
             desnecessário usar TRY /CATCH nesse código
   
   Segurança  = procura impedir que entradas ou operações causem comportamentos indevidos. 
        Cuidados tomados:
            Uso de "textContent" para exibir texto. Evite usar innerHTML para inserir conteúdo que venha do usuário
   */
});