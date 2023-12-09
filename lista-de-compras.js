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