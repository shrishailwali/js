const Books = [
{
  title:"Book FIrst", genre:"First", publish:2000,edition:1998
},
{
    title:"Book Second", genre:"Second", publish:2009,edition:2000
  },
  {
    title:"Book third", genre:"third", publish:2002,edition:2002
  },
  {
    title:"Book fourths", genre:"four", publish:2006,edition:2004
  },
  {
    title:"Book five", genre:"five", publish:1000,edition:1000
  },
  {
    title:"Book six", genre:"six", publish:3000,edition:3000
  },
]
  
// let userBook = Books.filter((bk)=>bk.genre === 'six' && bk.genre === 'five')  // without return statements 
let genresToFilter = ['six', 'five'];
let userBook = Books.filter((bk) => genresToFilter.includes(bk.genre));

userBook = Books.filter((bk)=>{ 
    return bk.publish>=2000        // return statement 

}) 
// console.log(userBook)

// const myNumber =  [1,2,3,4,5,6,7,8,9]
// const newNum = myNumber.map((num)=> num+10)
// console.log(newNum)

// const newNum = myNumber.map((num)=> {
    // return num+10})
// console.log(newNum)



  
// ------------------------------------Chining -----------------------

const myNumber =  [1,2,3,4,5,6,7,8,9]

const newNum = myNumber
                      .map((num)=> num *10)
                      .map((num)=> num + 1)

console.log(newNum)

//-----------------------------------Reduce js----------------------------

const power = [1,2,3,4,5]
const myTotal = power.reduce((acc, currvalue)=>{
    console.log(`acc:${acc} and Current Value: ${currvalue}`);
    return acc + currvalue
}, 0)

console.log(myTotal)