//--------------AULA PROMISE---------------------//

//---função Promise(promessa)-pode ser objeto até mesmo lista!

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Vitor','Manoel'])
    //cumprirPromessa({
        //x:1,
      //  y:5
    //})
})

//----
p.then(function(valor){
    //console.log(valor.x)
    console.log(valor)
})

function primeiraLetra(string){
    return string[0]
}

const letraMaiscula = letra => letra.toLowerCase()

  .then(primeiraLetra)
  .then(console.log)