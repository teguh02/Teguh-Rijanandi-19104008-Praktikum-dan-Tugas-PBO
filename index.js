/**
 * Teguh Rijanandi
 * S1SE03B - 19104008
 * 
 * Praktikum PBO
 * Pertemuan 10
 * 
 * INHERITANCE PADA JAVASCRIPT (PROTOTYPE CHAINING)
 */

// insialisasi prompt
const prompt = require('prompt-sync')();

/**
 * Class kendaraan
 */
class kendaraan {

    // super constructor class
    constructor() {
        this.noPlat = null, 
        this.merk = null, 
        this.pajakKendaraan = null
    }

    inputAtribut() {
        this.noPlat = prompt("Masukan nomor kendaraan : ")
        this.merk = prompt("Masukan merk kendaraan : ")
        this.pajakKendaraan = prompt("Masukan pajak kendaraan : ")
    }

    // deklarasi method kosong
    fasTambahan() {}
    printFasTambahan() {}
    hitungPajak() {}
    
    print() {
        console.log("--Info Kendaraan--");
        console.log("Nomor kendaraan : " + this.noPlat);
        console.log("Merk : " + this.merk);
        this.printFasTambahan()
        console.log("Pajak kendaraan : " + this.pajakKendaraan);
        console.log("Total pembayaran pajak : " + this.hitungPajak());
        console.log("\n");
    }
}

/**
 * Class sedan turunan dari class
 * kendaraan
 */
class Sedan extends kendaraan {

    // memiliki method fasTambahan untuk menginputkan atribut tambahan
    fasTambahan() {
        this.fasKeamanan = prompt("Masukan fasilitas keamanan : ")
        this.kapasitasCC = prompt("Masukan kapasitas (dalam CC) : ")
        this.fasKenyamanan = prompt("Masukan fasilitas kenyamanan : ")
    }

    // memiliki method printFasTambahan untuk menampilkan atribut tambahan
    printFasTambahan() {
        console.log("Fasilitas keamanan " + this.fasKeamanan);
        console.log("Kapasitas (dalam CC) : " + this.kapasitasCC);
        console.log("Fasilitas kenyamanan : " + this.fasKenyamanan);
    }

    // memiliki method hitungPajak untuk menghitung total pajak
    hitungPajak() {
        return this.pajakKendaraan + (this.pajakKendaraan * this.kapasitasCC * 0.00005)
    }
}

/**
 * Class bus turunan dari class
 * kendaraan
 */
class Bus extends kendaraan {

    // memiliki method fasTambahan untuk menginputkan atribut tambahan
    fasTambahan() {
        this.kapPenumpang = prompt("Kapasitas penumpang : ")
        this.kapBagasi = prompt("Masukan kapasitas bagasi (kg) : ")
    }

    // memiliki method printFasTambahan untuk menampilkan atribut tambahan
    printFasTambahan() {
        console.log("Kapasitas penumpang : " + this.kapPenumpang);
        console.log("Kapasitas bagasi (kg) : " + this.kapBagasi);
    }

    hitungPajak() {
        return this.pajakKendaraan + (this.pajakKendaraan * this.kapPenumpang * this.kapBagasi * 0.00005);            
    }
}

/**
 * Masukan data sedan
 */
var sedan = new Sedan

console.log("Input data sedan");

// panggil method inputAtribut pada class kendaraan
sedan.inputAtribut()

// panggil method fasTambahan pada class sedan
sedan.fasTambahan()

/**
 * Masukan data bus
 */
var bus = new Bus

console.log("\nInput data bus");

// panggil method inputAtribut pada class kendaraan
bus.inputAtribut();

// panggil method fasTambahan pada class Bus
bus.fasTambahan()

/**
 * cetak hasilnya
 * dari data sedan dan bus
 */
sedan.print()
bus.print()