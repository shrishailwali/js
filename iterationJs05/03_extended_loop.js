// for of

const arr = [1,2,3,4,5,6]
for (const iterator of arr) {
    // console.log(iterator)
}

// Map
// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.
const map = new Map()
map.set('a','b')
map.set('1','2')

// console.log(map)

for (const [key, value] of map){
    // console.log(key ,':-',value)
}


// -----------------------------object-------------------------------


// for of loop  ===> will giv the values

// for in => key 
const obj = {
    sub:"javascript",
    py :"python",
    c: "c language",
    j : "java"
}

for (let key in obj){
    // console.log(obj[key])   
}




// ***************************************For Each Loop *************************************

const coding=["JS", "Python", "C", "C++"] 

coding.forEach(function (item){
    // console.log(item)
})


function printMe(item){
    // console.log(item)
}

// coding.forEach(printMe)


// ======================================================

const language = [
    {
    language:"javascript",
    ext: "js"
   },
   {
    language:"Java",
    ext: "J"
   },
   {
    language:"Python",
    ext: "Py"
   }
]

language.forEach((item) =>{
    console.log(item.language)
})