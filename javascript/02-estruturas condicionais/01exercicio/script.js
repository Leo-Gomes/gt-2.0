/***Exercício 1: Cálculo de Desconto**

Crie um programa que solicite o valor total de uma compra. Se o valor for maior que R$100, aplique um desconto de 10%. Exiba o valor final da compra com ou sem desconto.*/

const totalCompra = Number(prompt('Digite o valor total da compra.'));

if(totalCompra > 100) {
    alert(`O valor com desconto é ${totalCompra * 0.9}`);
} else {
    alert('O valor da compra não foi suficiente para habilitar o desconto, valor da compra: ' + totalCompra);
}