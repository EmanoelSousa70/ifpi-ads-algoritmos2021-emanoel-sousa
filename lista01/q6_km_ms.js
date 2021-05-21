//Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)

const input = require('prompt-sync')()

//Entrada
const velocidade_km = Number(input('Velocidade (km/h) '))

//Processamento
const velocidade_ms = velocidade_km / 3.6

//Saida
console.log('A velocidade',velocidade_km ,'é igual a', velocidade_ms , 'm/s')