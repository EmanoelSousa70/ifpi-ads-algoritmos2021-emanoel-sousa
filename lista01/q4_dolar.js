//Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$)
const input = require('prompt-sync')()

//Entrada
const dolar_hoje = Number(input('Digite a cotação do dolar: '))
const dolar = Number(input('Digite quanto voce quer converter em real(R$): '))

//Processamento
const dolar_real = dolar_hoje * dolar 

//Saida
console.log('Hoje a cotação do dolar esta no valor de R$',dolar_hoje,'logo',dolar,'$ é igual a R$',dolar_real.toFixed(2))