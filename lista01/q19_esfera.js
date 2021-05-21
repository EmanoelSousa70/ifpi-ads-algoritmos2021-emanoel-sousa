//. Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * π * r3) / 3) (π = 3,14)
const input = require('prompt-sync')()

//Entrada
const raio = Number(input(' Digite o valor do raio: '))

//Processamento
const volume = (4*Math.PI*raio*3)/3

//Saida
console.log('O volume da esfera é',volume.toFixed(1))
