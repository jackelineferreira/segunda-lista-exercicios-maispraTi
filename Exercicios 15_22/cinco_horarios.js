//Questão 19:  Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
//repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require('prompt-sync')();

let horarios = [];

for (let i = 0; i < 5; i++) {
    let hora, minuto, segundo;
    console.log(`\n Horário ${i + 1}:`);

    do {
        hora = parseInt(prompt('Digite a hora (0-23): '));
    } while (isNaN(hora) || hora < 0 || hora > 23);

    do {
        minuto = parseInt(prompt('Digite o minuto (0-59): '));
    } while (isNaN(minuto) || minuto < 0 || minuto > 59);

    do {
        segundo = parseInt(prompt('Digite o segundo (0-59): '));
    } while (isNaN(segundo) || segundo < 0 || segundo > 59);

    const horarioFormatado = 
        `${String(hora).padStart(2, '0')}.${String(minuto).padStart(2, '0')}.${String(segundo).padStart(2, '0')}`;

    horarios.push(horarioFormatado);
}

console.log('\n Horários válidos formatados:');
horarios.forEach((h, i) => {
    console.log(`Horário ${i + 1}: ${h}`);
});
