/**Com o que aprendemos, crie uma função que retorne todos os números pares deste array [1,2,3,4,5,6,7,8,9,10]*/

let numeros = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
                alert(numeros[i]);
        }
}