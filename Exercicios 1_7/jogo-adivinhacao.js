//Questão 6: 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
//tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')();


const numeroSorteado = Math.floor(Math.random() * 5) + 1;


const palpite = parseInt(prompt('Tente adivinhar o número que o computador sorteou (de 1 a 5): '));


if (palpite === numeroSorteado) {
    console.log(`Parabéns! Você acertou! O número era ${numeroSorteado}.`);
} else {
    console.log(`Que pena! Você errou. O número sorteado foi ${numeroSorteado}.`);
}