/*Uma loja deseja cadastrar 5 clientes e verificar se o faturamento da loja foi superior a loja B (faturamento = 54000). Se o faturamento atingir esse valor mostre na tela uma mensagem contendo em quanto foi superado o faturamento.*/

const fatLojaB = 54000;
let fatLojaA = 0;

for(let i = 0; i < 5; i++){
    fatLojaA += Number(prompt(`Digite o faturamento do ${i + 1}º cliente: `));
}

if(fatLojaA > fatLojaB){
    alert(`Loja A supero o faturamento da loja B em R$ ${fatLojaA - fatLojaB}`)
} else{
    alert("A loja A não conseguiu superar o faturamento da loja B");
}