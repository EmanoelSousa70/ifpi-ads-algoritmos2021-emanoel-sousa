//. Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal
const input = require('prompt-sync')()

//Entrada
const binario = Number(prompt('Binário: '));

//Processamento
const mil  = Math.trunc(binario / 1000);
const centena = Math.trunc((binario % 1000) / 100);
const dezena = Math.trunc((binario % 100) / 10);
const unidade = Math.trunc(binario % 10);

const resulto = (mil * (2 ** 3)) + (centena * (2 ** 2)) + (dezena * (2 ** 1) + (unidade * (2 ** 0))); 

//saida
console.log( binario,'na base 2 equivale a ',resulto,' na base 10');
