// Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos
const input = require('prompt-sync')()

//Entrada
const numero1 = Number((input('Digite um numero: ')))
const numero2 = Number((input('Digite outro numero: ')))

//Processamento
const divisão = ((numero1+numero2) / (numero1-numero2))

//Saida 
console.log(divisão)