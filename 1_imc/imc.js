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

let peso = await readLineAsync('Digite o seu peso em kg: ');
let altura = await readLineAsync('Digite a sua altura em m: ');

readline.close();

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("seu imc é " + imc.toFixed(2) + "e você está abaixo do peso");
} else if (imc < 25) {
    console.log("seu imc é " + imc.toFixed(2) + " e você está com o peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("seu imc é " + imc.toFixed(2) + " e você está com o sobrepeso");
} else if (imc >= 30 && imc < 35) {
    console.log("seu imc é " + imc.toFixed(2) + " e você está com obesidade grau 1");
} else if (imc >= 35 && imc < 40) {
    console.log("seu imc é " + imc.toFixed(2) + " e você está com obesidade grau 2");
} else {
    console.log("seu imc é " + imc.toFixed(2) + " e você está com obesidade grau 3");
}