//Questão 3: Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
//R$ 0.45 para viagens mais longas

const prompt = require('prompt-sync')();

const distancia = parseFloat(prompt("Digite a distância em Km da viagem: "));

let preco;
if (distancia <= 200) {
    preco = distancia * 0.50;
} else {
    preco = distancia * 0.45;
}

console.log(`O preço da passagem para ${distancia} Km é R$ ${preco.toFixed(2)}`);