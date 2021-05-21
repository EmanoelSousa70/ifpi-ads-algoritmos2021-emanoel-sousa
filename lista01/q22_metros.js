// Leia um valor em km, calcule e escreva o equivalente em m
const input = require('prompt-sync')() 

//Entrada
const km = Number(input('Digite um valor em Km: '))

//Processamento
const km_p_m = km*1000

//Saida
console.log(km,'km equivale a',km_p_m,'m')