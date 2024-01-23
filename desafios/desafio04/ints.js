function cal(){
    //c Criando as variaveis
    var valor1 = document.querySelector('#valor1')
    var res = document.querySelector('#res')
    if(Number(valor1.value) < 0 || valor1.value == '' ){
        window.alert('Adicione um valor para poder gerar a tabuada')
    }
    else{
        for(var somar = 1; somar <=10; somar++){
            res.innerHTML += ` ${valor1.value} + ${somar} = ${Number(valor1.value) + Number(somar)} <br>`
        }
        for(var sub = 1; sub <=10; sub++){
            res.innerHTML += ` ${valor1.value} - ${sub} = ${Number(valor1.value) - Number(sub)} <br>`
        }
    }
}


//escuta ----- 
var gt = document.querySelector('#gt')
gt.addEventListener('click', cal)
//------------