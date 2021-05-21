//Leia 3 números, calcule e escreva a média dos números
const input = require('prompt-sync')()

//Entrada
numero1 = Number(input('digite um numero: '))
numero2 = Number(input('digite um numero: '))
numero3 = Number(input('digite um numero: '))

//Processamento
media = numero1+numero2+numero3/3

//Saida
console.log('A media é',media.toFixed(1))