//Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem.

//Entrada
const numero = Number(input('Digite um número de 4 digitos: '))

//Processamento
const primeiro_digito = numero / 1000
const segundo_digito = numero % 1000 / 100
const terceiro_digito = (numero - (primeiro_digito * 1000) - (segundo_digito * 100)) / 10
const quarto_digito = numero - (primeiro_digito * 1000) - (segundo_digito * 100) - (terceiro_digito * 10)
const soma = primeiro_digito + segundo_digito + terceiro_digito + quarto_digito

//Saída
console.log(primeiro_digito, '+', segundo_digito, '+', terceiro_digito, '+', quarto_digito, '=', soma)