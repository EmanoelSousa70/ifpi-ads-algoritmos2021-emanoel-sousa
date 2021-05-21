// Leia um valor em real(R$), calcule e escreva 70% deste valor
const input = require('prompt-sync')()

//Entrada
const valor_real = Number(input('Digite um valor em real:'))

//Processamento 
const porcetagem = valor_real * (70/100)

//Saida
console.log('70 % de R$',valor_real,'é R$',porcetagem)