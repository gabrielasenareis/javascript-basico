//2)Crie um programa que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.
// Depois, exiba esses valores do array de modo que a sequência de números deve ficar ao contrário do que foi digitado.
//OBS: Utilize o for convencional

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

console.log(arrayDeNumeros)
let arrayInversa = []

for (let i = 2; i >= 0; i--){
    
    arrayInversa.push(arrayDeNumeros[i])

}
console.log(arrayInversa)