const input = require('prompt-sync')();

  //Entrada
  let numero1 = Number(input('Informe o 1° lado: ')),
      numero2 = (input('Informe o 2° lado: ')),
      numero3 = (input('Informe o 3° lado: '))


  let resultado = tipotriangulos(numero1, numero2, numero3)

  //Saida
  if (resultado) {
    console.log('Forma um triângulo',resultado)
  } else {
    console.log('Não forma um triângulo')
  }

function triangulo(a, b, c) {
  let nao_zero = (a !== 0) && (b !== 0) && (c !== 0),
    condicao = (a + b > c) && (a + c > b) && (b + c > a);

  return nao_zero && condicao ? true : false
 
}
function tipotriangulos(a, b, c) {
  if (triangulo(a, b, c)) {
    if (a === b && b === c) {
      return 'equilátero';
    } else if (a === b || a === c || b === c) {
      return 'isósceles';
    } else {
      return 'escaleno';
    }
  } else {
    return false;
  }
}