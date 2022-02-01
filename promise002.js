//setTimeout(function(){
 //   console.log('Executando callback..')

   // setTimeout(function(){
        
   // })

    //   console.log('Executando callback..')

   // setTimeout(function(){
        
   // })

    //   console.log('Executando callback..')

   // setTimeout(function(){
        
   // })
//}, 2000)

//Mesmo Promise só que com resolve

function esperarPor(tempo = 3000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise...')//executando promise depois de 3000 milisegundos(3segundos)
            resolve()//propiedade que resolve a promessa
        },tempo)
    }) 
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor)