var person = {
    firstName : 'Teguh',
    lastName : 'Rijanandi',
    year : 2001,

    fullName : function(){
        return(this.firstName + " " + this.lastName)
    },
    age : function(){
        return 2020 - this.year
    }
}

console.log('Object dari person\t: ')
// memanggil method
console.log(`Nama\t: ${person.fullName()}`)
console.log(`Tahun\t: ${person.year}`)
console.log(`Umur\t: ${person.age()}`)

// ----- method prompt -----
const PromptSync = require('prompt-sync')()

let total = PromptSync('Berapa mahasiswa\t: ')

var arrayMahas = [] //array
var mahasiswa = {} //object

for (let i = 0; i < total; i++) {
    console.log(`\nMahasiswa ${i}`)
    
    mahasiswa = {
        name : PromptSync('Masukkan nama\t\t\t: '),
        birth : PromptSync('Masukkan tanggal lahir\t:'),
        nim : PromptSync('Masukkan NIM\t\t\t: '),
        year : PromptSync('Masukkan Tahun\t\t\t: '),
        age : function(){
            let year = this.birth.slice(this.birth.length - 4)
            return 2020 - year
        }
    }

    arrayMahas.push(mahasiswa)
}

let index = 0
for(let x in arrayMahas){
    console.log(`\nMahasiswa ${index}`)
    index++
    console.log(`Nama\t\t\t: ${arrayMahas[x].name}`)
    console.log(`Tanggal Lahir: ${arrayMahas[x].birth}`)
    console.log(`NIM\t\t\t: ${arrayMahas[x].nim}`)
    console.log(`Umur\t\t\t: ${arrayMahas[x].age()}`)
}