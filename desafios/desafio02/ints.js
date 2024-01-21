var funcao = document.querySelector('#verificar')

function ver(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#ano')
    var res = document.querySelector('#res')
    
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Erro')
    }
    else{
        var sex = document.getElementsByName('selec')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'ft')
    if(sex[0].checked){
        genero = 'Homem'
        if(idade <= 10){
            //criança
            img.setAttribute('src', 'imagens/crianca-m.jpg')
        }
        else if(idade <= 18){
            //jovem
            img.setAttribute('src', 'imagens/jovem-m.jpg')
        }
        else if(idade <= 50){
            //adulto
            img.setAttribute('src', 'imagens/adulto-m.jpg')
        }
        else{
            //velho (a)
            img.setAttribute('src', 'imagens/velho-m.jpg')
        }
    }
    else if(sex[1].checked){
        genero  = 'Mulher'
        if(idade <= 10){
            //criança
            img.setAttribute('src', 'imagens/crianca-f.jpg')
        }
        else if(idade <= 18){
            //jovem
            img.setAttribute('src', 'imagens/jovem-f.jpg')
        }
        else if(idade <= 50){
            //adulto
            img.setAttribute('src', 'imagens/adulto-f.jpg')
        }
        else{
            //velho (a)
            img.setAttribute('src', 'imagens/velha-f.jpg')
        }
    }
    
    res.innerHTML = `Detectamos ${genero}, com a idade de ${idade} anos`
    res.appendChild(img)
}
}

var escuta = funcao.addEventListener('click', ver)

