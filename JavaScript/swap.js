var a = 5;
var b= 10;
console.log("Before swap. a=",a," b=",b);
var temp;
temp = a;
a = b;
b = temp;
console.log("aftere swap. a=",a," b=",b);

// another formula 
var x = 15;
var y = 20;
console.log("beforere swap.x=",x," y=",y);
x = x + y;
y = x - y;
x = x - y;
console.log("aftere swap.Xa=",x," y=",y);

// special swap comdition for js 

var p = 50;
var q = 100;
console.log("before swap.P=",p," yQ",q);
[ p,q] = [ q, p];
console.log("aftere swap.P=",p," yQ",q);
