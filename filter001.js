//---------------------------------FILTER----------------------------------------//

//-------------filter é booleana------- bool - true and false para filtrar os elementos do array--------//

const carrinho = [
    {nome: 'Caderno', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco:680.20},
    {nome: 'Caderno', qtde: 2, preco: 29.90},
]
//---filtra os itens com quantidade maior que 0-----s
 const qtdeMaiorQueZero = item => item.qtde > 0

const itensValidos = carrinho.filter(qtdeMaiorQueZero)

console.log(itensValidos)

//-------------------filter 03----------------------------//
//---------essa opção também é válida para imprimir --------//

Array.prototype.meuFilter = function(fn){
    const novoArray = []

    for(let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const nomeItensValidos = carrinho.meuFilter(qtdeMaiorQueZero)
console.log(nomeItensValidos)