//Questão 17:Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
//dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
//os dados das pessoas menores de idade.

const prompt = require('prompt-sync')();

let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
    let nome = prompt(`Digite o nome da ${i + 1}ª pessoa: `);
    let idade = parseInt(prompt(`Digite a idade de ${nome}: `));
    
    nomes.push(nome);
    idades.push(idade);
}

// Exibir somente os menores de idade
console.log('\n📋 Lista de pessoas menores de idade:');
let encontrouMenor = false;

for (let i = 0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log(`- ${nomes[i]} tem ${idades[i]} anos`);
        encontrouMenor = true;
    }
}

if (!encontrouMenor) {
    console.log('Nenhuma pessoa menor de idade foi cadastrada.');
}