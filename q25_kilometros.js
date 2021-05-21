//Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde
const input = require('prompt-sync')()

//Entrada
const valor_em_metros = Number(input('Digite um valor inteiro em metros: '))

//Procesamento
const m_p_km = valor_em_metros/1000

//saida
console.log(valor_em_metros,'m equivale a',m_p_km,'km')


