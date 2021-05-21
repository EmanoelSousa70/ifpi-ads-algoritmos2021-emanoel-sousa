//Leia o valor do lado de um quadrado, calcule e escreva sua área
const input = require('prompt-sync')()

//Entrada 
const lado = Number(input('digite o valor do lado do quadrado: '))

//Processamento
const area = Math.pow(lado, 2)

//Saida
console.log(area)