const users ={
    userName : 'shrishail',
    price : 999,
    welcomWebsite : function(){
        // console.log(`${this.userName} and ${this.price}`)
        // console.log(this)
    }
}
users.welcomWebsite()
users.userName = 'sam'
users.welcomWebsite()
// ===================================
// console.log(this) // outside contest will be empty {}


// function chai(){
//     userName = 'shrishail'
//     // console.log(this.userName) // this will not use in the function => undefined 
// }

// chai()

// const chai = function(){
//     let userName ='shri'
//     // console.log(this.userName) //undefined 
// }


const chai = () => {
    let userName ='shri'
    // console.log(this.userName)  //undefined 
}
// chai()


// const addTwo = (num1, num2)=>{
//     return num1+num2
// }
// console.log(addTwo(2,4))

// const addTwo1 = (num1, num2)=> num1+num2   // implicit return 
// console.log(addTwo(2,4))

// const addTwo = (num1, num2)=> (num1+num2)   // implicit return No need to return statement 
// console.log(addTwo(2,4))

// How to return the Object implicit 
// const addTwo = (num1, num2)=> ({UseName:'shris'} )  // implicit return parenthesis should be there
// console.log(addTwo(2,4))

