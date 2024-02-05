// Primative datatypes

//  7 types: String, Number , Boolean , null , undefined, symbol, bigInt
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
const bigNumber = 4545435n
// Reference or non primative datatypes
// types: array, objects, functions
const heros = ["shahrukh", "doga", "shaktiman"]

let myObj = {
    name: "wasil",
    age: 22
    
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof bigNumber)
console.log(typeof id)
console.log(typeof anotherId)
console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)
