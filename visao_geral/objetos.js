// Estudo sobre objetos 

let perfilUsuário = {
    nome: "Gabriela",
    idade: "26",
    estadoCivil: "solteira"
}

console.log(perfilUsuário)

//acessando dados com ponto
console.log(` O nome do usuário é ${perfilUsuário.nome} e sua idade é ${perfilUsuário.idade} anos` )

//acessando dados com colchete 

let chaves = ["nome", "idade", "estadoCivil"]

for (let chave of chaves) {
console.log(`A chave ${chave} tem valor ${perfilUsuário[chave]}`)
}

// modificando e atribuindo novas chaves 

perfilUsuário.nome = "Gabriela Sena"

perfilUsuário.telefone = "719999999999"

console.log(perfilUsuário)  