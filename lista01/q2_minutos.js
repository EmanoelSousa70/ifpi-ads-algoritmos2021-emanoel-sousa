// Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
const input = require('prompt-sync')()

//Entrada
const horas = Number(input('horas: '))
const min = Number(input('Minutos: '))

//Processamento
const horas_min = horas*60

//Saida 
console.log(horas ,'hr é equivalente a ',horas_min,'min')