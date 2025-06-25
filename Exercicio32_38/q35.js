//Questão 35:


const prompt = require('prompt-sync')();

const totalValores = 30;
const tamanhoVetor = 5;

let vetorPares = [];
let vetorImpares = [];

function imprimirVetor(vetor, tipo) {
    console.log(`Vetor ${tipo} cheio: [${vetor.join(', ')}]`);
}

for (let i = 0; i < totalValores; i++) {
    const valor = parseInt(prompt(`Digite o valor ${i + 1} de ${totalValores}: `));

    if (valor % 2 === 0) {
        vetorPares.push(valor);
        if (vetorPares.length === tamanhoVetor) {
            imprimirVetor(vetorPares, 'Pares');
            vetorPares = []; // esvazia vetor após imprimir
        }
    } else {
        vetorImpares.push(valor);
        if (vetorImpares.length === tamanhoVetor) {
            imprimirVetor(vetorImpares, 'Ímpares');
            vetorImpares = []; // esvazia vetor após imprimir
        }
    }
}

if (vetorPares.length > 0) {
    imprimirVetor(vetorPares, 'Pares (restante)');
}
if (vetorImpares.length > 0) {
    imprimirVetor(vetorImpares, 'Ímpares (restante)');
}