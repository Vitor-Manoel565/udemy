//------------------------------------------------------------ CÓDIGOS JS ---------------------------------------------------------//  

function fn4(){
    console.log('conteudo da function fn4')
}

function fn1(){ //fn1 recebe valor de fn2
    fn2()
}

function fn2(){ //fn2 recebe valor fn3
    fn3()
}

function fn3(){ //imprime fn3
    console.log('fn3')
    console.log('Aqui estou imprimindo conteudo da função fn3')
}

function main(){
    fn1()//main rece fn1 que tem parametro fn3, logo imprimi-se fn3
    fn4()
}
main()//

