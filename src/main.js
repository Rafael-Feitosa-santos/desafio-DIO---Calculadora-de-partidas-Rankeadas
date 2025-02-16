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
    } else if (vitoria < 90) {
        nivel = "Diamante"
    } else if (vitoria <= 100) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    }

    return `O Héroi tem o saldo de ${saldoVitoria} está no nível de ${nivel}`;
}

let resultado = calculaNivel(88, 1);

console.log(resultado);
