//Questão 2: 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km h⁻¹, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
//multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')();

const velocidade = Number(prompt("Digite a velocidade do carro (em km/h): "));

if (velocidade > 80) {
    const excesso = velocidade - 80; 
    const multa = excesso * 5; // 
    console.log("Você foi multado!");
    console.log(`Você ultrapassou o limite em ${excesso} km/h.`);
    console.log(`Valor da multa: R$ ${multa.toFixed(2)}`);
} else {
    console.log("Velocidade dentro do limite. Dirija com segurança!");
}