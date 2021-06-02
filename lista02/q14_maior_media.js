const input = require('prompt-sync')()

let numero1 = Number(input('Informe um número: '))
 numero2 = Number(input('Informe um número: '))
 numero3 = Number(input('Informe um número: '))
 numero4 = Number(input('Informe um número: '))
 numero5 = Number(input('Informe um número: '))

const media = (numero1 + numero2 + numero3 + numero4 + numero5) / 5
console.log('A média é', media)

console.log('Os valores maiores que a média são: ')
if (numero1 > media){
    console.log(numero1)
}
if (numero2 > media){
    console.log(numero2)
}
if (numero3 > media){
    console.log(numero3)
}
if (numero4 > media){
    console.log(numero4)
}
if (numero5 > media){
    console.log(numero5)
}