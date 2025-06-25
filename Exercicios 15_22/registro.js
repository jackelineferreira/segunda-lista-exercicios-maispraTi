//Questão 18: Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
//um funcionário e ao final escreva o conteúdo do registro.

const prompt = require('prompt-sync')();

let funcionario = {
    nome: '',
    cargo: '',
    salario: 0
};

funcionario.nome = prompt('Digite o nome do funcionário: ');
funcionario.cargo = prompt('Digite o cargo do funcionário: ');
funcionario.salario = parseFloat(prompt('Digite o salário do funcionário: R$ '));

console.log('\n📋 Registro do Funcionário:');
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
