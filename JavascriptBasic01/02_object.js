// signalton --> from construct 
// object.create

// object literals 

const mySum = Symbol("key1")    // symbol need to writer in objecct like [mySum]

const jsUser ={
    name_ : "shrishila",
    age : 25,
    [mySum] : "myKey1",  // symbol is primitive type unique identifier
    location : "Vijayapur",
    email: 'shrishail@googl.com'
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySum])

jsUser.email = 'shrishail@chatgpt.com'
// Object.freeze(jsUser)  // freeze the object it will not modify after this line

jsUser.email = "shrishil@gmail.com"   // here we are manipulate the email but it will not change the object becaue we freezed the object
// console.log(jsUser)


jsUser.greeting = function(){
    console.log('hello js server');
}

jsUser.greetingTwo = function(){
    console.log(`hello js Users, ${this.name_}`);
}




console.log(jsUser.greeting());

console.log(jsUser.greetingTwo())



