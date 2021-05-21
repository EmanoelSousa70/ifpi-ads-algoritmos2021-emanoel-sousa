//44.Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
//quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada pelo
//usuário.

const input = require('prompt-sync')()

//Entrada
const latao = Number(input('Digite a quantidade de latão em Kg: '))

//Processamento
const cobre = (latao * 0.7).toFixed(2)
const zinco = (latao * 0.3).toFixed(2)

//Saída
console.log('Em', latao, 'Kg de latão se tem', cobre, 'Kg de cobre e', zinco, 'Kg de zinco')
