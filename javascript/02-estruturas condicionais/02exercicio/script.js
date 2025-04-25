/***Exercício 2: Verificação de Elegibilidade para Dirigir**

Crie um programa para verificar se a pessoa tem mais de 18 anos e possui habilitação, caso contrário, não poderá dirigir.*/

const idade = Number(prompt('Digite sua idade.'));
const cnh = prompt('Possuí CNH, responda "s" caso sim.').toLowerCase;

if(idade > 18 && cnh === 's') {
    alert("Tudo bem, você pode dirigir");
} else {
    alert("Você não tem permissão para dirigir!");
}