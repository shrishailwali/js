// Primitive and non-Primitive datatypes

//Primitive Datatype (7 types): String, Number, Boolean, Null, undefined, Symbol, BigInt

// Javascript is a Dynamic Typed language Because Typed checked during the code Execute 


// console.log('hi')
const score = 100;
const scoreValue = 100.3

let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.table(id === anotherId);

// Reference Type (Non-Primitive datatypes): Array, Objects, Functions

const heros= ['Shaktian','shri', 'sachin'];
let  muobj ={
    name: "SHrishail",
    age:25,
}

const myFunction = function(){
    console.log("Function")
}


// *********************************Memory******************************************

// Stack (Primitive), Heap (non-Primitive)
 // Stack : copy 
 // Heap : Reference 

 let name_ = "Shrishail";
 let anotherName = name_;
 anotherName = "Shri"
//  console.log(name_);
//  console.log(anotherName)

let userOne ={
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email ="user@gmail.com"

console.log(userOne)
console.log(userTwo)