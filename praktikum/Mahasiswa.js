// constructor mahasiswa
function Mahasiswa(nim, nama, prodi){
    this.nim = nim
    this.nama = nama
    this.prodi = prodi

    // tampil data
    this.tampil = function(){
        console.log('NIM\t\t: ' + this.nim)
        console.log('Nama\t: ' + this.nama)
        console.log('Prodi\t: ' + this.prodi)
    }
}

// input jumlah mahasiswa yang diinginkan
let jmlMhs = prompt('Masukkan jumlah mahasiswa : ')

var arrayMhs = [] // array mahasiswa
let mhs = {} // objek mahasiswa

for (let i = 1; i <= jmlMhs; i++) {
    console.log(`\nMahasiswa ke-${i}`)

    // membuat objek mahasiswa
    mhs = new Mahasiswa(
        prompt('Masukkan NIM\t: '),
        prompt('Masukkan Nama\t: '),
        prompt('Masukkan Prodi\t: ')
    )
    arrayMhs.push(mhs)
}

var editData = prompt('Ingin menubah data? [y/n] : ')

if(editData == 'y'){
    var noMhs = prompt('Masukkan nomor urut mahasiswa : ')

    // menambah fungsi baru ke constructor
    Mahasiswa.prototype.edit = function(){
        nim = prompt('Masukkan NIM\t: '),
        nama = prompt('Masukkan Nama\t: '),
        prodi = prompt('Masukkan Prodi\t: ')
        tampil = this.tampil
        return {nim, nama, prodi, tampil}
    }

    let index = noMhs - 1
    arrayMhs[index] = arrayMhs[index].edit() // simpan perubahan data

    // menampilkan perubahan data
    console.log('\nData setelah diubah')
    index = 1

    for(let i in arrayMhs){
        console.log(`\nMahasiswa ke-${index}`)
        index++
        arrayMhs[i].tampil()
    }
}else{
    // jika tidak ada perubahan yang dilakukan
    // maka data akan langsung ditampilkan
    index = 1

    for(let i in arrayMhs){
        console.log(`\nMahasiswa ke-${index}`)
        index++
        arrayMhs[i].tampil()
    }
}