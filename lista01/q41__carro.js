/*O custo ao
consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos
impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os
impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao
consumidor*/
const input = require('prompt-sync')()

//Entrada
const valor_fabrica = Number(input('Valor de fábrica do veículo: R$'))

//Processamento
const percentagem_distribuidor = valor_fabrica * 0.28
const impostos = valor_fabrica * 0.45
const valor_final = (valor_fabrica + percentagem_distribuidor + impostos).toFixed(2)

//Saída
console.log('O valor do veículo para o consumidor é de R$', valor_final)
