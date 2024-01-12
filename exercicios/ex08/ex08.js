
var res = document.querySelector('#multa')
var bt = document.querySelector('#bt')

function vv() {
    var vel = document.querySelector('#vel')
    var vel2 = Number(vel.value)
    if(vel2 > 60){
        res.innerHTML = `Ta multado`
        res.innerHTML += `<p>Você está multado por favor acesse o site para mais informações</p>`
    }
    else {
        res.innerHTML = `Tudo nos conforme`
    }
    
} 

bt.addEventListener('click', vv)

