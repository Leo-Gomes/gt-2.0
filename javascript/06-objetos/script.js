/*Crie uma função que recebe um array de alunos com nome e nota e retorna um novo array apenas com os alunos que tiveram nota maior ou igual a 7. (utilize o filter( ))*/

const alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 9 },
    { nome: "Pedro", nota: 7 },
    { nome: "Julio", nota: 6 },
    { nome: "Marcos", nota: 4 }
    ];

    let aprovados = alunos.filter((aluno) => aluno.nota > 7)

    console.log(aprovados);