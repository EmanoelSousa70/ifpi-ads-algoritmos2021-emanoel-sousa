const input = require('prompt-sync')()

function main(){
    let leitura_anterior = Number(input('Digite a Leitura Anterior(KWh): '))
        leitura_atual = Number(input('Digite a Leitura Atual(KWh): '))
        consumo = leitura_atual - leitura_anterior

    calcula_talao(consumo)
}
function calcula_talao(consumo){
    if (consumo <= 30){
        let valor_bruto_da_tarifa = 0
    } else if(consumo <= 100){
        let valor_bruto_da_tarifa = consumo * 0.59
    } else if(consumo > 100){
        let valor_bruto_da_tarifa = consumo * 0.75
    }
    let icms = (valor_bruto_da_tarifa * 0.25)
        pis_confis = (valor_bruto_da_tarifa * 0.15)
         iluminacao_publica = (valor_bruto_da_tarifa * 0.06)
    if (consumo < 80){
        iluminacao_publica = 0
    }
    let bandeira_amarela = Math.trunc(consumo / 100) * 8
         valor_total = valor_bruto_da_tarifa + pis_confis + icms + iluminacao_publica + bandeira_amarela

    console.log(' ------------------CONTA ENERGIA ---------------')
    console.log('Consumo:', `${consumo} KWh`)
    console.log('Valor Faturado: R$',`${valor_bruto_da_tarifa.toFixed(2)}`)
    console.log('Bandeira (Amarela): R$',`${bandeira_amarela.toFixed(2)}`)
    console.log('ICMS : R$',`${icms.toFixed(2)}`)
    console.log('PIS/CONFIS : R$',`${pis_confis.toFixed(2)}`)
    console.log('Taxa Iluminação: R$',`${iluminacao_publica.toFixed(2)}`)
    console.log('Valor Total à pagar: R$',`${valor_total.toFixed(2)}`)
}

main()
