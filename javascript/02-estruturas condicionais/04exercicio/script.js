/***Exercício 4: Dia da Semana**

Utilize uma estrutura de condição para receber um número de 1 a 7 e exibir o dia da semana correspondente (1 para Domingo, 2 para Segunda, etc.). Inclua um caso `default` para números inválidos. */

    const weekDay = prompt('Use os digitos para escolher os dias da semana: 1 Domingo, 2 Segunda-feira, 3 Terça-feira, 4 Quarta-feira, 5 Quinta-feira, 6 Sexta-feira, 7 Sábado');

    switch(weekDay){
        case '1':
            alert('Domingo');
            break;
        case '2':
            alert('Segunda-feira');
            break;
        case '3':
            alert('Terça-feira');
            break;
        case '4':
            alert('Quarta-feira');
            break;
        case '5':
            alert('Quinta-feira');
            break;
        case '6':
            alert('Sexta-feira');
            break;
        case '7':
            alert('Sábado-feira');
            break;
        default:
            alert('Opção inválida!');
    }
