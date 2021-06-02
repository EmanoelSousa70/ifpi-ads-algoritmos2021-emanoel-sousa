// Include the prompt-sync module
const input = require('prompt-sync')()

function main() {
  console.log(' Quadrante')

  // Entrada
  let angle = Number(input('Medida do ângulo (entre 0° e 360°): '))
 
  
  if (angle >= 0 && angle <= 90) {
    console.log('\nEstá no 1° quadrante!')
  } else if (angle >= 90 && angle <= 180) {
    console.log('\nEstá no 2° quadrante!')
  } else if (angle >= 180 && angle <= 270) {
    console.log('\nEstá no 3° quadrante!')
  } else if (angle >= 270 && angle <= 360) {
    console.log('\nEstá no 4° quadrante!')
  } else {
  
    console.log('\nÂngulo inválido!')
  }
}

main()