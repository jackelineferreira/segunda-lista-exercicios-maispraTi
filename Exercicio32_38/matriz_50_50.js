// Questão 34:

const linhas = 50;
const colunas = 50;

let matriz = [];

for (let i = 0; i < linhas; i++) {
    let linha = [];
    for (let j = 0; j < colunas; j++) {
        const valor = parseFloat((Math.random() * 10 + 1).toFixed(2)); // números reais entre 1.00 e 11.00
        linha.push(valor);
    }
    matriz.push(linha);
}

for (let i = 0; i < linhas; i++) {
    let multiplicador = matriz[i][i];
    matriz[i] = matriz[i].map(valor => parseFloat((valor * multiplicador).toFixed(2)));
}

console.log("\nMatriz Modificada (após multiplicações):\n");

matriz.forEach((linha, i) => {
    console.log(`Linha ${i + 1}: ${linha.join('\t')}`);
});