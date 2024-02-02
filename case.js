//contoh case pengulangan

for (i = 0 ; i < 5 ; i++) {
    console.log (i)
}

let iterasi = 0
 do {
    console.log(iterasi)
    iterasi++ ;
 } while (iterasi < 5)

 iterasi = 0
 while (iterasi < 5) {
    console.log(iterasi)
    iterasi++
 }


 const fruits = ['banana', 'grape', 'orange', 'apple', 'pear']
    for (key in fruits) {
        console.log('for in ' + fruits [key])
    }

    for (val of fruits) {
        console.log('for of ' + val)
    }

    const person = {name: 'john', age: 32, sex: "m", school:["tk it, sd it, smp it"]}
    for (key in person) {
        console.log ("for in " + person[key])
    }


    console.log(Math.random())
    for (let i = 0 ; i < 5; i++) {
        if (i == 2) {
            break
        }
        console.log(i)
    }


    //contoh if dan else

    IPK = 3.5
    if (IPK >= 3.5 && IPK <=4 ) {
        console.log("Cumlaude")
    } else if (IPK >= 3 && IPK <3.5) {
        console.log("Baik")
    } else if (IPK >= 2.5 && IPK < 3) {
        console.log("Cukup") 
    } else {
        console.log("Wajib perbaikan")
    }

    let terjemah = 3
    switch(terjemah) {
        case 1 : console.log("Satu")
        break
        case 2 : console.log("Dua")
        break
        case 3 : console.log("Tiga")
        break
        default : console.log("Tidak ada pada pilihan")
    }


    //contoh function
    function perkalian(nilai1, nilai2) {
        return nilai1 * nilai2
    }
    hasil = perkalian(4, 7)
    console.log(hasil)

    let hasil_arrow = (nilai1, nilai2) => nilai1 * nilai2
    console.log(hasil_arrow(3,7))

    