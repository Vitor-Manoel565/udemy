//---------------------------------------DESAFIO 01--------------VITOR MANOEL------------------------------------------>
//-----------------------------------------------FUNÇÃO SOMA 3 4 5----------------------------------------------------->
//------------------------------------------FUNÇÃO CALCULAR 3 7 FN (+ * -) -------------------------------------------->

function soma(a,b,c){
    return a + b +c
}
// obs => errado pois foi usado somente uma função 
const res = soma(3,4,5)

console.log(res)

//---------------------------------- OU FORMA DO PROFESSOR ------------------------------------------------------------>
function somar(a){
    return function somar(b){
        return function(c){
            return a + b +c
        }
    }
}

const somarAB = somar(3)(4)
console.log(somarAB(13))
console.log(somar(3)(4)(5))

//-------------------CORRIGIDO------------------------------DESAFIO 02------------VITOR MANOEL-------------------------->

function calcular(x){
    return function(y){
        return function(fn){
            return fn(x , y)
        }
    }
}

function sub(d,e){
    return d - e
}

function som(f,g){
    return f + g
}

function mul(h,i){
    return h * i
}

const r1 = calcular(10)(5)(sub)
const r2 = calcular(10)(5)(mul)
const r3 = calcular(10)(5)(som)
console.log(r1)
console.log(r2)
console.log(r3)