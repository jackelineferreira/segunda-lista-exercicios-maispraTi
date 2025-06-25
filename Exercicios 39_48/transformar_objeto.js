//Questão 47:

function transformarObjeto(obj, func) {
    const resultado = {};
    for (const chave in obj) {
        resultado[chave] = func(obj[chave]);
    }
    return resultado;
}

const dados = {
    a: 1,
    b: 2,
    c: 3
};

function multiplicarPor10(valor) {
    return valor * 10;
}

const novoObjeto = transformarObjeto(dados, multiplicarPor10);

console.log('Objeto original:', dados);
console.log('Objeto transformado:', novoObjeto);