//Leia uma temperaturaem °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9)
const input = require('prompt-sync')()

//Entrada
const temp_fahrenheit = Number(input(' digite a temperatura em °F:'))

//Processamento
const celsius = ((5 * temp_fahrenheit - 160) / 9)

//Saida
console.log(temp_fahrenheit,'°F equivale a',celsius,'°C')