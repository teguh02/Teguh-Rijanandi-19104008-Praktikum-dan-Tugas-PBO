var person0 = {} // tanpa value
var person1 = { name : "Teguh"}

var person2 = new Object()
person2.name = 'Melati'

person1.age = 20
person2.age = 25

console.log("Object person1\t: ")
console.log(`name\t: ${person1.name}`)
console.log("age\t\t: " + person1.age)

console.log()

console.log("Object person2\t: ")
console.log(`name\t: ${person2.name}`)
console.log("age\t\t: "+person2.age)

//input
const prompt = require('prompt-sync')()

let object = {}
object.name = prompt('Input Name\t: ')
object.age = prompt('Input Age\t: ')
object.nim = prompt('Input NIM\t: ')
object.prodi = prompt('Input Prodi\t: ')

console.log('')
console.log(object)

console.log('')
for(var property in object){
    console.log(property + `\t: ${object[property]}`)
}