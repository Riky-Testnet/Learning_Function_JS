const mahasiswa = [
    {
        nama: "Riky Mochammad Arif",
        alamat: "Kampung Inggris",
        usia: 20,
        semester: 8
},
    {
        nama: "Bagus Uswanto",
        alamat: "Kampung Inggris",
        usia: 23,
        semester: 2
    }
]
let i = 0;


function getDetailData(){
    mahasiswa.map(function (result, i) {
        console.table(result)
    })
    // console.log(`data yang ada cari adalah ${mahasiswa.nama}`)
}

//standar Funcition
function getDetailHuman() {
    i += 1
    if(i > 5) {
        console.log('lebih dari 5x di klik');
    }else{
        console.log('jatah Klik Masih ada');
    }
}

//arrow Function
const getDetailHuman2 = () => {
    i += 1
    i > 5 ? console.log('Lebih dari 5x Bro Human2') : console.log('jatah Masih ada Human2')
}


class Hewan {
    warna
    keahlian
    // Contstructor adalah Nilai Default Fungsinya Yaitu Untuk Memanggil Nilai Untuk Pertama Kali (Default)
    constructor(nama){
        this.nama = nama
    }
    set newColor(color) {
        this.warna = color
    }
    set newSkill(skill) {
        this.keahlian = skill
    }

    get Detail() {
        return `hi Saya ${this.nama}, Saya Berwarna ${this.warna}, Keahlian Saya ${this.keahlian}` 
    }
}

const kucing = new Hewan('Poppy')
kucing.newColor = "red"
kucing.newSkill = "Manja"
console.log(kucing.Detail)







