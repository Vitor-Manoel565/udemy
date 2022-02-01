//treinando funções

function sum(){
    console.log('soma entre 5 e 5 é igual a 10!')
}

function main(){
    sum()
}

main()

//function expression
const boaTarde = function(){
    console.log('Boa tarde!')
}
boaTarde()

//função com valor

function somar(a,b=0){
    return a + b
}

let resultado = somar(5,4) // let é mesma coisa que var 
console.log(resultado)

resultado = somar(3)
console.log(resultado)