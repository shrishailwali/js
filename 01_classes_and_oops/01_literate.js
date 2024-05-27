const users = {
    userName:"Shrishail",
    password:1234,
    user: function(){
        // console.log({User:"superUser"})
        console.log(this.userName)
    }

}
console.log(users.password)
console.log(users.user())