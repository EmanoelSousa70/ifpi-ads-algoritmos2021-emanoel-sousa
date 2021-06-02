
const input = require('prompt-sync')()

  //Entrada
  let   numero1 = Number(input('digite o 1° número: ')),
        numero2 = Number(input('digite o 2° número: '))

  //Processamento
  let resultado_maior = maior(numero1, numero2),
    resultado_menor = menor(numero1, numero2)

  if (resultado_maior !== resultado_menor) {

    //Saida
    console.log('Maior numero:',resultado_maior)
    console.log('Menor numero:',resultado_menor)

  } else {
    console.log('Os números são iguais')
  }

  function maior(num1, num2) {
    if (num1 > num2){
      return num1
    }else if (num2 > num1){
      return num2
    }
}

function menor(num1, num2) {
  if (num1 < num2){
    return num1
  }else if (num2 < num1){
    return num2
  }
}