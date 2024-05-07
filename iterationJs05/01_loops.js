// for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     // console.log(element)
    
// }

for (let i =0; i<=5; i++){
    const element = i;
    if (element == 5){
        // console.log(element,'element')
    }
    // console.log(element)
}

for (let i = 0; i<=2; i++){
    // console.log(i,'outer')
    for(let j = 0; j<=2; j++){
        // console.log(j,'inner loop')

    }
}

let myArray = ["one", "two", "three"]

for (let index = 0; index < myArray.length; index++){
    const element = myArray[index]
    // console.log(element)
}

// break and Continue 

for (let index = 1; index <= 10; index++){
    if (index == 5){
        // console.log("detect")
        break    //   termination loop immediately 
    }
    // console.log(index)
}

for (let index = 1; index <= 10; index++){
    if (index == 5){
        // console.log("detect")
        continue    //   it will skip the correct loop and will continue remaining thing's 
    }
    // console.log(index)
}


