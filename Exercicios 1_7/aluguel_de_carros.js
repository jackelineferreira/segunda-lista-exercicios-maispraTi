//Questão 7: 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
//carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
//cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
//(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
//mostre o preço a ser pago de acordo com os dados a seguir:
//Carros populares
//- Até 100 Km percorridos: R$ 0,20 por Km
//- Acima de 100 Km percorridos: R$ 0,10 por Km
//Carros de luxo
//- Até 200 Km percorridos: R$ 0,30 por Km
//- Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require('prompt-sync')();

function calcularPreco(tipoCarro, dias, km) {
    let precoDia;
    let precoKm;

    if (tipoCarro.toLowerCase() === 'popular') {
        precoDia = 90;
        if (km <= 100) {
            precoKm = 0.20;
        } else {
            precoKm = 0.10;
        }
    } else if (tipoCarro.toLowerCase() === 'luxo') {
        precoDia = 150;
        if (km <= 200) {
            precoKm = 0.30;
        } else {
            precoKm = 0.25;
        }
    } else {
        return null; 
    }

    const total = (precoDia * dias) + (precoKm * km);
    return total;
}

const tipoCarro = prompt('Digite o tipo do carro (popular ou luxo): ');
const dias = parseInt(prompt('Digite a quantidade de dias alugados: '), 10);
const km = parseFloat(prompt('Digite a quantidade de Km percorridos: ').replace(',', '.'));

const valorTotal = calcularPreco(tipoCarro, dias, km);

if (valorTotal === null) {
    console.log('Tipo de carro inválido! Por favor, digite "popular" ou "luxo".');
} else {
    console.log(`O valor total a ser pago é R$ ${valorTotal.toFixed(2)}`);
}