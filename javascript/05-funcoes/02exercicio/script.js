/**Crie um programa que receba a quantidade total de alunos e a quantidade dos que estão presentes e mostre a quantidade de alunos faltantes */
let resultado = document.getElementById('resultado')
let alunosTurma = Number(prompt("Digite quantos alunos possuí na turma: "));
let alunosPresente = Number(prompt("Digite a quantidade de alunos presentes: "));

function checkPresenca (qtdAluno, qtdPresente){
        resultado.innerHTML = `De um total de ${qtdAluno}, apenas ${qtdAluno - qtdPresente} não estão presentes`
}
checkPresenca(alunosTurma, alunosPresente);