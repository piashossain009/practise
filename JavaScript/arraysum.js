var marks = [23, 43, 45, 67, 67, 45, 35, 89, 45, 100];
var sum=0;

for(var i=0; i < marks.length; i++){
    var elementt = marks[i];
    sum = sum + elementt;

}
console.log(sum);


function arraysum(number){
    var sum=0;

for(var i=0; i < number.length; i++){
    var elementt = number[i];
    sum = sum + elementt;

}
return sum;

}
 var result = arraysum([1,2,3,4]);
 console.log(result);