// variaveis da primeira parte
var valor1 = document.querySelector('#valor1')
var simbolo = document.querySelector('#simbolo')
var valor2 = document.querySelector('#valor2')
var res = document.querySelector('#res')
var valorfinal = document.querySelector('#valorfinal')

//criando as funções

function cal(){
    simbolo = String(simbolo.value)

    if (simbolo == '+'){
        valorfinal.innerHTML = Number(valor1.value) + Number(valor2.value)
    }
    if (simbolo == '-'){
        valorfinal.innerHTML = Number(valor1.value) - Number(valor2.value)
    }
    if (simbolo == '*'){
        valorfinal.innerHTML = Number(valor1.value) * Number(valor2.value)
    }
    if (simbolo == '/'){
        valorfinal.innerHTML = Number(valor1.value) / Number(valor2.value)
    }
}

// criando as escutas 

res.addEventListener('click', cal)











