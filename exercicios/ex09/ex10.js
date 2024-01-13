var agora = new Date()
var hr = agora.getHours()
console.log(`Agora são ${hr} Horas`)
if (hr >=5 && hr <= 12){
    console.log('Bom dia!')
}
else if (hr > 12 && hr < 18){
    console.log('Boa tarde!')
}
else{
    console.log("Boa noite!")
}