// Criando as variaveis 

var valor = document.querySelector('#valor')
var adicionar = document.querySelector('#adc')
var select = document.querySelector('#res1')
var divres = document.querySelector('#res2')
var finalizar = document.querySelector('#fin')
var elemento = []

function Numero (n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function numlista(n, lista){
    if(lista.indexOf(n) != -1){
        return true
    }
    else{
        return false
    }
}

function adcop(){
    if(Numero(valor.value) && numlista(valor.value, elemento)){
        window.alert('tudo ok')
        
    }
    else{
            window.alert('ta faltando fi')
    }
}

adicionar.addEventListener('click', adcop)




    




