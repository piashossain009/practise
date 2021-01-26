function addnumber(num1,num2){
    console.log(arguments);
    return num1 + num2;
}
var result = addnumber(3,4);
console.log(result);


function arg(num){
    var sum=0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = element + sum;
        
    }
    return sum;
}

var res = arg(4,5,6,1);
console.log(res);