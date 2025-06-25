//Questão 50: criar um sistema simples de reservas de hotéis 


const prompt = require('prompt-sync')({ sigint: true });

let hoteis = [];
let reservas = [];
let proximoIdHotel = 1;
let proximoIdReserva = 1;

function adicionarHotel() {
    const nome = prompt('Nome do hotel: ');
    const cidade = prompt('Cidade do hotel: ');
    const quartosTotais = parseInt(prompt('Quantidade total de quartos: '), 10);

    if (isNaN(quartosTotais) || quartosTotais <= 0) {
        console.log('Quantidade de quartos inválida!');
        return;
    }

    const hotel = {
        id: proximoIdHotel++,
        nome,
        cidade,
        quartosTotais,
        quartosDisponiveis: quartosTotais,
    };

    hoteis.push(hotel);
    console.log(`Hotel "${nome}" adicionado com sucesso!`);
}

function listarHoteis() {
    if (hoteis.length === 0) {
        console.log('Nenhum hotel cadastrado.');
        return;
    }
    console.log('Hotéis cadastrados:');
    hoteis.forEach(hotel => {
        console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Cidade: ${hotel.cidade}, Quartos disponíveis: ${hotel.quartosDisponiveis}`);
    });
}

function buscarHoteisPorCidade() {
    const cidadeBusca = prompt('Informe a cidade para buscar hotéis: ');
    const encontrados = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidadeBusca.toLowerCase());

    if (encontrados.length === 0) {
        console.log(`Nenhum hotel encontrado na cidade "${cidadeBusca}".`);
    } else {
        console.log(`Hotéis em ${cidadeBusca}:`);
        encontrados.forEach(hotel => {
            console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos disponíveis: ${hotel.quartosDisponiveis}`);
        });
    }
}

function fazerReserva() {
    if (hoteis.length === 0) {
        console.log('Nenhum hotel cadastrado. Cadastre hotéis antes de fazer reservas.');
        return;
    }

    console.log('Hotéis disponíveis para reserva:');
    hoteis.forEach(hotel => {
        console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Cidade: ${hotel.cidade}, Quartos disponíveis: ${hotel.quartosDisponiveis}`);
    });

    const idHotel = parseInt(prompt('Digite o ID do hotel para reservar: '), 10);
    const hotel = hoteis.find(h => h.id === idHotel);

    if (!hotel) {
        console.log('Hotel não encontrado.');
        return;
    }

    if (hotel.quartosDisponiveis <= 0) {
        console.log('Não há quartos disponíveis neste hotel.');
        return;
    }

    const nomeCliente = prompt('Nome do cliente: ');

    const reserva = {
        idReserva: proximoIdReserva++,
        idHotel: hotel.id,
        nomeCliente,
    };

    reservas.push(reserva);
    hotel.quartosDisponiveis--;
    console.log(`Reserva feita com sucesso para ${nomeCliente} no hotel ${hotel.nome}.`);
}

function cancelarReserva() {
    const idReserva = parseInt(prompt('ID da reserva para cancelar: '), 10);
    const index = reservas.findIndex(r => r.idReserva === idReserva);

    if (index === -1) {
        console.log('Reserva não encontrada.');
        return;
    }

    const reserva = reservas[index];
    const hotel = hoteis.find(h => h.id === reserva.idHotel);

    if (hotel) {
        hotel.quartosDisponiveis++;
    }

    reservas.splice(index, 1);
    console.log('Reserva cancelada com sucesso.');
}

function listarReservas() {
    if (reservas.length === 0) {
        console.log('Não há reservas feitas.');
        return;
    }

    console.log('Lista de reservas:');
    reservas.forEach(r => {
        const hotel = hoteis.find(h => h.id === r.idHotel);
        console.log(`Reserva ID: ${r.idReserva}, Cliente: ${r.nomeCliente}, Hotel: ${hotel ? hotel.nome : 'Desconhecido'}, Cidade: ${hotel ? hotel.cidade : 'Desconhecida'}`);
    });
}

function menu() {
    console.log('\n=== Sistema de Reserva de Hotéis ===');
    console.log('1 - Adicionar hotel');
    console.log('2 - Listar hotéis cadastrados');
    console.log('3 - Buscar hotéis por cidade');
    console.log('4 - Fazer reserva');
    console.log('5 - Cancelar reserva');
    console.log('6 - Listar reservas');
    console.log('0 - Sair');

    const opcao = prompt('Escolha uma opção: ');

    switch (opcao) {
        case '1':
            adicionarHotel();
            break;
        case '2':
            listarHoteis();
            break;
        case '3':
            buscarHoteisPorCidade();
            break;
        case '4':
            fazerReserva();
            break;
        case '5':
            cancelarReserva();
            break;
        case '6':
            listarReservas();
            break;
        case '0':
            console.log('Saindo do sistema...');
            return false;
        default:
            console.log('Opção inválida, tente novamente.');
    }
    return true;
}

function main() {
    let continuar = true;
    while (continuar) {
        continuar = menu();
    }
}

main();
