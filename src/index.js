const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

async function getRandomBlock() {
    const radom = Math.random()
    let result

    switch(true) {
        case radom < 0.33:
            result = "RETA"
            break
        case radom < 0.66:
            result = "CURVA"
            break
        default:
            result = "CONFRONTO"
    }

    return result
}

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada: ${round}`)

        //Sortear Bloco
        const block = await getRandomBlock()

        console.log(`O bloco é: ${block}`)
    }
}

(async function main() {
    console.log(
        `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`
    )

    await playRaceEngine(player1.NOME, player2.NOME)
})()

