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

let numero1 = +await readLineAsync('Informe o primeiro número: ');
let numero2 = +await readLineAsync('Informe o segundo número: ');
let numero3 = +await readLineAsync('Informe o terceiro número: ');
let maisUmNumero = await readLineAsync('Deseja digitar outro número? sim / nao ');
let numeroX = 0
let qtdNumeros = 3


while (maisUmNumero === "sim") {
    var N = +await readLineAsync('digite outro número: ');
    numeroX = numeroX + N
    qtdNumeros++

    maisUmNumero = await readLineAsync('Deseja digitar outro número? sim / nao ');
}

let soma = (numero1 + numero2 + numero3 + numeroX)
let mediaA = soma / qtdNumeros

console.log (`A média aritimética entre os números é igual a ${mediaA.toFixed(2)}`) 