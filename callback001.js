//----------------------------AULA19----------CALLBACK------------------------------------------//

function exec(fn,a,b){
    return fn (a,b)
}

const somarNoTerminal = (x,y) => console.log(x + y) 
const subtrairNoTerminal = (w,z) => console.log (w - z)

exec (somarNoTerminal, 56, 38) //callback , passando uma função dentro de outra 
exec (subtrairNoTerminal, 187, 27)
const subtrair = (w,z) => W - z


//Executa em 1000 mili segundos (setInterval)
setInterval(function(){
    console.log('Execultando3...')
},1000)

