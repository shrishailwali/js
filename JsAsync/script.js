const setTime = function(){
}

const changeText = function(){
    document.querySelector('h1').innerHTML='Best series'
}

const changeMe = setInterval(changeText, 2000 )

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("STOPPED")
})