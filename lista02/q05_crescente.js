const input = require('prompt-sync')();

  // Entrada
  let numero1 = Number(input('Digite o 1° número: ')),
    numero2 = Number(input('Digite o 2° número: ')),
    numero3 = Number(input('Digite o 3° número: '))

  
  let resultado = ordem(numero1, numero2, numero3);

  // Saida
  console.log('Resultado:',resultado);


function ordem(a, b, c) {
  if (a < b) {
    if (b < c) {
      return (a, b, c)
    } else {
      if (a < c) {
        return (a, c, b)
      } else {
        return (c, a, b)
      }
    }
  } else {
    if (b < c) {
      if (a < c) {
        return (b, a, c)
      } else {
        return (b, c, a)
      }
    } else {
      return '(',c, b, a,')'
    }
  }
}