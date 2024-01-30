// criando as variaveis 

var login = document.querySelector('#eml')
var senha = document.querySelector('#senha')
var entrar = document.querySelector('#entrar')
var main = document.querySelector('#main')

var dados = []

function logado(){
    if(login.value == '' || senha.value == ''){
        window.alert('Algum campo está em branco por favor preencha!')
    }
    else{
        dados.push(login.value)
        dados.push(senha.value)
        console.log(dados)
        main.innerHTML = ''
        main.innerHTML += '<p> Você está logado!</p>'
    }
}



entrar.addEventListener('click', logado)