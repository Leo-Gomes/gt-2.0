/*Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40%. Para a questão 1 resolva o problema de inserção de uma cor de etiqueta que não existe na loja. Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho. Enquanto o usuário não digitar um valor válido para etiqueta, informe que ele digitou um valor inválido e peça novamente a cor da etiqueta. */


let valorProd = Number(prompt("Digite o valor do produto"));
let corEtiq;
let verifyEtiq = true;

while (verifyEtiq){
    corEtiq = prompt("Digite a cor da etiqueta").toLowerCase();

    switch(corEtiq){
        case "verde":
            verifyEtiq = false;
            alert("Valor do seu produto com desconta de 10%: " + (valorProd * 0.9));
            break;
        
        case "amarela":
            verifyEtiq = false;
            alert("Valor do seu produto com desconta de 10%: " + (valorProd * 0.8));
            break;
        case "azul":
            verifyEtiq = false;
            alert("Valor do seu produto com desconta de 10%: " + (valorProd * 0.7));
            break;
        case "vermelha":
            verifyEtiq = false;
            alert("Valor do seu produto com desconta de 10%: " + (valorProd * 0.6));
            break;
        default:
            alert("Opção de cor inválida, digite a cor correta da etiqueta!");
    }
};


