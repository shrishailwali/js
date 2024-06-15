class User{
    constructor(UserName, email, password){
        this.UserName = UserName
        this.email = email
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const shri = new User("shrishil", "shri@gmial.com","37ee4")
console.log(shri.password);