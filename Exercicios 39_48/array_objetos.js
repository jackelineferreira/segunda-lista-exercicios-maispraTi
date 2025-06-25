//Questão 46

function totalVendasPorVendedor(vendas) {
    const resumo = {};

    for (const venda of vendas) {
        const { vendedor, valor } = venda;
        if (resumo[vendedor]) {
            resumo[vendedor] += valor;
        } else {
            resumo[vendedor] = valor;
        }
    }

    return resumo;
}

const vendas = [
    { vendedor: 'Ana', valor: 100 },
    { vendedor: 'Carlos', valor: 200 },
    { vendedor: 'Ana', valor: 150 },
    { vendedor: 'Bruna', valor: 50 },
    { vendedor: 'Carlos', valor: 300 }
];

const resumoVendas = totalVendasPorVendedor(vendas);

console.log('Total de vendas por vendedor:');
console.log(resumoVendas);