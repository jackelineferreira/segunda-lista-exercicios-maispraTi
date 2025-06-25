//Questão 28: Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
//item:
//a) a soma dos elementos acima da diagonal principal;
//b) a soma dos elementos abaixo da diagonal principal;

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

function somarAcimaEAbaixoDaDiagonal(matriz) {
    let somaAcima = 0;
    let somaAbaixo = 0;
    const tamanho = matriz.length;

    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            if (j > i) {
                somaAcima += matriz[i][j];
            } else if (i > j) {
                somaAbaixo += matriz[i][j];
            }
        }
    }

    return { somaAcima, somaAbaixo };
}

const tamanho = 10;
const matriz = lerMatriz(tamanho);
const { somaAcima, somaAbaixo } = somarAcimaEAbaixoDaDiagonal(matriz);

console.log(`\nSoma dos elementos acima da diagonal principal: ${somaAcima}`);
console.log(`Soma dos elementos abaixo da diagonal principal: ${somaAbaixo}`);