function cal(){
    //c Criando as variaveis
    var valor1 = document.querySelector('#valor1')
    var res1 = document.querySelector('#res1')
    var res2 = document.querySelector('#res2')
    var res3 = document.querySelector('#res3')
    var res4 = document.querySelector('#res4')
    //-------
    
    if(Number(valor1.value) < 0 || valor1.value == '' ){
        window.alert('Adicione um valor para poder gerar a tabuada')
    }
    else{
        res1.innerHTML = ''
        //Somar
        for(var somar = 1; somar <=10; somar++){
            var options = document.createElement('option')
            options.text = ` ${valor1.value} + ${somar} = ${Number(valor1.value) + Number(somar)}`
            options.value = `tab ${somar}`
            res1.appendChild(options)
        }
        //Subtrair
        res2.innerHTML = ''
        for(var sub = 1; sub <= 10; sub++){
            var options = document.createElement('option')
            options.text = ` ${valor1.value} - ${sub} = ${Number(valor1.value) + Number(sub)}`
            options.value = `tab ${sub}`
            res2.appendChild(options)
        }
        // Dividir
        res3.innerHTML = ''
        for(var div = 1; div <= 10; div++){
            var options = document.createElement('option')
            options.text = ` ${valor1.value} / ${div} = ${Number.parseInt(Number(valor1.value) / Number(div))}`
            options.value = `tab ${div}`
            res3.appendChild(options)
        }
        //Multiplicação 
        res4.innerHTML = ''
        for(var mult = 1; mult <= 10; mult++){
            var options = document.createElement('option')
            options.text = ` ${valor1.value} * ${mult} = ${Number(valor1.value) * Number(mult)}`
            options.value = `tab ${mult}`
            res4.appendChild(options)
        }
    }


}


//escutas ----- 
var gt = document.querySelector('#gt')
gt.addEventListener('click', cal)
//------------