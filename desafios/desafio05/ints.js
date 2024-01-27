// Criando as variaveis 

var valor = document.querySelector('#valor')
var adicionar = document.querySelector('#adc')
var select = document.querySelector('#res1')
var divres = document.querySelector('#res2')
var finalizar = document.querySelector('#fin')
var elemento = []


//-------
function adcoption(){
    elemento.push(Number(valor.value))
    var option = document.createElement('option')
    option.text= `Valor ${valor.value} adicionado`
    select.appendChild(option)
    
}

adicionar.addEventListener('click', adcoption)

//------


//------
function contarop(){
    var p = document.createElement('p')
    p.innerHTML = `O total de valores é: ${elemento.length}`
    res2.appendChild(p)

    var cont = elemento.length
    elemento.sort()
    var p2 = document.createElement('p')
    p2.innerHTML = `O maior valor é ${elemento[cont-1]}`
    res2.appendChild(p2)

    var p3 = document.createElement('p')
    p3.innerHTML = `E o menor valor é ${elemento[0]}`
    res2.appendChild(p3)

    var p4 = document.createElement('p')
    for(var c = cont; c >= 0; c--){
        var valor2 = 0
        valor2 += elemento[c]
    }
    p4.innerHTML = `Somando todos o valores fica: ${valor2}`
    res2.appendChild(p4)
}

finalizar.addEventListener('click', contarop)
console.log(elemento)





    




