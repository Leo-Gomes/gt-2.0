/***Exercício 3: Cálculo de Média**

Desenvolva um programa em JavaScript que receba 3 notas de um aluno (nota 1 e nota 2 e nota 3). O programa deverá calcular a média dessas três notas. Com base na média, o programa deve exibir uma mensagem informando se o aluno foi "Aprovado" (média maior ou igual a 7) ou "Reprovado" (média menor que 7).*/

const nota1 = Number(prompt('Digite sua 1° nota.'));
const nota2 = Number(prompt('Digite sua 2° nota.'));
const nota3 = Number(prompt('Digite sua 3° nota.'));

const media = (nota1 + nota2 + nota3) / 3;

if(media >= 7) {
    alert(`Sua média foi: ${media.toFixed(1)} - Situação: APROVADO!`);
}  else{
    alert(`Sua média foi: ${media.toFixed(1)} - Situação: REPROVADO!`);
}