// Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.
const input = require('prompt-sync')()

//Entrada
const anos = Number(input('Quantos anos: '))
const meses = Number(input('Quantos meses: '))
const dias = Number(input('Quantos dias: '))

//Processamento
const idade_dias = (anos * 365) + (meses * 30) + dias

//Saída
console.log('Sua idade em dias é igual a', idade_dias.toFixed(1), 'dias')
