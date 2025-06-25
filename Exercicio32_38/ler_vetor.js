//Questão 38:

const prompt = require('prompt-sync')();

const tamanhoVetor = 6;
let vetor = [];

console.log(`Digite ${tamanhoVetor} números:`);

for (let i = 0; i < tamanhoVetor; i++) {
    let num = parseFloat(prompt(`Elemento ${i + 1}: `));
    vetor.push(num);
}

console.log(`
Escolha a operação a ser realizada:
1 - Soma dos elementos
2 - Produto dos elementos
3 - Média dos elementos
4 - Ordenar vetor em ordem crescente
5 - Mostrar vetor
`);

const operacao = parseInt(prompt("Digite o número da operação: "));

switch (operacao) {
    case 1:
        const soma = vetor.reduce((acc, val) => acc + val, 0);
        console.log(`Soma dos elementos: ${soma}`);
        break;

    case 2:
        const produto = vetor.reduce((acc, val) => acc * val, 1);
        console.log(`Produto dos elementos: ${produto}`);
        break;

    case 3:
        const media = vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
        console.log(`Média dos elementos: ${media.toFixed(2)}`);
        break;

    case 4:
        const vetorOrdenado = [...vetor].sort((a, b) => a - b);
        console.log(`Vetor ordenado: [${vetorOrdenado.join(', ')}]`);
        break;

    case 5:
        console.log(`Vetor original: [${vetor.join(', ')}]`);
        break;

    default:
        console.log("Operação inválida.");
}