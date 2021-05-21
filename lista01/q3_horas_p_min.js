//Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.
const input = require('prompt-sync')()

//Entrada
const min = Number(input('valor em minutos: '))

//Processamento
const min_totais= min % 60
const min_horas = (min-min_totais) / 60


//Saida
console.log(min,'min é equivalente a',min_horas,'hr',min_totais,'min')