//Leia um número inteiro (3 dígitos) e escreva o inverso do número.
const input = require('prompt-sync')()

//Entrada
const numero = Number(input('Digite um número inteiro de 3 digitos: '))

//Processamento
const primeiro_numero = Math.trunc(numero / 100)
const segundo_numero = Math.trunc((numero - (primeiro_numero * 100)) / 10)
const terceiro_numero = (numero - (primeiro_numero * 100)) - (segundo_numero * 10)
const inverso = (terceiro_numero * 100) + (segundo_numero * 10) + primeiro_numero

//Saida
console.log('O inverso de', numero, 'é', inverso)