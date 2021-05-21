//Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)
const input = require('prompt-sync')()

//Entrada
const temp_celsius = Number(input(' digite a temperatura em °C:'))

//Processamento
const fahrenheit = ((9*temp_celsius + 160) / 5)

//Saida
console.log(temp_celsius,'°C equivale a',fahrenheit,'°F')