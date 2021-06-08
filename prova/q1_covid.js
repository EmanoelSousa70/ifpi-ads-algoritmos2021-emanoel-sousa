const input = require('prompt-sync')()

function main() {

//Entrada
let media14dias = Number(input('Digite a media de casos ha 14 dias: '))
    media_atual= Number(input('Digite a media de caso de hoje: '))

 // Processamento
    const classificacao = variacao(media14dias,media_atual)
    porcetagem = classificacao*100
    if(classificacao >= -0.15 && classificacao <= 0.15 ) {
        console.log('Em estabilidade apresentando o valor',`${porcetagem.toFixed(0)}%`)

    }else if(classificacao < -0.15 ){
        console.log('Em queda apresentando o valor',`${porcetagem.toFixed(1)}%`)

    }else if (classificacao > 0.15){
        console.log('Em alta apresentando o valor',`${porcetagem.toFixed(1)}%`)
    }


  function variacao(media14dias,media_atual){
    aumento = media_atual - media14dias
    fracao = aumento / media14dias
    return fracao
  }
}
main()
