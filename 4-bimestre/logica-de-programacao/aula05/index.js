const prompt = require("prompt-sync")()

const dias = Number(prompt("Quantos dias? "))

let totalProduzido = 0

for (let i = 1; i <= dias; i++) {
  totalProduzido += Number(prompt(`Produção do dia ${i}: `))
}

module.exports = totalProduzido