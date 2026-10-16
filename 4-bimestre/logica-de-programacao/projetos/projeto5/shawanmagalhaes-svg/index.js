const prompt = require("prompt-sync")()

const nomeTurno = prompt("Nome do turno: ")
const meta = Number(prompt("Meta: "))
const producaoInicial = Number(prompt("Produção inicial: "))
const pecasPorCaixa = Number(prompt("Itens por caixa: "))

let producaoFinal = producaoInicial

while (producaoFinal < meta) {
    producaoFinal++
}

let caixasNecessarias = 0
let livrosRestantes = producaoFinal

do {
    caixasNecessarias++
    livrosRestantes -= pecasPorCaixa
} while (livrosRestantes > 0)

const situacaoMeta =
    producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"

const resumo = `
Turno: ${nomeTurno}
Produção final: ${producaoFinal}
Caixas necessárias: ${caixasNecessarias}
Situação: ${situacaoMeta}
`

console.log(resumo)

module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}
