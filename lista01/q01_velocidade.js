//Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)
const input = require('prompt-sync')()

//Entrada
const velocidade_ms = Number(input('Velocidade (m/s) '))

//Processamento
const velocidade_km = velocidade_ms * 3.6

//Saida
console.log('A velocidade', velocidade_ms , 'm/s')
console.log('é igual a', velocidade_km,'km/h')