// {
            //  Block Scope
// }


let a = 40 // global Scope global scope will available in the block scope but we can't access the block scope varibale out sode the block

if (true){
    let a =10
    const b =20
    // var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const userName = "Shrishail"

    function two(){
        const website = "shrishailYouTube"
        console.log(userName)
        console.log(website)
    }
    two()
}
// one()

if(true){
    const Username = 'shrishail';
    if (Username === 'shrishail'){
        const website = 'youTube';
        // console.log(Username)
        // console.log(website)
    }
}


//*****************************************Interesting ******************************//

// console.log(addon(5))  // before function we are calling function then also it is working 
function addon(num){
    return num +1
}

// console.log(addon22(4))  // there we are storeing function in one variable, this will throw erro Cannot access 'addon22' before initialization
const addon22 = function(num){
    return num+1
}
