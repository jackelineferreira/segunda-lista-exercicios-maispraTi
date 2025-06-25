//Questão 21: Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
//retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
//= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

const prompt = require('prompt-sync')();

function calcularPesoIdeal(alt, sexo) {
    if (sexo.toUpperCase() === 'M') {
        return 72.7 * alt - 58;
    } else if (sexo.toUpperCase() === 'F') {
        return 62.1 * alt - 44.7;
    } else {
        return null; // sexo inválido
    }
}

// Entrada de dados
const altura = parseFloat(prompt('Digite sua altura (em metros, ex: 1.75): '));
const sexo = prompt('Digite seu sexo (M/F): ');

const pesoIdeal = calcularPesoIdeal(altura, sexo);

if (pesoIdeal !== null) {
    console.log(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`);
} else {
    console.log('Sexo inválido. Digite M para masculino ou F para feminino.');
}