const name = "wasilpasha "
const repoCount = 50

console.log(name + repoCount)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
const gameName = new String('wasilpasha')

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
// console.log(gameName.indexof('s'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "  wasil  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://wasil.com/wasil%20pasha"
console.log(url.replace('%20', '-'))
console.log(url.includes('wasil'))
console.log(url.includes('Wasil'))

