var business = 50;
var minister = 70;
var goruchor = 80;
 var res = Math.max(business,minister,goruchor);
 console.log(res);

 var marks = [23, 43, 45, 67, 67, 45, 35, 89, 45, 100];
 var max = marks[0];
 for ( var i=0; i<=marks.length; i++){
     var newmax = marks[i];
     if( newmax > max){
         max = newmax;
     }
 }
console.log(max);

var marks = [23, 43, 45, 67, 67, 45, 35, 89, 45, 100];
var min = marks[0];
for ( var i=0; i<=marks.length; i++){
    var newmin = marks[i];
    if( newmin < min){
        min = newmin;
    }
}
console.log(min);