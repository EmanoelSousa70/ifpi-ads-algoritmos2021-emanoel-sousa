//5. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)
const input = require('prompt-sync')()

//Entrada
const base = Number(input(' digite o valor da base do seu triangulo: '))
const altura = Number(input('digite o valor da altura do seu triangulo: '))

//Processamento
const area = ((base * altura)/2)

//Saida
console.log('A area do seu triangulo é', area.toFixed(1))