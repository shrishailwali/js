let myName ="Shrishail   "
let lastName ="Wali   "
// console.log(myName.trim().length)

const myHero =["thor","spiderman"]

const heropower = {
  thor:"hammers",
  spiderman:"splicers",
  hydropower: function(){
    console.log(`ho power ${this.spiderman}`)
  }
}


Object.prototype.shrishail = function(){
    console.log('shrishail is present in all object')

}

// console.log(heropower)
// heropower.shrishail()
// myHero.shrishail()


const anotherUserName = "ShrishailWali    "

String.prototype.trueLength = function(){
    console.log(`true length: ${this.trim().length}`)
}

anotherUserName.trueLength()