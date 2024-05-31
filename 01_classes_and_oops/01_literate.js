const users = {
    userName:"Shrishail",
    password:1234,
    user: function(){
        // console.log({User:"superUser"})
        console.log(this.userName)
    }

}
// console.log(users.password)
// console.log(users.user())

// ================================constructor function==========================
function User_(Username, loginCount, isLoggedin){
    this.Username = Username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;
    return this
}

const userOne = new User_("Shrishail",12,true)
const userTwo = new User_("Shri", 11, false)
// console.log(userOne)
// console.log(userTwo)



function mult5(num){
    return num*5
}

mult5.power= 5
// console.log(mult5(3))
// console.log(mult5.prototype)


function createUser(UserName, Score){
    this.UserName = UserName
    this.Score = Score
}

createUser.prototype.increments = function(){
    score++
}
createUser.prototype.primtMe=function(){
    console.log(`User ${this.score}`);
}

const user1 = new createUser("Tea", 250)
const User2 =  createUser("chai", 450)

user1.primtMe()


