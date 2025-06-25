//Questão 31: Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
//Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados.

const prompt = require('prompt-sync')();

function lerMatriz(tamanho) {
    const matriz = [];
    console.log(`Digite os elementos da matriz ${tamanho}x${tamanho}:`);
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            const valor = parseInt(prompt(`Elemento [${i + 1},${j + 1}]: `));
            matriz[i][j] = valor;
        }
    }
    return matriz;
}

function filtrarDiferentesDeA(matriz, A) {
    let contador = 0;
    const X = [];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === A) {
                contador++;
            } else {
                X.push(matriz[i][j]);
            }
        }
    }

    return { contador, X };
}

const tamanho = 30;
const A = parseInt(prompt("Digite o valor de A: "));
const V = lerMatriz(tamanho);
const { contador, X } = filtrarDiferentesDeA(V, A);

console.log(`\nO valor ${A} aparece ${contador} vezes na matriz.`);
console.log(`\nMatriz X (valores diferentes de A):`);
console.log(X.join(', '));