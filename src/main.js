function calculaNivel(vitoria, derrota) {
    let saldoVitoria = vitoria - derrota;
    let nivel = "";

    if (vitoria <= 10) {
        nivel = "Ferro"
    } else if (vitoria <= 20) {
        nivel = "Bronze"
    } else if (vitoria <= 50) {
        nivel = "Prata"
    } else if (vitoria <= 80) {
        nivel = "Ouro"
    } else if (vitoria <= 90) {
        nivel = "Diamante"
    } else if (vitoria <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    return `O Héroi tem o saldo de ${saldoVitoria} está no nível de ${nivel}`;
}

let jogadores = [
    { vitoria: 5, derrota: 2 },
    { vitoria: 15, derrota: 5 },
    { vitoria: 45, derrota: 10 },
    { vitoria: 85, derrota: 20 },
    { vitoria: 110, derrota: 30 }
];

for (let i = 0; i < jogadores.length; i++) {
    let resultado = calculaNivel(jogadores[i].vitoria, jogadores[i].derrota);
    console.log(`Jogador ${i + 1}: ${resultado}`);
}