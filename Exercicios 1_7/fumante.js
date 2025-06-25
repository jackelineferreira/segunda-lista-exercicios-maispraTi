//Questão 1:  Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
//Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.//

const prompt = require('prompt-sync')();

const cigarrosPorDia = parseInt(prompt("Quantos cigarros você fuma por dia? "), 10);
const anosFumando = parseInt(prompt("Há quantos anos você fuma? "), 10);

const totalCigarros = cigarrosPorDia * 365 * anosFumando;

const minutosPerdidos = totalCigarros * 10;

const diasPerdidos = Math.floor(minutosPerdidos / 1440);

console.log(`Você perdeu aproximadamente ${diasPerdidos} dias de vida devido ao fumo.`);