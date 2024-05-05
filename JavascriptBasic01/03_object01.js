// const tinderUser = new Object()  // signalton object

const tinderUser ={}  // non singalton object

tinderUser.id = '123abc'
tinderUser.name_ ='shrishail'
// console.log(tinderUser)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2) // assign is a static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const obj3 = {...obj1, ...obj2}   //spread
// console.log(obj3)

// console.log(Object.keys(tinderUser));  // object key
// console.log(Object.values(tinderUser)); // object values
// console.log(Object.entries(tinderUser));  // key and values



// *******************************Object_04****************************************************
// De-structure 
const cource ={
    courceName : "js",
    price : 1000,
    Insrtctor:'self'
}
// const {Insrtctor} = cource
const {Insrtctor:inst} = cource
console.log(inst)

