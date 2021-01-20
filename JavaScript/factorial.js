var factorial = 1;
for (var i = 1; i <= 10; i++) {
    factorial = factorial * i;
    console.log(i, factorial);

}


// function diye 

function factorialResult(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;


    }
    return factorial;

}

var res = factorialResult(4);
console.log(res);


// while loop 

var factorial = 1;
var i = 1;
while(i <=4){
    factorial = factorial*i;
    // console.log("While Loop",i);
    i++;
    
}
console.log(factorial);

// FUNCTION DIYE FACTORIAL 


function factoriall (num){

    var factorial = 1;
var i = 1;
while(i <=num){
    factorial = factorial*i;
    // console.log("While Loop",i);
    i++;
    
}
return factorial;

}

var factorialresu = factoriall(3);
console.log( factorialresu);