function getMiddle(a) {
    var hasil = 0
    var med1 = Math.ceil(a.length/2)-1
    var med2 = (a.length/2)-2
        if (a.length %2 !==0){
            hasil= med1
            return a[hasil]
        }else if(a.length % 2 ==0 ){
            var index2 = Math.ceil((med1 + med2)/2)
            hasil = index2
            return a[hasil]
        }
}
console.log(getMiddle('kerasaktitakpernahberhentibertindaksesukahati'))