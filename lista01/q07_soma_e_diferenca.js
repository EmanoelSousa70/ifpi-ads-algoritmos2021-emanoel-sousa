//Leia 3 números, calcule eescreva a soma dos 2 primeiros e a diferença entre os 2 últimos.


// Entradas
const numero1 = Number(input('digite o 1º número: '))
const numero2 = Number(input('digite o 2º número: '))
const numero3 = Number(input('digite o 3º número: '))

// Processamento
const soma = numero1 + numero2
const subtracao = numero2 - numero3

// Saída
console.log(numero1, '+', numero2, '=', soma)
console.log(numero2, '-', numero3, '=', subtracao)