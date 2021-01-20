var fibo = [0,1];
for (i = 2; i<=10; i++){
    fibo[i]= fibo[i-1] + fibo[i-2];
    
}
console.log(fibo);

// function 

function fibonacci(n){
    var fibo = [0,1];
for (i = 2; i<=n; i++){
    fibo[i]= fibo[i-1] + fibo[i-2];
    
}
return fibo;
}
var result = fibonacci(5);
console.log(result);

console.log("recursive way te fibonacci last element");

function refibonacci (n){
    if ( n == 0){
        return 0;
    }
    if ( n ==1 ){
        return 1;
    }
    else{
        return refibonacci(n-1) + refibonacci(n-2);
    }
}
var res = refibonacci(10);
console.log(res);

console.log("recursive way te fibonacci series");


