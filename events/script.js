// document.getElementById('forge').onclick=function(){
//     alert('clocked')
// }
//attachEvent()
//jQuery - on
//type, timestamp, defultPrevented
//target, toElement, srcElement, currectTargate
//clintX, clintY, screenX, screenY
//altKey, ctrKey, shiftKey, KeyCode


// Event Propagation => two context 1) Even Capturing-True and event Bubbling- False 


// ==============================event Bubbling- False======================================

// document.getElementById('image').addEventListener('click', function(e){
//      console.log('clicked')
// },false)
// document.getElementById('forge').addEventListener('click', function(e){
//     console.log('clicked Forge')
// },false)
//By defult False will be there and it is event Bubbling (False) if we clicked on the forge first-clicked forge then clicked


// ==================================Even Capturing-True===============================
// document.getElementById('image').addEventListener('click', function(e){
//     console.log('clicked')
// },false)
// document.getElementById('forge').addEventListener('click', function(e){
//    console.log('clicked Forge')
//    e.stopPropagation()  // another event will not propagate 
// },false)
// it is event Capturing (True) if we clicked on the forge first-clicked  then clicked forge

// document.getElementById('google').addEventListener('click', function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     // console.log('clicked prevented');
// },false)



document.querySelector('#image').addEventListener('click', function(e){
    console.log(e.target.tagName)
    if (e.target.tagName=='IMG'){
        let removit = e.target.parentNode
        // removit.remove()
        removit.parentNode.removeChild(removit)
    }
    
})