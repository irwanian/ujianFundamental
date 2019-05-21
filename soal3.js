function accum (a) {

    var x = ''
        for(var i = 0; i < a.length; i++){
            for(var j = i; j <= i; j++){
                x += a[i].toUpperCase()
            } for (var k = 1 ; k <= i; k++) {
                x += a[i]
            } if(a.length-1 > i) {
                x += '-'
            }
        }
    return x
}

console.log(accum('abcde'));



        
