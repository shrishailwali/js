// Immediately Invoked Function Expression (IIFE)

// ()()// function immediately invok is called IIFE  

//  Syntax : (function definition)()

(function chai (){
    console.log('DB Connected');      // Named IIFE
})(); 

// some time Global scope pollution, prevent pollution of the global JS scope

((name)=>{
    console.log(`db Connected ${name} `)   // Parameter IIFE
})('shrishail')

// =====================================Execution Context===================================

