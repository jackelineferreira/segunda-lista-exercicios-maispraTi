//Questão 13: 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
//atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
//da sequência de Fibonacci.

const fibonacci = [];

for (let i = 0; i < 15; i++) {
  if (i === 0 || i === 1) {
    fibonacci[i] = 1;
  } else {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
}

console.log('Os 15 primeiros termos da sequência de Fibonacci são:');
console.log(fibonacci.join(', '));