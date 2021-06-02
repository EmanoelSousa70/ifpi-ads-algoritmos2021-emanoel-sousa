const input = require('prompt-sync')();

  // Entrada
  let angulo1 = Number(input('Digite o 1° ângulo: ')),
    angulo2 = Number(input('Digite o 2° ângulo: ')),
    angulo3 = Number(input('Digite o 3° ângulo: '));

  if (eh_triangulo(angulo1,angulo2,angulo3)){
    console.log('é um triangulo')  

    const tipo = tipo_triangulo(angulo1,angulo2,angulo3)
    console.log(tipo)
  }else{
    console.log('não é um triangulo')
  }
  function eh_triangulo(ang1,ang2,ang3){
    const soma = ang1 + ang2 + ang3 

    if (soma === 180){
      return true
    }else{
      return false
    }
  }

  function tipo_triangulo(ang1, ang2 , ang3){
    if (ang1 < 90 && ang2 < 90 && ang3 < 90 ) {
      console.log('E acutangulo')
    }else if (ang1 === 90 || ang2 == 90 || ang3 === 90){
      console.log('É retangulo')
    }else if (ang1 > 90 || ang2 > 90 || ang3 > 90){
      console.log('È obtusangulo')
    }
  }