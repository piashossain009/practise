for (var i = 0; i < 10; i++) {
    console.log(i);
}

var num = [12, 13, 45, 67, 89, 34];

for (var i = 0; i < num.length; i++) {
    var element = num[i];
    console.log(element);
}

// switch case 

num = 60;

switch (num) {
    case 33:
        console.log("Fail");
        break;
    case 50:
        console.log("pass");
        break;
    case 80:
        console.log("a+");
        break;
    default:
        console.log("reject");
        break;
}