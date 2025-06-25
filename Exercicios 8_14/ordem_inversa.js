//Questão 14: Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
//mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
//que eles foram informados.

const prompt = require('prompt-sync')();

const nomes = [];

for (let i = 0; i < 7; i++) {
  const nome = prompt(`Digite o ${i + 1}º nome: `);
  nomes.push(nome);
}

console.log('\nOs nomes na ordem inversa são:');
for (let i = nomes.length - 1; i >= 0; i--) {
  console.log(nomes[i]);
}