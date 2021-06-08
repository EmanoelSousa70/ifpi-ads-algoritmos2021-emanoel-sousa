const input = require('prompt-sync')()

function main(){

    let valor1 = Number(input('Digite um valor de 0 a 1000: '))
        valor2 = Number(input('Digite um valor de 0 a 1000: '))
        valor3 = Number(input('Digite um valor de 0 a 1000: '))

    score1(valor1, valor2, valor3)

    score2(valor1, valor2, valor3)
}
function score1(valor1, valor2, valor3){
    var score1 = ((valor1 * 0.26) + (valor2 * 0.57) + (valor3 * 0.17))
    
    if(score1 > 800 && score1 <= 1000 ){
        console.log(`Score 1.0 : ${score1.toFixed(0)} seu score é muito bom`)
    } else if(score1 > 600 && score1 <= 800 ){
        console.log(`Score 1.0 : ${score1.toFixed(0)} seu score é bom`)
    } else if(score1 > 400 && score1 <= 600 ){
        console.log(`Score 1.0 : ${score1.toFixed(0)} seu score é regular`)
    } else if (score1 >= 0 && score1 <= 400){
        console.log(`Score 1.0 : ${score1.toFixed(0)} seu score é baixo`)
    }  
}
function score2(valor1, valor2, valor3){
    var score2 = ((valor1 * 0.62) + (valor2 * 0.19) + (valor3 * 0.19))
    
    if (score2 > 700 && score2 <= 1000){
        console.log(`Score 2.0 : ${score2.toFixed(0)} seu score é muito bom`)
    } else if (score2 > 500 && score2 <= 700 ){
        console.log(`Score 2.0 : ${score2.toFixed(0)} seu score é bom`)
    } else if (score2 > 300 && score2 <= 500){
        console.log(`Score 2.0 : ${score2.toFixed(0)} seu score é regular`)
    } else if (score2 >= 0 && score2 <= 300){
        console.log(`Score 2.0 : ${score2.toFixed(0)} seu score é baixo`)
    }
}
main()
