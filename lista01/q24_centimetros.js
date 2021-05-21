//Leia um valor em m, calcule e escreva o equivalente em cm.
const input = require('prompt-sync')()

//Entrada 
const valor_m = Number(input('Digite um valor em metros: '))

//Processamento
const m_p_cm = valor_m*100

//Saida
console.log(valor_m,'m e igual a',m_p_cm,'cm')