function mudar(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#img')
    var body = document.body
    var hora = new Date()
    var horaatual =  hora.getHours()
    msg.innerHTML = `Agora são exatamente ${horaatual} horas`
    if ( horaatual >= 5 && horaatual <=12){
        img.src = 'imagens/foto-manha.jpg'
        body.style.background = '#e2cd9f'
    }
    else if (horaatual >=13 && horaatual <= 16){
        img.src = 'imagens/foto-tarde.jpg'
        body.style.background = '#b9846f'
    }
    else if (horaatual >= 17){
        img.src = 'imagens/foto-noite.jpg'
        body.style.background = 'lightblue'
    }
    else{}
}

