function kilometerToMeter(kmVal){
    if( kmVal <= 0){
        return 0;
    }
    else{
        return kmVal*1000;
    }
}

var res = kilometerToMeter(6);
console.log(res);