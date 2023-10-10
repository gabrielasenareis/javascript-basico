// 3) Desafio(Lista de Compras): 
// Faça um programa que você pergunte ao usuário quantos itens ele quer adicionar na lista de compras,
// e depois faça um laço de repetição para que ele adicione os itens, dessa forma:
// Item 1 - 'exemplo1'
// Item 2 - 'exemplo2'
// ...
// Após isso, pergunte ao usuário se ele quer retirar algum item da lista ou finalizá - la.
// Se ele disser que quer retirar algum item, mostre a ele quais são os itens que já estão na lista, 
// e peça pra ele digitar qual item ele quer retirar.Ao retirar, pergunte novamente se quer retirar 
// algum item ou encerrar.Faça essa sequência até ele dizer que quer encerrar.Quando isso ocorrer, 
// imprima no console: ** Lista de compras ** e abaixo desse titulo, imprima a lista de compras do usuário.


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

let numeroDeItens = +await readLineAsync('Informe quantos itens terá a lista de compras: ');

let listaDeCompra = []

for (let i = 1; i <= numeroDeItens; i++) {

    let nomeDoItem = await readLineAsync(`Informe o ${i} item da lista de compras: `);
    listaDeCompra.push(nomeDoItem)
}

let continuarOUnao = await readLineAsync('Digite "retirar" para retirar algum item da lista ou "finalizar" para finalizá-la : ');


while (continuarOUnao == 'retirar') {

    let itemDeletado = await readLineAsync('Digite o item que deseja retirar : ');
    let novaLista = []

    for (let umItem of listaDeCompra) {
        if (umItem != itemDeletado) {
            novaLista.push(umItem)
        }
    }
    listaDeCompra = novaLista
    continuarOUnao = await readLineAsync('Digite "retirar" para retirar algum item da lista ou "finalizar" para finalizá-la : ');

    while (continuarOUnao != "finalizar" && continuarOUnao != "retirar") {
        console.log('Resposta Inválida')
        continuarOUnao = await readLineAsync('Digite "retirar" para retirar algum item da lista ou "finalizar" para finalizá-la : ');
    }

}


console.log('\n***** LISTA DE COMPRAS *****')
console.log(listaDeCompra)










