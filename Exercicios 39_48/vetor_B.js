//Questão 39:

const prompt = require('prompt-sync')();

function lerVetor(tamanho) {
    const vetor = [];
    for(let i = 0; i < tamanho; i++) {
        const valor = Number(prompt(`Digite o valor para a posição ${i}: `));
        vetor.push(valor);
    }
    return vetor;
}

function compactarVetor(vetor) {
  
    return vetor.filter(num => num > 0);
}

function main() {
    const tamanho = 100;
    console.log(`Digite ${tamanho} valores (inteiros):`);
    const vetorA = lerVetor(tamanho);
    
    const vetorB = compactarVetor(vetorA);
    
    console.log('Vetor original (A):');
    console.log(vetorA);
    
    console.log('Vetor compacto (B), sem valores nulos e negativos:');
    console.log(vetorB);
}

main();
