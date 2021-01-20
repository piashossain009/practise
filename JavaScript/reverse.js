function reverse(str){
    var rev = "";
    for ( i = 0; i<str.length; i++){
        var char = str[i];
        rev = char + rev;
    }
    return rev;
}

var news = reverse(".niassoH saiP ma I");
console.log(news);