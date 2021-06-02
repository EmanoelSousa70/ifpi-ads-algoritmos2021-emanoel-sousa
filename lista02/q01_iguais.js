const input = require('prompt-sync')();

//Entrada
var numero1 = Number(input('Informe o 1° número: ')),
numero2 = Number(input('Informe o 2° número: ')),
numero3 = Number(input('Informe o 3° número: '))

  var resultado = iguais(numero1, numero2, numero3);


//Processamento
function iguais(num1, num2, num3) {
  if (num1 === num2 && num1 === num3) {
    return 'três dos números são iguais'
  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
    return '2 números iguais'
  } else {
    return 'Todos os números são diferentes'
  }
}

//saida
console.log(resultado)