const input = require('prompt-sync')()

// Entrada
  let numero1 = Number(input('Digite o 1° número: ')),
      numero2 = Number(input('Digite o 2° número: '))

  // Processamento
  let resultado = maior(numero1, numero2)

  // Saida
  console.log(resultado)


function maior(num1, num2) {
  if (num1 > num2){
    return num1
  }else if (num2 > num1){
    return num2
    }
    else {
      return 'Os dois numero são iguais'
    }
  }