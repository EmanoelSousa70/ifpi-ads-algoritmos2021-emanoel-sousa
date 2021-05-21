//39. Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
const input = require('prompt-sync')()

//Entradas
const numero_A = Number(input('digite um 1º número inteiro positivo: '))
const numero_B = Number(input('digite um 2º número inteiro positivo: '))
const numero_C = Number(input('digite um 3º número inteiro positivo: '))

//Processamento
const calculo_d_R = Math.pow((numero_A + numero_B), 2)
const calculo_d_R = Math.pow((numero_B + numero_C), 2)
const resultado = (calculo_d_R + calculo_d_R) / 2

//Saída
console.log('Resultado é', resultado.toFixed(1))
