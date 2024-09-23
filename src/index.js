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
    const random = Math.random() // Corrigido para "random"
    let result

    switch (true) {
        case random < 0.33:
            result = "RETA"
            break
        case random < 0.66:
            result = "CURVA"
            break
        default:
            result = "CONFRONTO"
    }

    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado em ${block}: ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada: ${round}`)

        // Sortear Bloco
        const block = await getRandomBlock()

        console.log(`O bloco é: ${block}`)

        // Rolar os dados
        const diceResult1 = await rollDice()
        const diceResult2 = await rollDice()

        let totalTesteSkill1
        let totalTesteSkill2

        if (block === "RETA") {
            totalTesteSkill1 = diceResult1 + character1.VELOCIDADE
            totalTesteSkill2 = diceResult2 + character2.VELOCIDADE

            await logRollResult(character1.NOME, "VELOCIDADE", diceResult1, character1.VELOCIDADE)
            await logRollResult(character2.NOME, "VELOCIDADE", diceResult2, character2.VELOCIDADE)
        }

        if (block === "CURVA") {
            totalTesteSkill1 = diceResult1 + character1.MANOBRABILIDADE
            totalTesteSkill2 = diceResult2 + character2.MANOBRABILIDADE

            await logRollResult(character1.NOME, "MANOBRABILIDADE", diceResult1, character1.MANOBRABILIDADE)
            await logRollResult(character2.NOME, "MANOBRABILIDADE", diceResult2, character2.MANOBRABILIDADE)
        }

        if (block === "CONFRONTO") {
            const powerResult1 = diceResult1 + character1.PODER
            const powerResult2 = diceResult2 + character2.PODER

            console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`)

            await logRollResult(character1.NOME, "PODER", diceResult1, character1.PODER)
            await logRollResult(character2.NOME, "PODER", diceResult2, character2.PODER)

            if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu um ponto 💔`)
                character2.PONTOS--
            } else if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
                console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu um ponto 💔`)
                character1.PONTOS--
            } else if (powerResult1 === powerResult2) {
                console.log("Confronto empatado! Nenhum ponto foi perdido")
            }
        }

        // Verificando vencedor do round
        if (totalTesteSkill1 > totalTesteSkill2) {
            console.log(`${character1.NOME} marcou um ponto`)
            character1.PONTOS++
        } else if (totalTesteSkill2 > totalTesteSkill1) {
            console.log(`${character2.NOME} marcou um ponto`)
            character2.PONTOS++
        }

        console.log("---------------------------")
    }
}

async function declareWinner(character1, character2) {
    console.log("Resultado final:")
    console.log(`${character1.NOME}: ${character1.PONTOS} pontos`)
    console.log(`${character2.NOME}: ${character2.PONTOS} pontos`)

    if (character1.PONTOS > character2.PONTOS) {
        console.log(`\n ${character1.NOME} venceu a corrida! 🏆`)
    } else if (character2.PONTOS > character1.PONTOS) {
        console.log(`\n ${character2.NOME} venceu a corrida! 🏆`)
    } else {
        console.log("A corrida deu empate!")
    }
}

(async function main() {
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`)

    await playRaceEngine(player1, player2)
    await declareWinner(player1, player2)
})()
