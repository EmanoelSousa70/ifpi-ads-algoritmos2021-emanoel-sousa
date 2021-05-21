//Leia um número inteiro(3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).
const input = require('prompt-sync')()

//Entrada 
numero = Number(input('digite um numero de 3 digitos: '))

//Processamento
resto1 = numero%10
numero = (numero-resto1)/10
resto2 = numero%10
numero = (numero-resto2)/10
resto3 = numero%10
soma = resto1 + resto2 + resto3

//saida
console.log(soma)