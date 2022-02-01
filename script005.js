//aula-18---------------JAVASCRIPT------------------------------>
//-----arraw function

const felizNatal = () => console.log('Feliz Natal!!')
felizNatal() 

//const saudacao = nome => "Fala " + nome + ", tudo bem?"
const saudacao = nome => `Fala ${nome}, tudo bem??` //
console.log(saudacao('Ludmila'))
 
const somar = numeros => {
    let total = 0
    for (let n of numeros){
        total += n
    }
    return total
}

console.log(somar([1,2,3,4,5,6,7,8,9,10]))  