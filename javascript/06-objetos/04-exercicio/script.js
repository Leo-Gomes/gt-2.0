/*Crie uma função que recebe um array de produtos e o nome de um produto vendido. A função deve reduzir o estoque desse produto em 1.*/

const produtos = [
    { nome: "Camiseta", preco: 30, estoque: 15 },
    { nome: "Calça", preco: 80, estoque: 10 },
    { nome: "Boné", preco: 20, estoque: 23 }
];
let nomeProduto = prompt("Digite um produto, opções: Camiseta, Calça ou Boné");



// function decEstoque(prod, nProd){
//     prod.forEach(prod => {
//         if(prod.nome === nProd){
//             prod.estoque--;
//         }

//     });
//     return prod
// }

function decEstoque(prod, nProd) {
   for(let i = 0; i < prod.length; i++){
    if(prod[i].nome === nProd){
        console.log(`${prod[i].nome} possui ${prod[i].estoque} em estoque`);
        for(let j = prod[i].estoque; j > 1; j--){
            prod[i].estoque --;
            console.log(prod[i].estoque);
        }
    }
   }

}


// function decEstoque(prod, nProd) {
//     let confirm = "";
//     for (let i = 0; i < prod.length; i++) {
//         if (prod[i].nome === nProd) {
//             alert(`${prod[i].nome} possuí ${prod[i].estoque} unidades em estoque`);
//             for (let j = prod[i].estoque; j > 1; j-- ) {
//                 confirm = prompt("Deseja reduzir 1 item do estoque?, digite sim").toLowerCase()
//                 if(confirm === "sim"){
//                     prod[i].estoque--
//                     alert(`${prod[i].estoque} items em estoque`)
//                 } else{
//                     break;
//                 }
//             }
//         }
//     }

// }

decEstoque(produtos, nomeProduto)