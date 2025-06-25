//Questão 5: 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require('prompt-sync')();


console.log("=== JOGO JOKENPÔ ===");
console.log("Escolha uma das opções:");
console.log("1 - Pedra");
console.log("2 - Papel");
console.log("3 - Tesoura");

const escolhaJogador = Number(prompt("Digite o número correspondente à sua escolha: "));

function numeroParaEscolha(num) {
    switch(num) {
        case 1: return "pedra";
        case 2: return "papel";
        case 3: return "tesoura";
        default: return null;
    }
}

const jogador = numeroParaEscolha(escolhaJogador);
if (!jogador) {
    console.log("Escolha inválida. Encerrando o jogo.");
    process.exit();
}

const escolhaComputador = Math.floor(Math.random() * 3) + 1;
const computador = numeroParaEscolha(escolhaComputador);

console.log(`Você escolheu: ${jogador}`);
console.log(`O computador escolheu: ${computador}`);

function decidirVencedor(jogador, computador) {
    if (jogador === computador) {
        return "Empate!";
    }
    if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        return "Você venceu!";
    }
    return "O computador venceu!";
}

console.log(decidirVencedor(jogador, computador));