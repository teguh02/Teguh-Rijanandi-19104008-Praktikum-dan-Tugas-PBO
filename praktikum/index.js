// ----- method prompt -----
const PromptSync = require('prompt-sync')()

let total = PromptSync('Berapa mahasiswa\t: ')

var arrayMahas = [] //array
var mahasiswa = {} //object

for (let i = 0; i < total; i++) {
    console.log(`\nMahasiswa ${i}`)
    let name = PromptSync('Masukkan Nama\t\t\t: ')
    let birth = PromptSync('Masukkan Tanggal Lahir: ')
    let nim = PromptSync('Masukkan NIM\t\t\t: ')

    mahasiswa = new Mahasiswa(name,birth,nim)


    arrayMahas.push(mahasiswa)
}

let index = 0
for(let x in arrayMahas){
    console.log(`\nMahasiswa ${index}`)
    index++
    // memanggil value
    console.log(`Nama\t\t\t: ${arrayMahas[x].name}`)
    console.log(`Tanggal Lahir: ${arrayMahas[x].birth}`)
    console.log(`NIM\t\t\t: ${arrayMahas[x].nim}`)
    console.log(`Umur\t\t\t: ${arrayMahas[x].age()}`)
}

function Mahasiswa(name, birth, nim){
    this.name = name
    this.birth = birth
    this.nim = nim
    this.age = function(){
        let year = this.birth.slice(this.birth.length - 4)
        return 2020 - year
    }
}