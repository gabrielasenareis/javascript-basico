// 1)Crie um programa que pergunte 3 números ao usuário, coloque em um array e depois
//adicione o valor 5 em cada um desses números e imprima esse novo array com cada um dos números já somados.
//OBS: Utilize o for of


import { createInterface } from 'readline';
const readline = createInterface({
    input: process.stdin,
    output: process.stdout
});
function readLineAsync(msg) {
    return new Promise(resolve => {
        readline.question(msg, userRes => {
            resolve(userRes);
        });
    });
}


let numero1DoArray = +await readLineAsync('Informe um numero: ');
let numero2DoArray = +await readLineAsync('Informe um numero: ');
let numero3DoArray = +await readLineAsync('Informe um numero: ');
let arrayDeNumeros = [numero1DoArray, numero2DoArray, numero3DoArray]


for (let i = 0; i <= 2; i++) {

    let soma = arrayDeNumeros[i] + 5

    console.log(soma)
}

// for(let i of arrayDeNumeros){
// let soma = i + 5
// console.log(soma)
// }

