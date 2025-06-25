//Questão 49:

function agruparTransacoesPorCategoria(transacoes) {
    const resultado = {};

    for (const transacao of transacoes) {
        const categoria = transacao.categoria;

        if (!resultado[categoria]) {
            resultado[categoria] = {
                transacoes: [],      
                subtotal: 0           
            };
        }

        resultado[categoria].transacoes.push(transacao);

        resultado[categoria].subtotal += transacao.valor;
    }

    return resultado;
}

const transacoes = [
    { id: 1, valor: 150.00, data: '2025-06-20', categoria: 'alimentação' },
    { id: 2, valor: 200.50, data: '2025-06-21', categoria: 'transporte' },
    { id: 3, valor: 50.75,  data: '2025-06-22', categoria: 'alimentação' },
    { id: 4, valor: 100.00, data: '2025-06-23', categoria: 'lazer' },
    { id: 5, valor: 300.00, data: '2025-06-24', categoria: 'transporte' },
];

const agrupado = agruparTransacoesPorCategoria(transacoes);

console.log(JSON.stringify(agrupado, null, 2));