function sayNyName(){
    console.log("hello students")
}
// sayNyName()
// function addTeoNumber(number1, number2){
//     console.log(number1 + number2)
// }
// addTeoNumber(4, 6)
function addTeoNumber(number1 , number2){
    // return number1 + number2
    let result = number1 + number2
    return result
}
// const result = addTeoNumber(5, 7)
// console.log("result ", result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("wasilpasha"))

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(300, 400, 600))

const user = {
    username: "wasil",
    price: 999
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 999
})

const myNewArray = [200, 400, 600, 800]
function returnSecondValue(getArray){
   return getArray[2]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 900]))