const input = require('prompt-sync')()

//Entrada
const valor1 = Number(input('Digite o primeiro número inteiro: '))
const valor2 = Number(input('Digite o segundo número inteiro: '))
const opcao = Number(input('Digite a operação ( [1 - Adição], [2 - Subtração], [3 - Muçltiplicação], [4 - Divisão]: '))

//Processamento - Saida
if (opcao === 1){
    console.log(valor1 + valor2)
} else if (opcao === 2){
    console.log(valor1 - valor2)
} else if (opcao === 3){
    console.log(valor1 * valor2)
} else if (opcao === 4){
    if (valo2 === 0){
        console.log('##Error##')
    } else{
        console.log(valor1 / valor2)
    }
} else{
    console.log('## Opção inválida ##')
}