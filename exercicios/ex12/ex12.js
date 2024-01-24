/* let num = [5,6,2,'ola','mundo']
num.sort()
console.log(`A variavel num contem estes valores: ${num} o total de elementos que há dentro da variavel e ${num.length}`)
console.log(num[2]) */

var num2 = [5,7,6,1,9,2]
num2.sort()
for(var ps = 0; ps < num2.length; ps++){
    console.log(`A posição ${ps} tem o valor ${num2[ps]}`)
}
num2.push(100)
console.log(`O valor 100 está na posição ${num2.indexOf(100)}`)