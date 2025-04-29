/**Desenvolva uma função chamada verificarMaiorIdade que recebe uma idade como argumento e retorna “é maior de idade” se a pessoa for maior de idade (18 anos ou mais) e “é menor de idade” caso contrário. */

let idade = Number(prompt("Digite sua idade: "));

function maiorIdade (age){
    if(age >= 18){
        alert("É maior de idade!");
    } else {
        alert("É menor de idade!");
    }

}
maiorIdade(idade);