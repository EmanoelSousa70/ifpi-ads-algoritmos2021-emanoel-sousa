//Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.
const input = require('prompt-sync')()

//Entrada 
const segundos = Number(input('Digite um numero inteiro em segundos: '))

//Processamento
const horas = segundos/3600
const min = segundos/60
const segudos_restantes = segundos - (horas * 3600) - (minutos * 60)

//Saida
console.log(segundos,'s é igual a',horas.toFixed(2),'hr e a',min.toFixed(1),'min','e a',segudos_restantes)