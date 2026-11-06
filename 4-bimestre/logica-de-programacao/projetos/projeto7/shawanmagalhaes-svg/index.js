const prompt = require("prompt-sync")()

const limiteEstoqueBaixo = Number(prompt("Limite de estoque baixo: "))
const quantidadeProdutos = Number(prompt("Quantidade de produtos: "))

const catalogo = []

for (let i = 1; i <= quantidadeProdutos; i++) {
  const nome = prompt(`Produto ${i} - nome: `)
  const preco = Number(prompt(`Produto ${i} - preço: `))
  const estoque = Number(prompt(`Produto ${i} - estoque: `))

  catalogo.push({
    nome,
    preco,
    estoque
  })
}

let produtoMaisCaro = catalogo[0].nome
let maiorPreco = catalogo[0].preco

for (let i = 1; i < catalogo.length; i++) {
  if (catalogo[i].preco > maiorPreco) {
    maiorPreco = catalogo[i].preco
    produtoMaisCaro = catalogo[i].nome
  }
}

let estoqueTotal = 0

for (let i = 0; i < catalogo.length; i++) {
  estoqueTotal += catalogo[i].estoque
}

let produtosComEstoqueBaixo = 0

for (let i = 0; i < catalogo.length; i++) {
  if (catalogo[i].estoque <= limiteEstoqueBaixo) {
    produtosComEstoqueBaixo++
  }
}

const nomeProduto = prompt("Reajuste - nome do produto: ")
const aumento = Number(prompt("Reajuste - aumento: "))

for (let i = 0; i < catalogo.length; i++) {
  if (catalogo[i].nome === nomeProduto) {
    catalogo[i].preco += aumento
  }
}

const resumo = `Produto mais caro: ${produtoMaisCaro}
Estoque total: ${estoqueTotal}
Produtos com estoque baixo: ${produtosComEstoqueBaixo}`

console.log(resumo)

module.exports = {
  catalogo,
  limiteEstoqueBaixo,
  produtoMaisCaro,
  estoqueTotal,
  produtosComEstoqueBaixo,
  resumo
}