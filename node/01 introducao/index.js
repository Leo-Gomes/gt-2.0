const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const os = require('os');



// console.log(chalk.blue("Texto azul"));
// console.log(chalk.green.bold("Texto verde"));
// console.log(chalk.red.bold("Erro"));

// fs.writeFileSync("boas-vindas.txt", "Bem-Vindo ao Node.js");
// console.log(chalk.green('Arquivo criado com sucesso!'))

// const conteudo = fs.readFileSync("mensagem.txt", 'utf-8');

function msg( tipo, mensagem) {
    switch (tipo) {
        case 'info':
            console.log(chalk.blue(mensagem))
            break;
        
            case 'sucesso':
            console.log(chalk.green(mensagem))
            break;
        
            case 'erro':
            console.log(chalk.red(mensagem))
            break;
        
            case 'alerta':
            console.log(chalk.yellow(mensagem))
            break;
            
            default:
                break;
            }
        }

if(fs.existsSync('boas-vindas.txt')){
    fs.unlinkSync('boas-vindas.txt');
    console.log(msg('sucesso','Aquivo apagado com sucesso'))
} else {
    console.log(msg('erro', 'Arquivo não encontrado!'))
} 