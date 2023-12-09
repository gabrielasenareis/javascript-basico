
// const listaDeAlunosEMedias = [alunos, medias];

// console.log(
// //   `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
// //   A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}
// //   `
// // );


// // criar uma função que recebe como argunmento o nome de um aluno
// // verifique se o aluno está presente na lista e retorne a média final 
// // que se encontra no mesmo índice. Caso nao esteja na lista retorne uma mensagem
// // falando que o aluno não foi encontrado. 

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




let alunos = ["João", "Juliana", "Ana", "Caio"];
let medias = [10, 8, 7.5, 9];

let alunoPassado = await readLineAsync(`Informe o nome do aluno: `);

function alunoCadastrado (aluno) {
    if (alunos.includes(aluno)) {
    let indiceParaMedia = alunos.indexOf(aluno)
    console.log(` o aluno(a) ${aluno} está presente na lista e a sua média é ${medias[indiceParaMedia]}`)
    } else {
        console.log(` o aluno(a) não consta no sistema! `)
    }
}

console.log(alunoCadastrado(alunoPassado)); 






