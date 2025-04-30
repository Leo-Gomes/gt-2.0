/* Crie um objeto chamado livro com as propriedades: titulo, autor, ano. Acesse e imprima o autor do livro. Modifique o ano do livro para 2023. Adicione uma nova propriedade editora.*/

const livro = {
    titulo: "Um título qualquer",
    autor: "Autor desconhecido",
    ano: 2025
};

alert(livro.autor);

livro.ano = 2023;

livro.editora = "Novatec";

console.log(livro);