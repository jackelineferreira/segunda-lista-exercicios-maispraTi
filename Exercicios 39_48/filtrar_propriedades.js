//Questão 42:

const dados = {
    nome: 'Maria',
    idade: 28,
    hobbies: ['leitura', 'futebol', 'cinema'],
    notas: [7, 8, 9],
    endereco: 'Rua A, 123',
    ativo: true,
    telefones: ['1234-5678', '9876-5432']
};

function filtrarArrays(obj) {
    const resultado = {};
    for (const chave in obj) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}

const objetosComArrays = filtrarArrays(dados);

console.log('Propriedades do objeto que são arrays:');
console.log(objetosComArrays);