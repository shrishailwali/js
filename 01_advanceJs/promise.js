// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const promiseOne = new Promise(function(resolve, reject){
    //DO an Async call
    setTimeout(function(){
        console.log('async task is Completed')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise Consumed')
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 completed')
        resolve()
    },2000)
}).then(function(){
    console.log('Async 2 resloved');
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name:"shrishaail",email:"shri@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            reslove({phoneNo:877456475,State:"Karnataka"})
        }
        else{
            reject({"error":"SOmething went wrong"})
        }
    },1000)
    
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.phoneNo
})
.then((User)=>{
    console.log(User);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Promise Done or Reject");
})



const pormiseFive = new Promise(function(reslove, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            reslove({isDOne:true, password:"Shri2222"})
        }
        else{
            reject({'error':'JS went wrong'})
        }

    },1000)
})

async function consumePromiseFive(){
    try {
        const responce = await pormiseFive
        console.log(responce)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getallUsers(){
//     try {
//         const responce = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = (await responce).json()
//         console.log(data);
//     } catch (error) {
//         console.log("e",error);
//     }
// }
// getallUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("Error", error);
})

