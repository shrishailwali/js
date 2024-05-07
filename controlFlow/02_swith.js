// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 4
switch (month) {
    case 1:
        console.log('1')
        break;
    case 2:
        console.log('2')
        break;
    case 3:
        console.log('3')
        break;
    default:
        // console.log('result')
        break;
}


// ****************************falsy values and truly values****************************

// false values => false, 0, -0, BigInt, on,"", null, undefined, NaN

// truthy values => "0", 'false', " " => empty space, function(){} 


const emptyobj ={}

if (Object.keys(emptyobj).length===0){
    // console.log("empty object")
}


// Nullish Coalescing Operator (??): null undefined

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val
// val = 5 ?? 10 // 5
// val = null ?? 10 // 10
// val = undefined ?? 15  // 15

// val = null ?? 10 ?? 15  // 10 first values

// console.log(val)


// Terniary Operators 
// syntax :=> condition ? true : false


const iceTea = 100
// iceTea <=80 ? console.log("less then 80") : console.log("more then 80")




