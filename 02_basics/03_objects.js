//singleton

// objects literals
const JsUser = {
    name: "Wasil",
    age:22,
    location: "Punjab",
    email: "wasil@google.com",
    lastLoginDays: ["Monday", "Satursday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])

JsUser.email = "wasil@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "wasil@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello js user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`)
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())