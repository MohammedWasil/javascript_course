// const tinderUser = new objects() - singleton
// const tinderUser = {} - non singleton objects
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)
const regulatUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "wasil",
            lastname: "pasha"
        }
    }
}
// console.log(regulatUser.fullname.userfullname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const user = [
    {
        id: 1,
        email: "wasil@google.com"
    },
    {
        id: 2,
        email: "wasil@chatgpt.com"
    }
]
user[1].email 
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))