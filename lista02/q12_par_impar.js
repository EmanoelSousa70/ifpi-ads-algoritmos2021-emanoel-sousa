const input = require('prompt-sync')();

function main(){
  console.log('### Impar ou Par ###')

  const numero = Number(prompt('Numero: '))

  if (numero%2 == 0 ){
    console.log(`O numero ${numero} e Par`)
  }else {
    console.log(`0 numero ${numero} é impar`)
    }
  }
main()
