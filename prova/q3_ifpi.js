const input = require('prompt-sync')()

function main() {

//Entrada
  let nota1 = Number(input('Primeira nota: '))
      nota2 = Number(input('Segunda nota: '))
      nota3 = Number(input('Nota das atividades: '))

  let media_ponderada = ((nota1*0.2) + (nota2*0.3) + (nota3*0.1)) / 0.6

//Processamento
  if (media_ponderada >= 7) {  
    console.log('Aprovado! com media de',media_ponderada.toFixed(1))
  }else if (media_ponderada < 4){
    console.log('Reprovado!')
  }else{passar(media_ponderada)}

  
  function passar(media_ponderada){
    let nota_prova_final = Number(input('Nota da prova final: '))
        pf_media = (nota_prova_final + media_ponderada) / 2
        if (pf_media >=6){
            console.log(`com media de ${pf_media.toFixed(1)}voce foi aprovado!`)
        }else{
             console.log(`com media de ${pf_media.toFixed(1)} voce foi reprovado!`)
        }
    }
  }
  main()