// const numero = Number(prompt('Digite um número'));

// if(numero % 2 === 0){
//     alert('É par!');
// } else{
//     alert('É impar!');
// }

// //  Bom-dia

// const turno = prompt('Digite manhã, tarde ou noite').toLowerCase();

//     if(turno === 'manhã'){
//         alert('Bom dia!');
//     } else if(turno === 'tarde') {
//         alert('Boa tarde!');
//     } else {
//         alert('Boa noite!');
//     }


    const opcao = prompt('Digite 1 para ver perfil, 2 para editar e 3 para sair');

    switch(opcao){
        case '1':
            alert('Bem vindo ao perfil!');
            break;
        case '2':
            alert('Edite seu perfil');
            break;
        case '3':
            alert('Deseja sair?');
            break;
        default:
            alert('Opção inválida!');
    }