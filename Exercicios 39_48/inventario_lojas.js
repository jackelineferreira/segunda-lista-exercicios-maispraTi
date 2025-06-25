//Questão 48:

function combinarInventarios(invA, invB) {
    const inventarioCombinado = {};

    for (const item in invA) {
        inventarioCombinado[item] = invA[item];
    }

    for (const item in invB) {
        if (inventarioCombinado[item]) {
            inventarioCombinado[item] += invB[item];
        } else {
            inventarioCombinado[item] = invB[item];
        }
    }

    return inventarioCombinado;
}

const inventarioLojaA = {
    camisa: 10,
    calca: 5,
    tenis: 3
};

const inventarioLojaB = {
    calca: 2,
    tenis: 7,
    boné: 4
};

const inventarioFinal = combinarInventarios(inventarioLojaA, inventarioLojaB);

console.log('Inventário combinado:');
console.log(inventarioFinal);