//Leia 2 números (A, B) e escreva-os emordem inversa (B, A).
const input = require('prompt-sync')()

// Entrada
const numero = Number(input('Digite um número com 2 dígitos: '))

//Processamento
const primeiro_numero = Math.trunc(numero/10)
const segundo_numero = numero - (primeiro_numero * 10)
const inverso = (segundo_numero * 10) + primeiro_numero

// Saída
console.log('O inverso de', numero, 'é', inverso)


