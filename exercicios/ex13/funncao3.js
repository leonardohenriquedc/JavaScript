var v = function(n) {
    let fat = 1 
    for(var c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(v(5))