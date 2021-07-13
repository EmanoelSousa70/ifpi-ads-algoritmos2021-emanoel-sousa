const input = require('prompt-sync')()

function main(){
        let nome = input('Nome de vendedor: ')
        total_vendas = Number(input('Digite o valor total vendas no mês: R$'))
        comissao_faixa_1 = Number(comissao_primeira_faixa(total_vendas))
        comissao_faixa_2 = Number(comissao_segunda_faixa(total_vendas))
        comissao_faixa_3 = Number(comissao_terceira_faixa(total_vendas))
        comissoes = comissao_faixa_1 + comissao_faixa_2 + comissao_faixa_3

    console.log('----- PINTOS -----')
    console.log('Funcionário',nome)
    console.log('Valor total de vendas: R$ $',total_vendas)
    console.log('Comissão primeira faixa : R$ ',`${comissao_faixa_1.toFixed(2)}`)
    console.log('Comissão segunda faixa : R$', `${comissao_faixa_2.toFixed(2)}`)
    console.log('Comissão terceira faixa : R$',`${comissao_faixa_3.toFixed(2)}`)
    console.log('Valor total da comissão: R$', `${comissoes.toFixed(2)}`)
    console.log('Salário final: R$', `${(1100 + comissoes).toFixed(2)}`)
}

function comissao_primeira_faixa(total_vendas){
    if (total_vendas <= 5000 || total_vendas > 30000){
        comissao_faixa_1 = 0
    } else if (total_vendas > 10000 && total_vendas <= 30000){
        comissao_faixa_1 = 250
    } else{
        comissao_faixa_1 = (total_vendas - 5000) * 0.05
    }
    return comissao_faixa_1
}
function comissao_segunda_faixa(total_vendas){
    if (total_vendas <= 10000 || total_vendas > 30000){
        comissao_faixa_2 = 0
    } else{
        comissao_faixa_2 = (total_vendas - 10000) * 0.1
    }
    return comissao_faixa_2
}
function comissao_terceira_faixa(total_vendas){
    if (total_vendas > 30000){
        comissao_faixa_3 = total_vendas * 0.2
    } else{
        comissao_faixa_3 = 0
    }
    return comissao_faixa_3
}
main()
