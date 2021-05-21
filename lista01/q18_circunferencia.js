//Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * π * r)
const input = require('prompt-sync')()

//Entrada
const raio = Number(input('Digite o numero do raio da circuferencia: '))

//Procesamento
const comprimento = 2* Math.PI*raio

//Saida
console.log('O comprimento dessa circuferencia é',comprimento.toFixed(1))