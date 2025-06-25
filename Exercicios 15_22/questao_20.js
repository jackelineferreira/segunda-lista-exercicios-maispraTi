//Questão 20: Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
//no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
//salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
//tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
//Matrícula:
//Nome:
//Salário bruto:
//Dedução INSS:
//Salário líquido:
//(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
//INSS).


const prompt = require('prompt-sync')();

let funcionarios = [];
const quantidade = 3; // Troque para 80 no uso real

for (let i = 0; i < quantidade; i++) {
    console.log(`\n📥 Funcionário ${i + 1}`);

    const matricula = prompt('Matrícula: ');
    const nome = prompt('Nome: ');
    const salarioBruto = parseFloat(prompt('Salário bruto (R$): '));

    const inss = salarioBruto * 0.12;
    const salarioLiquido = salarioBruto - inss;

    funcionarios.push({
        matricula,
        nome,
        salarioBruto,
        inss,
        salarioLiquido
    });
}

console.log('\n📄 CONTRACHEQUES');
for (const f of funcionarios) {
    console.log('-------------------------------');
    console.log(`Matrícula: ${f.matricula}`);
    console.log(`Nome: ${f.nome}`);
    console.log(`Salário bruto: R$ ${f.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS (12%): R$ ${f.inss.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${f.salarioLiquido.toFixed(2)}`);
}
