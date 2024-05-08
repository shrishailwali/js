const coding = ["js", "ruby","java"]

// const values = coding.forEach((item)=>{    // for each will not return anything
//     console.log(item)
//     return item
// })

// console.log(values)   // undefined


const number = [1,2,3,4,5,6,7,8,9]
// const mynew = number.filter((num)=>num>4)   // without return statement
// console.log(mynew)

// const newnum = number.filter((num)=>{   // with return statements 
//     return num>4
// })

// console.log(newnum)



const newNumber =[]

number.forEach((num)=>{
    if (num>4){
        newNumber.push(num)
    }
})

console.log(newNumber)