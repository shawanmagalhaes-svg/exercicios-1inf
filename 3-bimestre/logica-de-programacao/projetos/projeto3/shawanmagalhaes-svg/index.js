
const nome = "Shawan Magalhães"
const idade = 14
const categoria = "comum"
const possuiIngresso = true
const impedido = false
const valorIngresso = 15
const valorPago = 15

let idadeStatus
if (idade >= 18) {
  idadeStatus = "Idade permitida"
} else {
  idadeStatus = "Idade não permitida"
}


let nivelAcesso
if (categoria === "guia" || categoria === "coordenador") {
  nivelAcesso = "Acesso administrativo liberado"
} else {
  nivelAcesso = "Acesso comum"
}


let acessoStatus
if (idade >= 18 && possuiIngresso && !impedido) {
  acessoStatus = "Entrada liberada"
} else {
  acessoStatus = "Entrada negada"
}


let pagamentoStatus;
if (valorPago >= valorIngresso) {
  pagamentoStatus = "Pagamento aprovado"
} else {
  pagamentoStatus = "Pagamento insuficiente"
}


let troco;
if (pagamentoStatus === "Pagamento aprovado") {
  troco = valorPago - valorIngresso;
} else {
  troco = 0;
}


let statusVisita
if (acessoStatus === "Entrada liberada" && pagamentoStatus === "Pagamento aprovado") {
  statusVisita = "Check-in da visita confirmado"
} else {
  statusVisita = "Check-in da visita não confirmado"
}


const resumo = `

Nome: ${nome}
Categoria: ${categoria} | ${nivelAcesso}
Valor do ingresso: R$ ${valorIngresso}
Valor pago: R$ ${valorPago}
Troco: R$ ${troco}
Situação da idade: ${idadeStatus}
Situação do acesso: ${acessoStatus}
Situação do pagamento: ${pagamentoStatus}
Situação final: ${statusVisita}
`
console.log(resumo)
module.exports = {
  nome,
  idade,
  categoria,
  possuiIngresso,
  impedido,
  valorIngresso,
  valorPago,
  idadeStatus,
  nivelAcesso,
  acessoStatus,
  pagamentoStatus,
  troco,
  statusVisita,
  resumo
}
