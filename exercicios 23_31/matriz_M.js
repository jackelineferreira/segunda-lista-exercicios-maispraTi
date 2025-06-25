//Questão 24:Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
//quantidade de elementos negativos da linha correspondente de M.

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

function contarNegativosPorLinha(matriz) {
    const vetorC = [];
    for (let i = 0; i < matriz.length; i++) {
        let countNegativos = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] < 0) {
                countNegativos++;
            }
        }
        vetorC[i] = countNegativos;
    }
    return vetorC;
}

function imprimirVetor(vetor) {
    console.log("Vetor C (quantidade de elementos negativos por linha):");
    for (let i = 0; i < vetor.length; i++) {
        console.log(`Linha ${i + 1}: ${vetor[i]}`);
    }
}

const linhas = 6;
const colunas = 8;

const M = lerMatriz(linhas, colunas);
const C = contarNegativosPorLinha(M);
imprimirVetor(C);