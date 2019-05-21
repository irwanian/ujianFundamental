function getMiddle(a) {
    var med = a.split
    var hasil = ''
        if (med.length %2 !==0){
            hasil = med[Math.floor(med.length/2)]
        }else if(med.length % 2 ==0){
            var med1 = med[med.length/2]
            var med2 = med[(med.length/2)-1]
            med = (med1 + med2)/2
        }return hasil
}
console.log(getMiddle('badav'));











