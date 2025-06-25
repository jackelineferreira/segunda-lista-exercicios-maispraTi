//Questão 10: Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
//cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
//a) O somatório entre todos os valores;
//b) Qual foi o menor valor digitado;
//c) A média entre todos os valores;
//d) Quantos valores são pares.

const prompt = require('prompt-sync')();

let soma = 0;
let contador = 0;
let menor;
let pares = 0;
let continuar;

do {
  let numero = parseFloat(prompt('Digite um número: '));
  while (isNaN(numero)) {
    numero = parseFloat(prompt('Número inválido. Digite um número válido: '));
  }

  soma += numero;
  contador++;

  if (menor === undefined || numero < menor) {
    menor = numero;
  }

  if (numero % 2 === 0) {
    pares++;
  }

  continuar = prompt('Quer continuar? (S/N): ').toUpperCase();
  while (continuar !== 'S' && continuar !== 'N') {
    continuar = prompt('Resposta inválida. Digite S para sim ou N para não: ').toUpperCase();
  }
} while (continuar === 'S');

const media = soma / contador;

console.log(`a) Somatório: ${soma}`);
console.log(`b) Menor valor: ${menor}`);
console.log(`c) Média: ${media.toFixed(2)}`);
console.log(`d) Quantidade de pares: ${pares}`);