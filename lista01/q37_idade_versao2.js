const input = require('prompt-sync')()

//Entrada
const idade_dias = Number(input('Informe a sua idade em dias: '))

//Processamento
const anos = (idade_dias / 365)
const meses = ((idade_dias - (anos * 365)) / 30)
const dias = idade_dias - (anos * 365) - (meses * 30)

//Saída
console.log('Você tem', anos.toFixed(1), 'anos', meses, 'meses e', dias, 'dias')
