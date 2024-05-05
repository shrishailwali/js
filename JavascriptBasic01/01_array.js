// array  // objects 
 
// const myArray = [0,1,2,3,4,5,6]

// Shallow Copy : shallow copy of an object is a copy whose properties share the same reference

//Deap copy : do not share the same references


/* in array: array-copy operation create shallow copies  (all standard built-in copy operation with any 
     jaavascript object create a shallow copy) */

    // const myArry = new Array(1,2,3,4,5)
    // console.log(myArry)

// Array  Method

const myArry = new Array(1,2,3,4,5)
myArry.push(6)  // add new values in the array
myArry.push(7)
myArry.pop(7)  // remove the values in the array
myArry.unshift(9)   // add one values in the starting of array
myArry.shift()   // remove the first element
// console.log(myArry) 
// console.log(myArry.includes(9))

const newArr = myArry.join()
// console.log(myArry)
// console.log(newArr)



// Slice, Splice
//  slice() extracts elements into a new array without modifying the original
// splice() changes the contents of the original array

// console.log("A ", myArry)
const myn1 = myArry.slice(1,3)
// console.log(myn1)
// console.log("B ", myArry)

const myn2 = myArry.splice(1,3)
// console.log("c ", myArry)
// console.log(myn2)


// *************************************Array_02*************************************

const marvel_heros = ["thor", "IronMan", "spiderMan"]
const dc_heros =[ "superMan", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

const all_heros = marvel_heros.concat(dc_heros) // generate new array
// console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]  // spread
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,8],[4,5,6]]
const real_another_array = another_array.flat(Infinity)  // it will genarate new array
// console.log(real_another_array)

console.log(Array.from("shrishil"))
 /*[
    's', 'h', 'r',
    'i', 's', 'h',
    'i', 'l'
  ]*/
// console.log(Array.from({name:"shrishail"})) // interesting //[]


let score01 = 100
let score02 =200
let score03 = 300

// console.log(Array.of(score01, score02, score03))