//Questão 26:  Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
//P[1..3,1..5].


const prompt = require('prompt-sync')();

function lerMatriz(linhas, colunas, nome) {
    const matriz = [];
    console.log(`\nDigite os elementos da matriz ${nome} (${linhas}x${colunas}):`);
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let j = 0; j < colunas; j++) {
            const valor = parseFloat(prompt(`Elemento ${nome}[${i + 1},${j + 1}]: `));
            matriz[i][j] = valor;
        }
    }
    return matriz;
}

function produtoElementoPorElemento(A, B) {
    const linhas = A.length;
    const colunas = A[0].length;
    const P = [];

    for (let i = 0; i < linhas; i++) {
        P[i] = [];
        for (let j = 0; j < colunas; j++) {
            P[i][j] = A[i][j] * B[i][j];
        }
    }
    return P;
}

function imprimirMatriz(matriz, nome) {
    console.log(`\nMatriz ${nome}:`);
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join('\t'));
    }
}

const linhas = 3;
const colunas = 5;

const A = lerMatriz(linhas, colunas, 'A');
const B = lerMatriz(linhas, colunas, 'B');
const P = produtoElementoPorElemento(A, B);

imprimirMatriz(A, 'A');
imprimirMatriz(B, 'B');
imprimirMatriz(P, 'P (Produto elemento a elemento)');