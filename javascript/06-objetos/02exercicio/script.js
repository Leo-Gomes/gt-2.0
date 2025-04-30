/*Dado o array abaixo, crie um laço que percorre os objetos e imprime o nome de cada aluno:*/

const alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 9 },
    { nome: "Pedro", nota: 7 }
    ];

    for(let i = 0; i < alunos.length; i++){
        alert(alunos[i].nome);
    }