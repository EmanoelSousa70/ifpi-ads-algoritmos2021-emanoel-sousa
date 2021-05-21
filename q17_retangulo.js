//Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura) 
const input = require('prompt-sync')()

//Entrada
const base = Number(input('Digite o valor da vase do rentangulo: '))
const altura = Number(input('Digite o valor da altura de um retangulo: '))

//Processamento
const area = base*altura

//Saida
console.log('O valor da area do retângulo é', area)