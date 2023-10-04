let peso = 62;
let altura = 1.69;

let imc = peso / (altura * altura);

console.log("seu imc é" + imc);

if (imc < 18.5) {
    console.log(" e você está abaixo do peso");
} else if (imc < 25) {
    console.log(" e você está com o peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log(" e você está com o sobrepeso");
} else if (imc >= 30 && imc < 35) {
    console.log(" e você está com obesidade grau 1");
} else if (imc >= 35 && imc < 40) {
    console.log(" e você está com obesidade grau 2");
} else console.log(" e você está com obesidade grau 3");