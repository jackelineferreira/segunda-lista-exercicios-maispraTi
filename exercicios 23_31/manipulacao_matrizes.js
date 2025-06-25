//Questão 30: Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
//contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
//e os vetores criados.

const prompt = require('prompt-sync')();

function lerMatriz(tamanho) {
    const matriz = [];
    console.log(`Digite os elementos da matriz ${tamanho}x${tamanho}:`);
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            const valor = parseFloat(prompt(`Elemento [${i + 1},${j + 1}]: `));
            matriz[i][j] = valor;
        }
    }
    return matriz;
}

function calcularSomas(matriz) {
    const tamanho = matriz.length;
    const SL = new Array(tamanho).fill(0); // Soma das linhas
    const SC = new Array(tamanho).fill(0); // Soma das colunas

    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            SL[i] += matriz[i][j];
            SC[j] += matriz[i][j];
        }
    }

    return { SL, SC };
}

function imprimirMatriz(matriz) {
    console.log("\nMatriz M(5x5):");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}

function imprimirVetores(SL, SC) {
    console.log("\nVetor SL (Soma das linhas):");
    console.log(SL.join(', '));

    console.log("\nVetor SC (Soma das colunas):");
    console.log(SC.join(', '));
}

const tamanho = 5;
const M = lerMatriz(tamanho);
const { SL, SC } = calcularSomas(M);

imprimirMatriz(M);
imprimirVetores(SL, SC);