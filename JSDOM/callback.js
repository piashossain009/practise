function callback( name, age, task){
    console.log(name);
    console.log(age);
    //console.log(task);
    task();
}

function amother(){
    console.log('this is another');
}

function another(){
    console.log('This is another 2');
}

callback('asdfg',22, amother);
callback('kjhg',56, another);