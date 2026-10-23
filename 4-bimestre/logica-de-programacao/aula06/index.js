const prompt = require("prompt-sync")()

const quantidadeTurnos = Number(prompt("Quantos turnos? "))

let turnosAcimaDaMeta = 0

for (let i = 1; i <= quantidadeTurnos; i++) {
  const pecas = Number(prompt(`Peças do turno ${i}: `))

  if (pecas > 15) {
    turnosAcimaDaMeta++
  }
}

module.exports = turnosAcimaDaMeta