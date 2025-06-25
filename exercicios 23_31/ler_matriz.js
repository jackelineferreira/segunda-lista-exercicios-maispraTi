//Questão 29: Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
//a) da linha 4 de M;
//b) da coluna 2 de M;
//c) da diagonal principal;
//d) todos os elementos da matriz M.
//Escrever essas somas e a matriz.


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
    let somaLinha4 = 0;
    let somaColuna2 = 0;
    let somaDiagonalPrincipal = 0;
    let somaTotal = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            somaTotal += matriz[i][j];

            if (i === 3) somaLinha4 += matriz[i][j];
            if (j === 1) somaColuna2 += matriz[i][j];
            if (i === j) somaDiagonalPrincipal += matriz[i][j];
        }
    }

    return {
        somaLinha4,
        somaColuna2,
        somaDiagonalPrincipal,
        somaTotal
    };
}

function imprimirMatriz(matriz) {
    console.log("\nMatriz M(5x5):");
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}

const tamanho = 5;
const M = lerMatriz(tamanho);
const somas = calcularSomas(M);

imprimirMatriz(M);

console.log("\n--- Resultados ---");
console.log(`Soma da linha 4 (índice 3): ${somas.somaLinha4}`);
console.log(`Soma da coluna 2 (índice 1): ${somas.somaColuna2}`);
console.log(`Soma da diagonal principal: ${somas.somaDiagonalPrincipal}`);
console.log(`Soma de todos os elementos: ${somas.somaTotal}`);