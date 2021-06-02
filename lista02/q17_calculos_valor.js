const input = require('prompt-sync')()

// Entrada
const valor1 = Number(input('Digite o primeiro valor : '))
const valor2 = Number(input('Digite o segundo valor : '))

//Processamento - Saida
if (valor1 % valor2 === 1){
    console.log((valor1 + valor2) + (valor1 % valor2))
} else if (valor1 % valor2 === 2){
    if (valor1 % 2 == 0){
        console.log(valor1, 'é par')
    }else{
        console.log(valor1, 'é ímpar')
    }
    if (valor2 % 2 == 0){
        console.log(valor2, 'é par')
    }else{
        console.log(valor2, 'é ímpar')
    }
} else if (valor1 % valor2 === 3){
    console.log((valor1 + valor2) * valor1)

} else if (valor1 % valor2 === 4){
    if (valor2 != 0){
        console.log((valor1 + valor2) / valor2)
    } else{
        console.log('Divisão por 0.')
    }
} else{
    console.log('O quadrado de', valor1, 'é', Math.pow(valor1,2))
    console.log('O quadrado de', valor2, 'é', Math.pow(valor2,2))
}