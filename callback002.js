const fs = require('fs')
const path = require('path')
//bibliotecas 

 const caminho = path.join(__dirname, 'dados.txt')

 //toString mostra conteudo que está escrito no arquivo
function exibirConteudo(err, conteudo){
    console.log(conteudo.toString())
}

//console.log('Inicio...')
 //fs.readFile(caminho,exibirConteudo)
 //fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString())) //também imprime o conteudo do arquivo txt
 //console.log('Fim...')-->


 console.log('Inicio Sync...')
 const conteudo = fs.readFileSync(caminho)
 console.log(conteudo.toString())
 console.log('Fim Sync...')

 //-----------------------------------PRÁTICA--------------------------------->

 const rota = path.join(__dirname)

