//Questão 36;


const prompt = require('prompt-sync')();

const totalApostadores = 100;
const tamanhoTeste = 13;

let gabarito = [];
console.log("Digite as 13 respostas do Gabarito:");
for (let i = 0; i < tamanhoTeste; i++) {
    let resp = parseInt(prompt(`Resposta ${i + 1}: `));
    gabarito.push(resp);
}

for (let apostador = 1; apostador <= totalApostadores; apostador++) {
    console.log(`\nApostador ${apostador}`);

    const numeroCartao = prompt("Número do cartão: ");
    
    let respostas = [];
    console.log("Digite as 13 respostas do apostador:");
    for (let i = 0; i < tamanhoTeste; i++) {
        let resp = parseInt(prompt(`Resposta ${i + 1}: `));
        respostas.push(resp);
    }

    let acertos = 0;
    for (let i = 0; i < tamanhoTeste; i++) {
        if (respostas[i] === gabarito[i]) {
            acertos++;
        }
    }

    console.log(`Apostador número: ${numeroCartao} | Acertos: ${acertos}`);
    if (acertos === tamanhoTeste) {
        console.log("Parabéns, tu foi o GANHADOR");
    }
}