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
    if(lista.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adcop(){
    if(Numero(valor.value) && !numlista(valor.value, elemento)){
        elemento.push(Number(valor.value))
        elemento.sort()
        var p = document.createElement('option')
        p.innerHTML = `Valor ${valor.value} adicionado`
        select.appendChild(p)
        divres.innerHTML = ''
    }
    else{
            window.alert('Campo está em branco ou numero ja existe na lista!!!')
    }
    valor.value = ''
    valor.focus()
}

adicionar.addEventListener('click', adcop)

function final(){
    
    divres.innerHTML += `<p>O total de valores na lista é ${elemento.length}</p>`
    var maiorvalor = elemento[0]
    var menorvalor = elemento[0]
    var soma = 0
    for( var pos in elemento){
        soma += elemento[pos]
        if(elemento[pos] > maiorvalor){
            maiorvalor = elemento[pos]
        }
        if(elemento[pos] < menorvalor){
            menorvalor = elemento[pos]
        }
    }
    divres.innerHTML += `<p>O maior valor informado é: ${maiorvalor}</p>`
    divres.innerHTML += `<p>O menor valor informado é: ${menorvalor}</p>`
    divres.innerHTML += `<p>A soma de todos o valores é: ${soma}</p>`
    divres.innerHTML += `<p>A media dos valores é: ${soma/elemento.length}</p>`
}

finalizar.addEventListener('click', final)



    




