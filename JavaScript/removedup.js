var n = [ 1,2,3,4,5,2,7,8,2,4,1,6,7,8,9,10];
var uniq = [];
for( var i = 0; i < n.length; i++){
    var element = n[i];
    var index = uniq.indexOf(element);
    if( index == -1){
        uniq.push(element);
    }
}
console.log(uniq);