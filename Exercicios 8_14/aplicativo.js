//Questão 9: Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
//mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
//perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
//funcionário.

const prompt = require('prompt-sync')();

let totalSalariosHomens = 0;
let totalSalariosMulheres = 0;
let continuar;

do {
  const salario = parseFloat(prompt('Digite o salário do funcionário: '));
  if (isNaN(salario) || salario < 0) {
    console.log('Salário inválido. Tente novamente.');
    continue;
  }

  let sexo = prompt('Digite o sexo do funcionário (M/F): ').toUpperCase();
  while (sexo !== 'M' && sexo !== 'F') {
    sexo = prompt('Sexo inválido. Digite M para masculino ou F para feminino: ').toUpperCase();
  }

  if (sexo === 'M') {
    totalSalariosHomens += salario;
  } else {
    totalSalariosMulheres += salario;
  }

  continuar = prompt('Quer continuar? (S/N): ').toUpperCase();
  while (continuar !== 'S' && continuar !== 'N') {
    continuar = prompt('Resposta inválida. Digite S para sim ou N para não: ').toUpperCase();
  }
} while (continuar === 'S');

console.log(`Total pago aos homens: R$ ${totalSalariosHomens.toFixed(2)}`);
console.log(`Total pago às mulheres: R$ ${totalSalariosMulheres.toFixed(2)}`);