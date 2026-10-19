/*
09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação: Todo aluno recebe uma nota de  0 a 100. Alunos com nota abaixo de 40 são reprovados. 

As notas possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 

Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 

Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 

No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
*/

const nota = 38;
function verificarAprovacao(nota){
    //validação
        if(!Number.isFinite(nota) || nota < 0 || nota > 100){
            return `Valores inválidos! Digite uma nota entre 0 e 100.`;
        }
    const resultado = nota >= 38 ? aprovado(nota) : `REPROVADO! nota abaixo da média. NOTA FINAL: ${nota}`; 

    function aprovado(nota){ 

        //variáveis utilizadas
        const multiplo5 = ((5 - (nota % 5)) + nota); //calcular próximo múltiplo de 5
        const diferença = multiplo5 - nota; 
        
        //implementar a regra
        if(diferença >= 1 && diferença < 3){
            nota = multiplo5;
            return  `APROVADO! nota acima da média. NOTA FINAL: ${nota}`;//resultado - aprovação;
        } else {
           return  `APROVADO! nota acima da média. NOTA FINAL: ${nota}`;
        }
    }

    return resultado;
}

console.log(verificarAprovacao(nota));


    