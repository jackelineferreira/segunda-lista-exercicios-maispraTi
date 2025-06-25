//Questão 33:

const prompt = require('prompt-sync')();

let matriz = [];
console.log("Digite os elementos da matriz 3x3:");

for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        const valor = parseFloat(prompt(`Elemento [${i}][${j}]: `));
        matriz[i][j] = valor;
    }
}

let matrizOriginal = matriz.map(linha => [...linha]);

let diagonalSecundaria = [
    matriz[0][2],
    matriz[1][1],
    matriz[2][0]
];

let mediaSecundaria = diagonalSecundaria.reduce((soma, val) => soma + val, 0) / 3;

for (let i = 0; i < 3; i++) {
    matriz[i][i] = matriz[i][i] * mediaSecundaria;
}

console.log("\nMatriz Original:");
matrizOriginal.forEach(linha => console.log(linha.join('\t')));

console.log("\nMatriz Modificada:");
matriz.forEach(linha => console.log(linha.join('\t')));