const input = require('prompt-sync')()

function main() {
  console.log('--- IMC ---')

//Entrada
  let altura = Number(input('Altura (m): ')),
    peso = Number(input('Peso (Kg): '))

  let resultado = imc(altura, peso)

  if (resultado < 25) {
    console.log('Peso normal!')
  } else if (resultado >= 25 && resultado <= 30) {
    console.log('Obeso')
  } else {
    console.log('Obesidade mórbida')
  }
}

main();
//Processamento
function imc(altura, peso) {
  return altura / peso ** 2
}