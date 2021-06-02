var input = require('prompt-sync')()

function main(){

    var dia = Number(input('Informe o dia : ')) 
    var mes = Number(input('Informe o mês : ')) 
    var ano = Number(input('Informe o ano : ')) 
    var dia_nascimento = Number(input('Informe o dia de nascimento: ')) 
    var mes_nascimento = Number(input('Informe o mês de nascimento: ')) 
    var ano_nascimento = Number(input('Informe o ano de nascimento: ')) 

    var idade = Number(calcular_idade(dia, mes, ano, dia_nascimento, mes_nascimento, ano_nascimento))
    console.log(`A idade corresponde a ${idade} anos.`)
}

function calcular_idade(dia, mes, ano, dia_nasc, mes_nasc, ano_nasc) {

    var intervalo_anos = ano - ano_nasc
    if(dia >= dia_nasc && mes === mes_nasc){
        var idade = intervalo_anos 
        return idade

    }else if(dia < dia_nasc && mes === mes_nasc){
        var idade = intervalo_anos - 1
        return idade

    }else if(mes > mes_nasc){
        var idade = intervalo_anos 
        return idade 
    }else {
        var idade = intervalo_anos - 1
        return idade
    }
}
main()