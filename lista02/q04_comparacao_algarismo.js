const input = require('prompt-sync')()

  //Entrada
  let numero = Number(input('Digite um número de 2 dígitos: '))

  let resultado = algarismos_comparacao(numero)

  if (resultado) {
    console.log('Os algarismos são iguais')
  } else {
    console.log('Os algarismos são diferentes')
  }

function algarismos_comparacao(num) {
  let dezena = Math.trunc(num / 10),
    unidade = num % 10

  if (dezena === unidade){
    return true
  }
  else{
    return false
  }
}