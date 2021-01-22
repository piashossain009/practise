function hotelCost(days){
    var cost = 0;
    if ( days <= 0 ){
        return 0;
    }
    else if( days <= 10){
        cost = days*100;
    }
    else if( days <= 20){
        var first10days = 10*100;
        var remainsdays = days - 10;
        var second10days = remainsdays*80;
        cost = first10days + second10days;
    }
    else{
        var first10days = 10*100;
        var second10days = 10*80;
        var remainsdays = days - 20;
        var restofdays = remainsdays*50;
        cost = first10days + second10days + restofdays;
    }
    return cost;
}

var res = hotelCost(21);
console.log(res);