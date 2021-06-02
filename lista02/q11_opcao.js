const input = require('prompt-sync')()

//Entrada
const opcao = Number(input('Escolha uma opção [ 1, 2, ou 3]: '))
const numero1 = Number(input('Digite o primeiro número: '))
const numero2 = Number(input('Digite o segundo número: '))
const numero3 = Number(input('Digite o terceiro número: '))

//Processamento / Saida
if (opcao === 1){
    console.log(numero1)
} else if (opcao === 2){
    console.log(numero2)
} else if (opcao === 3){
    console.log(numero3)
} else{
    console.log('Opção inválida')
}