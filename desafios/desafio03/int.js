// Variaveis com link as tegs do doc HTML
var valor1 = document.querySelector('#valor1')
var valor2 = document.querySelector('#valor2')
var passos = document.querySelector('#passos')
var contar = document.querySelector('#contar')
var res = document.querySelector('#res')
//-----


function contando(){
    res.innerHTML += `<br>`
    if( valor1.value <= 0 || valor2.value <= 0 || passos.value <= 0){
        //se houver erro 
        window.alert('Há um campo que falta ser preenchido. Por favor revise...')
    }
    else if(valor1 > valor2){
        //contagem progressiva
        for(var c = Number(valor1.value); c <= Number(valor2.value); c += Number(passos.value)){
            res.innerHTML += ` \u{1F449} ${c} `
        }
    }
    else{
        //contagem regressiva
        for(var c = Number(valor1.value); c >= Number(valor2.value); c -= Number(passos.value)){
            res.innerHTML += ` \u{1F449} ${c} `
        }
    }
}


// escuta
contar.addEventListener('click', contando)
//----