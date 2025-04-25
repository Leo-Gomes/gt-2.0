//      EXERCÍCIO

// 1. Declare uma variável contendo uma string

let text = "lkdjflkads";

// 2. Declare uma variável contendo um número dentro de uma string

let n1 = 3;

// 3. Declare uma variável com a sua idade

let age = 25;

// 4. Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas

let firstName = "Leonardo";

let lastName = "Gomes";

console.log(`${firstName} ${lastName}`);

/* 5. Coloque a seguinte frase em uma variável: 
 Você está aprendendo JavaScript! */

let phrase = "Você está aprendendo JavaScript"

// 6. Verifique o tipo da variável que contém o seu nome

console.log(typeof(firstName));

//  7. Declare as seguintes variáveis:

let nome = "Carlos";
let sobrenome = "Silva";
let idade = 30;
let cidade = "Fortaleza";
let profissao = "Desenvolvedor"; 

/*Tarefa 1: Crie uma frase que combine todas essas informações usando o 
operador + para concatenar as strings e as variáveis. O resultado esperado é algo como: "Meu nome completo é Carlos Silva, tenho 30 anos, moro em Fortaleza e sou Desenvolvedor." */

console.log("Meu nome é " + nome + " " + sobrenome + ", tenho " + idade + " anos, moro em " + cidade + " e sou " + profissao);

/*Tarefa 2: Agora, tente criar uma mensagem mais elaborada, incluindo algumas
pontuações e palavras extras: "Olá! Meu nome é Carlos Silva e tenho 30 anos. 
Atualmente, trabalho como Desenvolvedor na bela cidade de Fortaleza." */

console.log(`Olá! Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos. Atualmente, trabalho como ${profissao} na bela cidade de Fortaleza`);
