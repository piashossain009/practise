var word = "I am pias  Hossain from  bogura  bangladdesh.";
var count = 0;
for ( i=0; i<word.length; i++){
    var char = word[i];
    if (char == " " && word[i-1] != " "){
        count++;
    }

}
count++;
console.log(count);