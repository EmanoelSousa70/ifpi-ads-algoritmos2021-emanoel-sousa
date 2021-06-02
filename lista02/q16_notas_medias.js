
const input = require('prompt-sync')();

function main() {
  console.log('Avaliação escolar ');

  //Entrada
  let nota1 = Number(input('Primeira nota: ')),
    nota2 = Number(input('Segunda nota: '));

  let media = (nota1 + nota2) / 2;

  if (media >= 7) {
    
    console.log(' Aprovado!!! ');
  } else {
    
    let resultado = passar(media);

    if (resultado) {
      
      console.log('Voce foi Aprovado na prova final!')
    } else {
      
      console.log('Reprovado!')
    }
  }
}

main();

//processamento 
function passar(media) {
  let nota_prova_final = Number(input('Nota da prova final: '));
    if  (((nota_prova_final + media) / 2) >= 5) {
        return true
    }else{
        return false
    }
  
}