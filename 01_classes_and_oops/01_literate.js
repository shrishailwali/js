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
console.log(userOne)
console.log(userTwo)
