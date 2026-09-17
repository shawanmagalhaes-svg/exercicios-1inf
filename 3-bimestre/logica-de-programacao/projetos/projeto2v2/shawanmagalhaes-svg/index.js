const cliente = "Marina Teixeira" 
const item = "Jogo de Videogame Aventura Final"
const valorBase = 0
const diasPermitidos = 14
const diasUtilizados = 20
const valorMultaPorDia = 3
const valorPago = 15

let prazoStatus
if (diasUtilizados <= diasPermitidos){  
    prazoStatus = "Devolvido dentro do prazo"
} else {
    prazoStatus = "Devolvido com atraso"
}

let diasAtraso
if (diasUtilizados > diasPermitidos){
    diasAtraso = diasUtilizados - diasPermitidos
} else { 
    diasAtraso = 0
}

let multa = diasAtraso * valorMultaPorDia
let valorFinal = valorBase + multa

let pagamentoStatus 
if (valorPago >= valorFinal){
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}

let troco
if (pagamentoStatus === "Pagamento aprovado"){
    troco = valorPago - valorFinal
} else {
    troco = 0
}

let statusLocacao
if (prazoStatus === "Devolvido dentro do prazo") {
    statusLocacao = "Locação regularizada"
} else {
    if (pagamentoStatus === "Pagamento aprovado") {
        statusLocacao = "Locação regularizada com multa paga"
    } else {
        statusLocacao = "Locação pendente: multa não paga integralmente"
    }
}

let resumo = `
Cliente: ${cliente}
Item: ${item}
Prazo permitido: ${diasPermitidos} dias
Dias utilizados: ${diasUtilizados}
Status do prazo: ${prazoStatus}
Dias de atraso: ${diasAtraso}
Multa: R$ ${multa}
Valor final: R$ ${valorFinal}
Valor pago: R$ ${valorPago}
Status do pagamento: ${pagamentoStatus}
Troco: R$ ${troco}
Situação da locação: ${statusLocacao}
`
console.log(resumo)
// raleu meu fi//
module.exports = {
  cliente,
  item,
  valorBase,
  diasPermitidos,
  diasUtilizados,
  valorMultaPorDia,
  valorPago,
  prazoStatus,
  diasAtraso,
  multa,
  valorFinal,
  pagamentoStatus,
  troco,
  statusLocacao,
  resumo
}
