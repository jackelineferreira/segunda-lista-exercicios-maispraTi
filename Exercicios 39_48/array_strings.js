//Questão 45

function contarFrequencias(arr) {
    const frequencia = {};

    for (const item of arr) {
        if (frequencia[item]) {
            frequencia[item]++;
        } else {
            frequencia[item] = 1;
        }
    }

    return frequencia;
}

const palavras = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'banana'];

const resultado = contarFrequencias(palavras);

console.log('Frequência das strings no array:');
console.log(resultado);