class User{
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`UserName is ${this.userName}`);
    }
}

class Teacher extends User{
    constructor(userName, email, password){
        super(userName)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`new Course was added by ${this.userName}`);
    }
}


const course = new Teacher("tea", "tea@gmail.com",'123')
course.addCourse()
