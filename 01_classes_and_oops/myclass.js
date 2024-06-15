//ES6

class User{
    constructor(userName, email, password){
        this.userName = userName;
        this.email = email;
        this.password= password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
}

const pass = new User("User","user@gmail.com","12345")
console.log(pass.encryptPassword())