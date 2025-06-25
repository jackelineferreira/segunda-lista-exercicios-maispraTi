//Questão 25:  Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
//de cada coluna separadamente.

const prompt = require('prompt-sync')();

function lerMatriz(linhas, colunas) {
    const matriz = [];
    console.log(`Digite os elementos da matriz ${linhas}x${colunas}:`);
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            const valor = parseFloat(prompt(`Elemento [${i + 1},${j + 1}]: `));
            matriz[i][j] = valor;
        }
    }
    return matriz;
}

function somaColunas(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;
    const somaPorColuna = [];

    for (let j = 0; j < colunas; j++) {
        let soma = 0;
        for (let i = 0; i < linhas; i++) {
            soma += matriz[i][j];
        }
        somaPorColuna[j] = soma;
    }
    return somaPorColuna;
}

function imprimirSomas(somas) {
    console.log("Soma de cada coluna:");
    for (let i = 0; i < somas.length; i++) {
        console.log(`Coluna ${i + 1}: ${somas[i].toFixed(2)}`);
    }
}

const linhas = 10;
const colunas = 5;

const matriz = lerMatriz(linhas, colunas);
const somas = somaColunas(matriz);
imprimirSomas(somas);