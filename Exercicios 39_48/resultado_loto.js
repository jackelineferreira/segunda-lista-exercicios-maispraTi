//Questão 40:

const prompt = require('prompt-sync')();

function lerVetor(tamanho, mensagem) {
    const vetor = [];
    console.log(mensagem);
    for(let i = 0; i < tamanho; i++) {
        const valor = Number(prompt(`Digite o número ${i + 1}: `));
        vetor.push(valor);
    }
    return vetor;
}

function vetoresIguais(vetor1, vetor2) {
    if (vetor1.length !== vetor2.length) return false;
    for(let i = 0; i < vetor1.length; i++) {
        if (vetor1[i] !== vetor2[i]) {
            return false;
        }
    }
    return true;
}

function main() {
    const tamanho = 5;
   
    const resultadoOficial = lerVetor(tamanho, "Digite os 5 números do resultado oficial da Loto:");

    const numeroApostas = 50;
    let ganhou = false;

    for(let apostaIndex = 1; apostaIndex <= numeroApostas; apostaIndex++) {
        console.log(`\nDigite os 5 números da aposta ${apostaIndex}:`);
        const aposta = lerVetor(tamanho, '');
        if (vetoresIguais(aposta, resultadoOficial)) {
            console.log(`Aposta ${apostaIndex}: Ganhador!`);
            ganhou = true;
           
        } else {
            console.log(`Aposta ${apostaIndex}: Não ganhou.`);
        }
    }

    if(!ganhou) {
        console.log('\nNenhuma aposta ganhou.');
    }
}

main();