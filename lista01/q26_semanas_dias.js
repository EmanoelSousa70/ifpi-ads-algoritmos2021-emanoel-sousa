//Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.
const input = require('prompt-sync')()

//Entrada
const numero_dias = Number(input('Digite o numero de dias: '))

//Processamento
const dias_semanas = numero_dias/7
const dias_restantes = dias - (semanas * 7)

//Saida
console.log(numero_dias,'dias é igual a',dias_semanas.toFixed(2),'semanas',dias_restantes,'dias')
