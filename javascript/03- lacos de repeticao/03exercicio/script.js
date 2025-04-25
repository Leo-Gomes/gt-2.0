/**Crie um programa que peça ao usuário para digitar uma senha. Continue pedindo a senha até que o usuário digite "1234". Use um laço do…while para controlar as tentativas e, quando a senha correta for inserida, exiba a mensagem "Acesso Permitido". */
let password;
do {
password = Number(prompt("Digite sua senha"));

if(password === 1234){
    alert("Acesso Permitido");
} else{
    alert("Acesso Negado");
}

} while (password !== 1234);