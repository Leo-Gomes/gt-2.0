//  Função

function name(params){
}


//  Função com retorno
const somar = ( a , b) => {
    return a + b;
}

//  Função sem retorno
const subtrair = ( a, b){
    let subtracao = a - b;
    console.log(subtracao);
}

// Escopo global e local

let escopoExterno = "Tenho uma variável de escopo global";

function testeEscopo(){
    let escopoInterno = "Esta variável possuí escopo local";
    console.log(escopoExterno);
    console.log(escopoInterno);
}

testeEscopo();

const funcaoCallback = () => console.log("Esta é uma função de callback");

function mostrarCallback (callback){
    console.log("Esta função recebe um callback");
    callback()
}