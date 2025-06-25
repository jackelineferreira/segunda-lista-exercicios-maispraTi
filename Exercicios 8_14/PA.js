//Questão 11: Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
//Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
//valores da sequência.

const prompt = require('prompt-sync')();

const primeiroTermo = parseFloat(prompt('Digite o primeiro termo da PA: '));
const razao = parseFloat(prompt('Digite a razão da PA: '));

if (isNaN(primeiroTermo) || isNaN(razao)) {
  console.log('Entrada inválida. Por favor, digite números válidos.');
  process.exit(1);
}

let soma = 0;
let termos = [];

for (let i = 0; i < 10; i++) {
  const termoAtual = primeiroTermo + i * razao;
  termos.push(termoAtual);
  soma += termoAtual;
}

console.log('Os 10 primeiros termos da PA são:');
console.log(termos.join(', '));
console.log(`A soma dos 10 termos é: ${soma}`);
