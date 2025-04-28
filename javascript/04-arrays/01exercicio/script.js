/*  Parte 1:**
Você foi contratado(a) para desenvolver pequenas funcionalidades interativas para um sistema simples utilizando JavaScript. Para isso, você precisará manipular listas de itens (arrays) dinamicamente, permitindo que o usuário interaja através de prompts e visualizando os resultados com alertas.

**Instruções:**

Para cada um dos cenários descritos abaixo, escreva um código JavaScript que utilize os métodos de array `push()`, `pop()`, `shift()` e `unshift().` */

//  Cenário 1: Gerenciamento de tarefas;

let listaTarefas = [];
let tarefa;

do {
    tarefa = prompt("Adicione uma nova tarefa na lista - (Digite '0' para sair: )");
    if (tarefa !== "0" && tarefa !== "") {
        listaTarefas.push(tarefa);
    }
} while (tarefa !== "0");

alert(listaTarefas);

let res = prompt("Deseja remover a primeira tarefa da lista? 's' para sim e 'n' para não").toLowerCase();

if (res === "s" && listaTarefas.length > 0) {
    alert(`A tarefa "${listaTarefas[0]}" foi removida`);
    listaTarefas.shift();
} else if (res === "s" && listaTarefas.length == 0) {
    alert("Não existem tarefas na lista");
}
alert(listaTarefas);