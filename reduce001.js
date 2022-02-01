//------------------------------REDUCE--------------------------------//

//----------- Armazena o valor das duas posições anteriores na próxima do array-------------//
//-----(0,3) = 5 ----- (3, 2) = 5 ----- (5,5) = 10 ------- um map mas com funções de pegar posições anteriores em arrays---pode transformar um array em number ou qualquer coisa

const carrinho = [
    {nome: 'Caderno', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco:680.20},
    {nome: 'Caderno', qtde: 2, preco: 29.90},
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => {
    console.log(acc, el)
    return acc + el
}

const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar)

//-----------------passando valor inicial (somar,0)---------------------
console.log(totalGeral)

//-----------------adicionando reduce pós exercicio----------------------
Array.prototype.meuReduce = function(fn, inicial){
    let acc = inicial

    for(let i = 0; i < this.length; i++){
        if(!acc && i === 0){
            acc = this[i]

        }else{
            acc = fn(acc, this[i],i , this)
        }
    }
}
