//Questão 37:

const prompt = require('prompt-sync')();

const totalAlunos = 50;
const tamanhoProva = 20;

let gabarito = [];
console.log("Digite o gabarito (20 caracteres):");
for (let i = 0; i < tamanhoProva; i++) {
    let resp = prompt(`Posição ${i + 1}: `).toUpperCase();
    gabarito.push(resp);
}

for (let aluno = 1; aluno <= totalAlunos; aluno++) {
    console.log(`\nAluno ${aluno}`);
    let respostas = [];
    console.log("Digite as respostas do aluno:");
    for (let i = 0; i < tamanhoProva; i++) {
        let resp = prompt(`Resposta ${i + 1}: `).toUpperCase();
        respostas.push(resp);
    }

    let acertos = 0;
    for (let i = 0; i < tamanhoProva; i++) {
        if (respostas[i] === gabarito[i]) {
            acertos++;
        }
    }

    console.log(`Número de acertos: ${acertos}`);

    if (acertos >= 12) {
        console.log("APROVADO");
    } else {
        console.log("REPROVADO");
    }
}