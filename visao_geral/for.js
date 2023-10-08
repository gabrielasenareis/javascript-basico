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



let numero = +await readLineAsync('Informe um número: ');

console.log(`A TABUADA DE ${numero} É: `)

for (let numeroDaTabuada = 1; numeroDaTabuada <= 10; numeroDaTabuada++) {

    let resultado = numero * numeroDaTabuada

    console.log(`${numero} * ${numeroDaTabuada} = ${resultado}`)
}

