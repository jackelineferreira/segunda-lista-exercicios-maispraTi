//Questão 8: Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
//podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
//sistema funciona assim:
//- até 10 h de atividade no mês: ganha 2 pontos por hora
//- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
//- acima de 20 h de atividade no mês: ganha 10 pontos por hora
//- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
//Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
//Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.

const prompt = require('prompt-sync')();

function calcularPontos(horas) {
  let pontosPorHora = 0;

  if (horas <= 10) {
    pontosPorHora = 2;
  } else if (horas <= 20) {
    pontosPorHora = 5;
  } else {
    pontosPorHora = 10;
  }

  const pontosTotais = horas * pontosPorHora;
  const dinheiroGanho = pontosTotais * 0.05;

  return { pontosTotais, dinheiroGanho };
}

const horasAtividade = parseFloat(prompt('Digite quantas horas de atividade física você teve no mês: '));

if (isNaN(horasAtividade) || horasAtividade < 0) {
  console.log('Por favor, digite um número válido de horas.');
  process.exit(1);
}

const resultado = calcularPontos(horasAtividade);

console.log(`Você ganhou ${resultado.pontosTotais} pontos.`);
console.log(`Você ganhou R$ ${resultado.dinheiroGanho.toFixed(2)}.`);