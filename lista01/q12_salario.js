const input = require('prompt-sync')()

//Entrada
const salario = Number(input('Salario (R$): '))

//Processamento 
const aumento = salario * 25/100
const novo_salario = salario + aumento

//Saida 
console.log(' O seu novo salário é R$ ',novo_salario)