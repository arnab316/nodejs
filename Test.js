//  try, catch , throw finally 


// error most handle when you Work oyther data source or user input 

// try{}: statement let's you test a block of code of errors
// catch {}: statement lets you handle those error
// throw sttement lets you create custom error
// and finally statement let's you execute code after try and catch

/*
try {
    console.log('start with try....');
    unicycle;
    console.log('end with try never reach');
} catch (error) {
   console.log('this is a error '+ error); 
}finally{
    console.log('this always run finally ');
}

console.log('code end..........');  */




let json = '{"age":30,}';
try {
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete data : no name")
    }
    console.log(user.name);

} catch (e) {
   console.log("json Erroe-- :"+ e ); 
}