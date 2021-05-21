//Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada
const input = require('prompt-sync')()

//Entrada
const nota1 = Number(input('digite sua nota: '))
const nota2 = Number(input('digite sua nota: '))
const nota3 = Number(input('digite sua nota: '))
const peso1 = Number(input('digite o peso da nota 1: '))
const peso2 = Number(input('digite o peso da nota 2: '))
const peso3 = Number(input('digite o peso da nota 3: '))

//Processamento
const media_ponderada = (nota1*peso1)+(nota2*peso2)+(nota3*peso3)/(peso1+peso2+peso3)

//saida
console.log('a media ponderada desse aluno é',media_ponderada.toFixed(1))
