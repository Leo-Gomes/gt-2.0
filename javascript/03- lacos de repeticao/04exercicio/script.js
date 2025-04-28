/*Você é responsável por calcular o total das vendas do dia para uma pequena loja. Escreva um programa que peça ao usuário o valor de cada venda, uma por vez. Use um laço de repetição para capturar esses valores e adicione-os a um total acumulado. O programa deve continuar pedindo valores até que o usuário insira "0" (para finalizar). Ao final, exiba o total de vendas do dia.*/
let vendaDia = 0;
let vendasTotal = 0;

do {
    vendaDia = Number(prompt("Digite o valor da última venda. (DIGITE 0 PARA SAIR)"));
    vendasTotal += vendaDia;
} while (vendaDia !== 0);

alert(`O faturamento total do dia foi: R$ ${vendasTotal}`);