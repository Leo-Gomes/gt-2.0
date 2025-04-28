/*Você precisa criar um programa que ajude a calcular a média de notas de uma turma. O programa deve pedir ao usuário a quantidade de alunos na turma e, em seguida, solicitar a nota de cada aluno. Utilize um laço for para capturar as notas e acumular a soma. Após inserir todas as notas, o programa deve calcular e exibir a média da turma.*/ 


let alunos = Number(prompt("Digite a quantidade de alnos na turma:"));
let somaTurma = 0;
let mediaTurma = 0;
for(let i = 0; i < alunos; i++){
    somaTurma += Number(prompt(`Digite a nota do ${i + 1}º aluno: `))
}
mediaTurma = somaTurma / alunos;

alert(`A média da turma foi ${mediaTurma.toFixed(1)}`);