var string2 = ['pisa','misaa','jabbur','kanailal','lkhjgcvhjbkn'];

function megaFriend(array){
    var longestStr = "";

    for ( var i = 0; i < array.length; i++){
        var element = array[i];
        if ( element.length > longestStr.length){
            longestStr = element;
        }
    }
    return longestStr;

}
var res = megaFriend(string2);
console.log(res);