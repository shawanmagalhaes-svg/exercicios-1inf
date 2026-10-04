const cliente = "Caio Fontes"
const opcaoMenu = 1
const quantidade = 3
const formaPagamento = "pix"
const statusPedido = "enviado"

let prato
switch (opcaoMenu) {
  case 1:
    prato = "Pastel de Carne"
    break
  case 2:
    prato = "Pastel de Queijo"
    break
  case 3:
    prato = "Caldo de Cana"
    break
  case 4:
    prato = "Coxinha"
    break
  default:
    prato = "Opção inválida"
}

let precoUnitario
switch (opcaoMenu) {
  case 1:
    precoUnitario = 9
    break
  case 2:
    precoUnitario = 8
    break
  case 3:
    precoUnitario = 6
    break
  case 4:
    precoUnitario = 7
    break
  default:
    precoUnitario = 0
}

const subtotal = precoUnitario * quantidade
const freteStatus = subtotal >= 100 ? "Frete grátis" : "Frete pago"
const frete = subtotal >= 100 ? 0 : 12

let pagamentoMensagem
switch (formaPagamento) {
  case "pix":
    pagamentoMensagem = "Pagamento via PIX"
    break
  case "cartao":
    pagamentoMensagem = "Pagamento via cartão"
    break
  case "dinheiro":
    pagamentoMensagem = "Pagamento em dinheiro"
    break
  default:
    pagamentoMensagem = "Forma de pagamento inválida"
}

let descontoPercentual
switch (formaPagamento) {
  case "pix":
  case "cartao":
    descontoPercentual = 5
    break
  case "dinheiro":
    descontoPercentual = 0
    break
  default:
    descontoPercentual = 0
}

const desconto = subtotal * (descontoPercentual / 100)
const total = subtotal - desconto + frete

let statusMensagem
switch (statusPedido) {
  case "pendente":
    statusMensagem = "Aguardando pagamento"
    break
  case "aprovado":
    statusMensagem = "Pedido em preparo"
    break
  case "enviado":
    statusMensagem = "Pedido a caminho"
    break
  case "cancelado":
    statusMensagem = "Pedido cancelado"
    break
  default:
    statusMensagem = "Status desconhecido"
}

const resumo = `
Cliente: ${cliente}
Item: ${prato} (${quantidade})
Subtotal: R$ ${subtotal}
Frete: ${freteStatus} (R$ ${frete})
Pagamento: ${pagamentoMensagem}
Desconto: R$ ${desconto}
Total: R$ ${total}
Situação: ${statusMensagem}
`

console.log(resumo)

module.exports = {
  cliente,
  opcaoMenu,
  quantidade,
  formaPagamento,
  statusPedido,
  prato,
  precoUnitario,
  subtotal,
  freteStatus,
  frete,
  pagamentoMensagem,
  descontoPercentual,
  desconto,
  total,
  statusMensagem,
  resumo
}
