//Questão 4: Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
//comprimentos e diga se é possível formar um triângulo com essas retas.
//Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
//lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')();

const ladoA = parseFloat(prompt('Digite o comprimento do lado A: '));
const ladoB = parseFloat(prompt('Digite o comprimento do lado B: '));
const ladoC = parseFloat(prompt('Digite o comprimento do lado C: '));

function formaTriangulo(a, b, c) {
    // Verifica a Regra do Triângulo
    return a < b + c && b < a + c && c < a + b;
}

if (formaTriangulo(ladoA, ladoB, ladoC)) {
    console.log(`Com os lados ${ladoA}, ${ladoB} e ${ladoC}, é possível formar um triângulo!`);
} else {
    console.log(`Com os lados ${ladoA}, ${ladoB} e ${ladoC}, NÃO é possível formar um triângulo.`);
}