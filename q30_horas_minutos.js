//Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.
const input = require('prompt-sync')()

//Entrada
const  minutos = Number(input('digite um valor em minutos: '))

//Processamento
const min_p_dias = minutos /1440
const min_p_horas = minutos /60
const minutos_restantes = minutos - (dias * 1440) - (horas * 60)

//Saida 
console.log(minutos,'min corresponde a',min_p_dias.toFixed(2),'dias',min_p_horas.toFixed(2),'horas',minutos_restantes,'min')