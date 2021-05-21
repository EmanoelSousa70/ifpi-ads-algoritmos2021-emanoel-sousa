//Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º.
const input = require('prompt-sync')()

//Entrada
const numero1 = Number(input('Digite um numero: '))
const numero2 = Number(input('Digite outro numero: '))

//Processamento
const divisao_quociente = numero1 / numero2
const resto_da_divisao = numero1%numero2

//Saida
console.log('o quociente da divisão é',divisao_quociente.toFixed(1),'e o resto é',resto_da_divisao)