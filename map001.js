//------------------------------------------MAP------------------------

//--------transfere dados  de um vetor para outro------------//

 //--------[1,2,3,4,5] (map(*2)) [2,4,6,8,10]--------------

 const nums = [1,2,3,4,5]
 const dobro = (n,i) => n * 2  
 console.log(nums.map(dobro))

 const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
 const primeiraLetra = texto => texto[0]
 const letras = (nomes.map(primeiraLetra))
 console.log(nomes, letras)

 //-------------------------Carrinho de compras------------------------

 //                 Vai multiplicar quantidade de item com o valor

 const carrinho = [
    {nome: 'Caderno', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco:680.20},
    {nome: 'Caderno', qtde: 2, preco: 29.90},
]

const getNome = item => item.nome
console.log("\n------------Itens adicionados no carrinho--------------->")
console.log(carrinho.map(getNome))


const getTotal = item => item.qtde * item.preco
console.log("\n-------------- Valores a serem pagos ------------------------>")
const totais = carrinho.map(getTotal)


console.log(totais)

//Array.prototype.meuMap = function(fn){
  //  const novoArray = []
    //for(let i = 0; i < this.length; i++){
      //  const resultado = fn(this[i], i , this)
        //novoArray.push(res)
        //return novoArray
    //}  
//}