//Questão 22: A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
//ados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
//número não determinado de pessoas e retorne a média de salário da população, a
//média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
//350,00.

const prompt = require('prompt-sync')();

function coletarDados() {
    let totalSalario = 0;
    let totalFilhos = 0;
    let maiorSalario = 0;
    let contador = 0;
    let contadorSalarioAte350 = 0;

    while (true) {
        let salario = parseFloat(prompt('Digite o salário (ou -1 para sair): R$ '));
        if (salario === -1) break;

        let numFilhos = parseInt(prompt('Digite o número de filhos: '));

        totalSalario += salario;
        totalFilhos += numFilhos;
        contador++;

        if (salario > maiorSalario) {
            maiorSalario = salario;
        }

        if (salario <= 350) {
            contadorSalarioAte350++;
        }
    }

    if (contador === 0) {
        return null; 
    }

    return {
        mediaSalario: totalSalario / contador,
        mediaFilhos: totalFilhos / contador,
        maiorSalario: maiorSalario,
        percentualAte350: (contadorSalarioAte350 / contador) * 100
    };
}

const resultado = coletarDados();

if (resultado === null) {
    console.log('Nenhum dado foi inserido.');
} else {
    console.log('\n Resultado da Pesquisa:');
    console.log(`Média salarial: R$ ${resultado.mediaSalario.toFixed(2)}`);
    console.log(`Média de filhos: ${resultado.mediaFilhos.toFixed(2)}`);
    console.log(`Maior salário: R$ ${resultado.maiorSalario.toFixed(2)}`);
    console.log(`Percentual com salário até R$ 350,00: ${resultado.percentualAte350.toFixed(2)}%`);
}
