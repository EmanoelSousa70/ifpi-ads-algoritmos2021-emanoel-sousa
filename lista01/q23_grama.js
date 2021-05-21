//Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).
const input = require('prompt-sync')()

//Entrada
const valor_kg = Number(input('Digite um valor em quilograma: '))

//Processamento
const kg_p_g = valor_kg *1000

//Saida
console.log(valor_kg,'kg e igual a',kg_p_g,'g')