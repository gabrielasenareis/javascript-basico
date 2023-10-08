// Faça um programa JavaScript em que o usuário informará 3 números
// e o programa calculará a média aritmética desses números e imprimirá:
// "A media aritmetica entre x, y e z eh igual a w"


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
let qtdNumeros = [numero1, numero2, numero3];



while (maisUmNumero === "sim") {
    var input = +await readLineAsync('digite outro número: ');
    qtdNumeros.push(input)
  
    maisUmNumero = await readLineAsync('Deseja digitar outro número? sim / nao ');
    
}


let somaArray = qtdNumeros.reduce((acumulador, valorAtual) => acumulador + valorAtual);

let mediaA = somaArray / qtdNumeros.length

if (maisUmNumero !== "nao"){
    console.log (`Resposta não identificada`)
} 
console.log(`A média aritimética entre os números ${qtdNumeros} é igual a ${mediaA.toFixed(2)}`)
