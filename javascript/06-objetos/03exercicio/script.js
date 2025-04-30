/*Crie uma função que recebe um array de produtos e o nome de um produto vendido. A função deve reduzir o estoque desse produto em 1.*/

const produtos = [
    { nome: "Camiseta", preco: 30 },
    { nome: "Calça", preco: 80 },
    { nome: "Boné", preco: 20 }
];

// function somaPreco(obj) {
//     let totPreco = 0;
//     obj.forEach(obj => {
//         totPreco += obj.preco
//     });
//     return `Todos os preços somados dão ${totPreco}`;
// }

function somaPreco(obj) {
    let totPreco = 0;
        for(let i = 0; i < obj.length; i++){
            totPreco += obj[i].preco;
        }
        return `Preço de todos os produtos somados somados R$ ${totPreco}`;
    }

console.log(somaPreco(produtos));