//Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.
const input = require('prompt-sync')()

//Entrada
const meses = Number(input('Digite o numero de meses: '))

//Processamento
const anos = meses/12
const meses_restantes = meses - (anos * 12)
//Saida
console.log(meses,'meses e igual a',anos.toFixed(1),'anos','e a',meses_restantes)