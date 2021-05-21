// Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.

const input = require('prompt-sync')()

//Entrada
const horas = Number(input('Digite um numero inteiro em horas: '))


//Processamento
const semanas = Math.trunc(horas / 168)
const dias = Math.trunc((horas - (semanas * 168)) / 24)
const horas_restantes = horas - (semanas * 168) - (dias * 24)


//Saída
console.log(horas,'horas equivalem a', semanas,'semanas', dias,'dias e', horas_restantes,'horas')
