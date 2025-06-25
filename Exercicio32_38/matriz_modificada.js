//Questão 32:


const prompt = require('prompt-sync')();

const linhas = 12;
const colunas = 13;

let matrizOriginal = [];
for (let i = 0; i < linhas; i++) {
    let linha = [];
    for (let j = 0; j < colunas; j++) {
        const valor = Math.floor(Math.random() * 101) - 50; // números entre -50 e 50
        linha.push(valor);
    }
    matrizOriginal.push(linha);
}

let matrizModificada = matrizOriginal.map(linha => [...linha]);

for (let i = 0; i < linhas; i++) {
    let maiorModulo = Math.max(...matrizModificada[i].map(e => Math.abs(e)));
    matrizModificada[i] = matrizModificada[i].map(valor => (valor / maiorModulo).toFixed(2));
}

console.log("\nMATRIZ ORIGINAL:");
matrizOriginal.forEach(linha => console.log(linha.join('\t')));

console.log("\nMATRIZ MODIFICADA:");
matrizModificada.forEach(linha => console.log(linha.join('\t')));