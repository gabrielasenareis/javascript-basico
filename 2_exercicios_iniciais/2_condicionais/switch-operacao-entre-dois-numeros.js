// Crie um programa que solicite ao usuário dois números e exiba o
// resultado da soma, subtração, multiplicação e divisão desses números.
// Dica: utilize o módulo 'readline' para receber informações via console


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
let soma = numero1 + numero2
let subtracao = numero1 - numero2
let mutiplicação = numero1 * numero2
let divisao = numero1 / numero2
let operacao = await readLineAsync('Qual operação deseja realizar? (soma, subtração, multiplicação ou divisão) ');

switch (operacao) {
    case 'soma':
        console.log(`A soma entre os números é ${soma}`)
        break
    case 'subtração':
        console.log(`A subtração entre os números é ${subtracao}`)
        break
    case 'multiplicação':
        console.log(`A multiplicação entre os números é ${mutiplicação}`)
        break
    case 'divisão':
        console.log(`A divisão entre os números é ${divisao}`)
        break
    default: 
        console.log(`A operação ${operacao} é inválida`) 
        break
} 







