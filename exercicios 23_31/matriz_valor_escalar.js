//Questão 27: Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
//multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
//um vetor V(36). Escrever o vetor V no final.

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

function multiplicarMatrizParaVetor(matriz, A) {
    const vetor = [];
    let k = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            vetor[k] = matriz[i][j] * A;
            k++;
        }
    }

    return vetor;
}

const linhas = 6;
const colunas = 6;

const M = lerMatriz(linhas, colunas);
const A = parseFloat(prompt('\nDigite o valor de A: '));
const V = multiplicarMatrizParaVetor(M, A);

console.log("\nVetor V (matriz multiplicada por A e linearizada):");
console.log(V.join(', '));