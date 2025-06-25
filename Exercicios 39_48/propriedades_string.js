//Questão 44

function contarStrings(obj) {
    let contador = 0;
    for (const chave in obj) {
        if (typeof obj[chave] === 'string') {
            contador++;
        }
    }
    return contador;
}

const exemplo = {
    nome: 'Ana',
    idade: 22,
    cidade: 'Rio de Janeiro',
    ativo: true,
    profissao: 'Designer'
};

const totalStrings = contarStrings(exemplo);
console.log(`Número de propriedades do tipo string: ${totalStrings}`);