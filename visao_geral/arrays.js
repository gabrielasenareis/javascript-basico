//               0         1         2
// let frutas = ['banana', 'melao', 'mamao']
let numeros = [1, 2, 3, 4, 5]

// Acessar alguma posição/indice especifica
// console.log(frutas[2])


// Tamanho do array (Quantos itens tem nele)
// console.log(frutas.length)

// Percorrer um array
// for(let i = 0; i < frutas.length; i++){

//     console.log(frutas[i])
// }
let numerosMenoresQueTres = [];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] < 3){
        numerosMenoresQueTres.push(numeros[i])
    }
}