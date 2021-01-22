var friendsAge = [14, 17, 18, 20];
console.log("All array set");
console.log(friendsAge);
console.log("2 no index e koto ache")
console.log(friendsAge[2]);

var singleFriendsAge = friendsAge[3];
console.log(singleFriendsAge);

// change 17 to 27
console.log("change 17 to 27");
friendsAge[1] = 27;
console.log(friendsAge);

// search position 
console.log("search array")
var position = friendsAge.indexOf(18);
console.log(position);

// array push in index 
console.log(friendsAge);
console.log(friendsAge.length);
 friendsAge.push(15,19);
console.log(friendsAge);
 console.log(friendsAge.length);

//  array pop 
friendsAge.pop();
console.log(friendsAge);


// push in first
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.unshift("Lemon", "Pineapple");
console.log(fruits);


// pop in first 
fruits.shift();
console.log(fruits);



fruits.push("kola","aam", "jam", "lichu");
console.log(fruits);


// slice 
var ss = fruits.slice(2,5);
console.log(ss);






