function setUserName(userName){
    this.userName = userName
    console.log('Called');
}

function createUser(userName, email, password){
    setUserName.call(this,userName)
    this.email = email
    this.password = password
}

const chai = new createUser('Shrishail', 'shri@google.com',"1234")
console.log(chai)