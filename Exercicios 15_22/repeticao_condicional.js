//Questão 15: 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
//final, mostre quais são os números pares que foram digitados e em que posições eles
//estão armazenados.

const prompt = require('prompt-sync')();

// Questão 15: Vetor com números pares e suas posições

const numeros = [];

for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro: `));
    numeros.push(numero);
}

console.log('\nNúmeros pares e suas posições no vetor:\n');

numeros.forEach((numero, indice) => {
    if (numero % 2 === 0) {
        console.log(`Número ${numero} na posição ${indice}`);
    }
});
