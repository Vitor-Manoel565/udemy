function bomDia(){
    console.log('Bom dia!')
}


function exeQualquerCoisa(fn){
    console.log(typeof fn)
    //fn()
}

exeQualquerCoisa(3)

//2) Retornar uma função a parir de uma outra função

function potencia(base, exp){
    return Math.pow(base,exp)
}

const bits8 = potencia(2, 8)

console.log(bits8)