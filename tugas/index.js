/**
 * LATIHAN
    Buatlah sebuah program penilaian dengan menginputkan data mahasiswa
    terlebih dahulu lalu penilaiannya.
    Syarat penilaian :
    - 80 – 100 maka grade : A
    - 60 – 80 maka grade : B
    - 40 – 60 maka grade : C
    - 0 – 40 maka grade : D
    Note:
    - Gunakan object untuk data Mahasiswa
    - Gunakan function minimal 2
 */

 // import library
 const prompt = require('prompt-sync')();

 // deklarasi prodi
 const prodi = ['S1 SE', 'S1 IF', 'S1 SI'];

 let array = [];

 /**
  * Objek mahasiswa
  * @param {*} name 
  * @param {*} nim 
  * @param {*} birth 
  */
 function Mahasiswa(name, nim, birth, prodi, grade = null) {
     this.name = name;
     this.nim = nim;
     this.birth = birth;
     this.prodi = prodi;
     this.grade = grade;
     this.age = () => {
        let year = this.birth.slice(this.birth.length - 4);
        let nowYear = new Date().getFullYear();
        return nowYear - year;
     }
 }

 /**
  * Mendeteksi grade nilai
  * @param {*} nilai 
  */
 function detectGrade(nilai) {
     if (nilai >= 80 && nilai <= 100) {
         return 'A'
     } else if (nilai >= 60 && nilai < 80) {
         return 'B'
     } else if (nilai >= 40 && nilai < 60) {
         return 'C';
     } else if (nilai < 40) {
         return 'D';
     }
 }

 /**
  * To print main menu
  */
 function printMenu() {
    console.log("\n===== Menu Penilaian =====");
    console.log("1. Tambah Mahasiswa");
    console.log("2. Penilaian");
    console.log("3. Lihat seluruh mahasiswa");
    console.log("4. Keluar\n");
 }

 var loop = true;

 while (loop) {

    printMenu();
    let pilihan = prompt("Masukan menu : ")

    switch (pilihan) {
        // jika menu yang dipilih adalah 1
        case '1':
            var total = prompt("Jumlah mahasiswa : ");
            for (let i = 0; i < total; i++) {
               console.log("\n@ Mahasiswa " + (i + 1));
               let nama = prompt("Masukan nama mahasiswa : ")
               let nim = prompt("Masukan nim mahasiswa : ")
               let tglLahir = prompt("Masukan tanggal lahir : ")

               console.log("\nProdi");
               for (let j = 0; j < prodi.length; j++) {
                   console.log(j + ". " + prodi[j]);
               }

               let idprodi = prompt("Masukan id prodi : ")

               array.push(
                   new Mahasiswa(nama, nim, tglLahir, idprodi)
               )
            }
            break;
         
        // jika menu yang dipilih adalah 2    
        case '2':
           console.log("Penilaian Mahasiswa\n");
           var inputNIM  = prompt("Masukan Nim :");
           var inputNilai  = prompt("Masukan Nilai :");

           for (let n = 0; n < array.length; n++) {
               // jika nim pada data array sama dengan
               // nim yang diinputkan, maka update nilainya
               if(array[n].nim == inputNIM) {
                  array[n].grade = detectGrade(inputNilai)
               }
           }
            
           break;
        
        // jika menu yang dipilih adalah 2  3
        case '3':
            console.log("\nData Mahasiswa : ");

            for (let m = 0; m < array.length; m++) {
                console.log("Mahasiswa " + m);
                console.log("Nama : " + array[m].name);
                console.log("NIM : " + array[m].nim);
                console.log("Prodi : " + prodi[array[m].prodi]);
                console.log("Birth : " + array[m].birth);
                console.log("Umur : " + array[m].age());
                console.log("Grade : " + array[m].grade);
                console.log("\n");
            }
           break;
        
        // jika menu yang dipilih adalah 4   
        case '4':
           console.log('Bye..');
           loop = false;
           break;
        
        // jika menu yang dipilih tidak ada dalam daftar
        // maka cetak menu utama   
        default:
            printMenu();
            break;
    }
 }

 
 