// Faça um programa que leia 3 valores e imprima eles em ordem crescente
// Exemplo: Usuário digitou 5, 2 e 4. Imprima: 'Os numeros 5, 2 e 4 em ordem
// crescente eh 2, 4 e 5.

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


let primeiroNumero = +await readLineAsync(`Digite um numero: `)
let segundoNumero = +await readLineAsync(`Digite outro numero: `)
let terceiroNumero = +await readLineAsync(`Digite outro numero: `)


if (primeiroNumero >= segundoNumero && segundoNumero >= terceiroNumero) {
    console.log(`A ordem crescente é ${terceiroNumero}, ${segundoNumero}, ${primeiroNumero}`)

} else if (primeiroNumero >= terceiroNumero && terceiroNumero >= segundoNumero) {
    console.log(`A ordem crescente é ${segundoNumero}, ${terceiroNumero}, ${primeiroNumero}`)

} else if (segundoNumero >= primeiroNumero && primeiroNumero >= terceiroNumero) {
    console.log(`A ordem crescente é ${terceiroNumero}, ${primeiroNumero}, ${segundoNumero}`)

} else if (segundoNumero >= terceiroNumero && terceiroNumero >= primeiroNumero) {
    console.log(`A ordem crescente é ${primeiroNumero}, ${terceiroNumero}, ${segundoNumero}`)

} else if (terceiroNumero >= segundoNumero && segundoNumero >= primeiroNumero) {
    console.log(`A ordem crescente é ${primeiroNumero}, ${segundoNumero}, ${terceiroNumero}`)

} else {
    console.log(`A ordem crescente é ${segundoNumero}, ${primeiroNumero}, ${terceiroNumero}`)
}
