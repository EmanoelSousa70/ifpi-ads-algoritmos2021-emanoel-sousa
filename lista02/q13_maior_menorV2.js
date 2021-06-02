const input = require('prompt-sync')();

function main() {
 
  // Entrada
  let num1 = Number(input('Digite o 1° número: ')),
    num2 = Number(input('Digite o 2° número: ')),
    num3 = Number(input('Digite o 3° número: ')),
    num4 = Number(input('Digite o 4° número: ')),
    num5 = Number(input('Digite o 5° número: '));

  let resultadomaior = maior(num1, num2, num3, num4, num5),
    resultadomenor = menor(num1, num2, num3, num4, num5);

  // Saida
  console.log(`Maior:${resultadomaior}`);
  console.log(`Menor:${resultadomenor}`);
}

main();

function maior(a, b, c, d, e) {
  let maior = a;

  if (b > maior) maior = b;
  if (c > maior) maior = c;
  if (d > maior) maior = d;
  if (e > maior) maior = e;

  return maior;
}

function menor(a, b, c, d, e) {
  let menor = a;

  if (b < menor) menor = b;
  if (c < menor) menor = c;
  if (d < menor) menor = d;
  if (e < menor) menor = e;

  return menor;
}