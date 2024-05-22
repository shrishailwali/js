// const setTime = function(){
// }

// const changeText = function(){
//     document.querySelector('h1').innerHTML='Best series'
// }

// const changeMe = setInterval(changeText, 2000 )

// document.querySelector('#stop').addEventListener('click', function(){
//     clearTimeout(changeMe)
//     console.log("STOPPED")
// })

// ===================================================================



const manageColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i<6; i++){
        color += hex[Math.floor(Math.random()*16)]
        
    }
    return color;
};
let intervalId
const startChangetheColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeColor,1000)
    }
    
    function changeColor(){
        document.body.style.backgroundColor = manageColor();
    }
    
};

const stopChangetheColor = function(){
    clearInterval(intervalId)
    intervalId =null;
}

document.querySelector('#start').addEventListener('click', startChangetheColor);

document.querySelector('#stop').addEventListener('click', stopChangetheColor)