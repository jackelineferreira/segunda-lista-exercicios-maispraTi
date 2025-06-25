//Questão 16: Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
//(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
//depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

let vetor = [];

for (let i = 0; i < 20; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100); 
    vetor.push(numeroAleatorio);
}

console.log('Números gerados:');
console.log(vetor.join(', '));

vetor.sort((a, b) => a - b);

console.log('\nNúmeros ordenados:');
console.log(vetor.join(', '));