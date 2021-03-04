// AMBIL CATEGORY & BRAND

//let category = [] // [Meja]; [Meja, Kursi]; [Meja, Kursi, Sofa]
//let brand = [] // [Olympic]; [Olympic, Lyion]

let products = [
    {
        id: 1,
        nama: 'Meja Olympic',
        category: 'Meja',
        brand: 'Olympic'
    },
    {
        id: 2,
        nama: 'Meja Lyon',
        category: 'Meja',
        brand: 'Lyon'
    },
    {
        id: 3,
        nama: 'Kursi Olympic',
        category: 'Kursi',
        brand: 'Olympic'
    },
    {
        id: 4,
        nama: 'Sofa Lyon',
        category: 'Sofa',
        brand: 'Lyon'
    },
]

function getCatAndBrand(){
    let arrCategory = []
    let arrBrand = []

    products.forEach((value) => {
        if(arrCategory.includes(value.category)){ // Apakah value.category sudah ada didalam arrCategory?
            // Kalo ada ---> Nggak melakukan apa2
        }else{
            // Kalo belum ada ---> Value.category kita push ke arrCategory
            arrCategory.push(value.category)
        }
    })

    products.forEach((value) => {
        if(arrBrand.includes(value.brand)){

        }else{
            arrBrand.push(value.brand)
        }
    })

    console.log(arrCategory)
    console.log(arrBrand)
}

getCatAndBrand()