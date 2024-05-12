// let myName = "wasil   "
// console.log(myName.trueLength);

let myHero = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidly power is ${this.spiderman}`);
    }
}
Object.prototype.wasil = function(){
    console.log(`wasil is present is all objects`);
}

Array.prototype.heyWasil = function(){
    console.log(`wasil says hello`);
}
// heroPower.wasil()
// myHero.wasil()
// myHero.heyWasil()
// heroPower.heyWasil()

//inheritance
const User = {
    name: "wasil",
    // email: pasha408@gmail.com
}
const Tacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailble: false
}
const TASupport = {
    // makeAssigment: 'js assignment',
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode  "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}
anotherUsername.trueLength()
