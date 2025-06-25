//Questão 12: Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
//Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

const termos = [];
let a = 1;
let b = 1;

termos.push(a);
termos.push(b);

for (let i = 3; i <= 10; i++) {
  const proximo = a + b;
  termos.push(proximo);
  a = b;
  b = proximo;
}

console.log('Os 10 primeiros termos da sequência de Fibonacci são:');
console.log(termos.join(', '));