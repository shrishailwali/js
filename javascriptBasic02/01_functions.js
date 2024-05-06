function addTwoNumber(number1, number2){
    // let result = (number1+number2)
    // return result
    return number1+number2
}
const result = addTwoNumber(2,4)
// console.log("result :", result)


function logInUserMessage(userName='sam'){
    if (userName===undefined){
        console.log("please enter the user name")
        return
    }
   return `${userName} just logged in`
}

// console.log(logInUserMessage())

// function calculateCartPrice(...num1){   //... rest operators (spread operator)
//     return num1
// }

// console.log(calculateCartPrice(2, 4,5))



function calculateCartPrice(val1, val2,...num1){   //... rest operators (spread operator)
    return num1
}

// console.log(calculateCartPrice(2, 4,5))

const user ={
    name_:"shrishail",
    age : 25
}

function handleObject(anyObject){
    console.log(`name ${anyObject.name_} and age ${anyObject.age}`)
}

// handleObject(user)

