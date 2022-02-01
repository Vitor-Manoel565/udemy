const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco:649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Caderno', qtde: 1, preco: 19.20, fragil: true},
]

//filter, map, reduce

//1. fragil: true
//2. qtde * preco -> total
//3. media totais

const media = carrinho  
    .filter(item=> item.fragil) //quantidade de true
    .map(item => item.qtde * item.preco) //total sem media 
    .reduce((acc, el)=>{ //calcula a media
        const novaQtde = acc.qtde + 1
        const novoTotal = acc.total + el
        return {
            qtde: novaQtde,//quantidades de itens que são frageis == true 
            total: novoTotal,//o valor total 
            media: novoTotal / novaQtde //media final que é total dividido pela quantidade de itens frageis
        }
    }, {qtde:0, total:0,media:0})

    console.log(media) 
   