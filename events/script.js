// !! 1-misol
// const btn = document.getElementById('btn') //buttonni ushlab oldim

// function colorFnc() { //muntazam takrorlanishi uchun funksiya yaratdim
//     let hcolor = '#'; // hex color yaratishim uchun hamma rangda # bo'lgani uchun men ham o'zgaruvchi bilan kiritib oldim
//     let wordNumbers = '0987654321abcdef'; //rang yasashimizda 16ta belgi ishtirok etgani uchun hamma belgini bitta qilib o'zgaruvchi qilib oldim

//     for (let i = 0; i < 6; i++) { //for siklini yaratdim chunku menga # va 6ta belgi kerak
//         hcolor += wordNumbers[Math.floor(Math.random() * 16)]; // # olib keladi va yoniga wordNumbersni indexi necci chiqsa 16gacha albatta usha indexdagi tasodifiy belgini olib qoshib beradi
//     }
//     return hcolor;//har safar bosganda ishlashi uchun return qilib qoyamiz
// }

// btn.addEventListener('click', () => { // funksiya yaratvoldim yani bosilganda har safar tepadagi funksiya ishlab yangi rangga tenglaydi va bodyni orqa foni o'zgaradi
//     document.body.style.backgroundColor = colorFnc();
// });

// !! 2-misol

// const btn = document.getElementById('btn') // btn bilan h1 tagini ushlab oldim
// const heading = document.getElementById('heading')

// btn.addEventListener('click', () => {   //button bosilganda
//     if (heading.classList.contains('hidden')){   //agar h1ni classlari ichida hidden bo'lsa uni o'chirib tashla va buttonni tekstini yashirish deb qo'y
//         heading.classList.remove('hidden')
//         btn.textContent = 'yashirish'
//     }else{
//         heading.classList.add('hidden') //aks holda ya'ni h1ni classlistida hidden classini qo'sh va button tekstini ko'rsatishga o'zgartir dedim
//         btn.textContent = 'korsatish'
//     }
// })

// !!3-misol

// const btn = document.getElementById('btn')  // kerakli obyectlarni ushlab olamiz
// const input = document.getElementById('input')
// const ul = document.getElementById('ul')

// btn.addEventListener('click', () => {    //   funksiya yaratamiz button bosilganda 
//     const inputValue = input.value.trim()    //  inputga kiritilgan qiymatni boshidagi va oxiridagi qiymatini olib tashla
//     if (inputValue.trim() == ''){         // agar input bo'sh bo'lsa btnni bosganda "Maydonga tekst yozing" chiqsin
//         alert("Maydonga tekst yozing");
//     }

//     const list = document.createElement('li') // inoutga kiritilgan ma'lumot ekranga chiqishi uchun li tagini yaratvoldim
//     list.textContent = inputValue   // inputga kiritilgan malumotni tenglab qo'ydim

//     const button = document.createElement('button') // kiritilgan ma'lumotni o'chirish uchun button yaratdim va uni tekstini kiritdim
//     button.textContent = "o'chirish"

//     button.addEventListener('click', () =>{ // endi esa uni vazifani yozdim ya'ni button bosilganda kiritilgan ma'lumot o'chib ketsin
//         ul.removeChild(list)
//     })
//     list.appendChild(button) //li ni oxirgi qoshilgan malumotiga button qoshdim
//     ul.appendChild(list) 

    // input.value = ''  //funsiya ishlaganda yani qo'shish button bosilganda input bo'sh sohaga teng bo'lsin ya'ni tozalansin
// })

// !! 4-misol

// const sizeItem = document.getElementById('reSize')  // foydalanishim uchun ushlab oldim

// function updateSize() { // funsiya yaratdim
//     const width = window.innerWidth //o'zgaruvchi qabul qilib ekranni bo'yi va enini qiymatini ovoldim
//     const height = window.innerHeight
//     sizeItem.textContent = `width - ${width} height-${height}`  // kkeyin esa tepadagi ushlagan sizeItem ya'ni div ni ichiga malumotlarni kiritdim 
//     return sizeItem // funksiya ishlashi uchun return qildim
// }
// updateSize() // funksiyani chaqirdim
// window.addEventListener('resize', (e) => {     // oyna har o'zgarganida malumotlar o'zgarishi uchun funsiya yaratdim
//     updateSize()
// })

// !! 5-misol 
// const img = document.querySelector('img') //kerakli elementlarni ushlab oldim
// const prev = document.getElementById('prew')
// const next = document.getElementById('next')

// const images = [    //rasmlarni massiv tarzida kiritib oldim 
//     'https://resources.premierleague.pulselive.com/photo-resources/2024/11/09/3d921b87-7ef9-4b3c-9a96-b3744e0b26a5/2183904992.jpg?width=1400&height=800',
//     'https://images2.minutemediacdn.com/image/upload/c_crop,w_6860,h_3858,x_0,y_244/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/liverpool_fc_on_si/01jdmthsa0hk1x4pqpmq.jpg',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbyRlhRrKdD-aeNxXSXnea2HTbE8S2sd3xEXxQExTRyUDTEmMzJxFNiXVx5SJ4Yc6bvA&usqp=CAU',
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrltzwSHFaxefWkwzZLJz8x8mhDo3Sdt4cA&s'
// ]

// img.src = images[Math.floor(Math.random() * images.length)] // imgni scr sini imagesni indexiga tenglab oldim indekisini esa random va floor orqali aniqlab oldim

// let count = 0 
// next.addEventListener('click', () => {
//     count++ 
//     if(count >= images.length){
//         count = 0
//     }
//     img.src = images[count]
// })
// prev.addEventListener('click', () => {
//     count-- 
//     if(count < 0){
//         count = images.length - 1
//     }
//     img.src = images[count]

// })

// !! 6-misol 
// const div = document.querySelector('div')

// document.addEventListener('keydown', (e) => {
//     div.textContent =  `bosilgan tugma - ${e.key}`
// })

//!! 7-misol
const img = document.querySelector('img')
const stopd = document.getElementById('stop')
const continu = document.getElementById('continue')

const images = [
    'https://resources.premierleague.pulselive.com/photo-resources/2024/11/09/3d921b87-7ef9-4b3c-9a96-b3744e0b26a5/2183904992.jpg?width=1400&height=800',
    'https://images2.minutemediacdn.com/image/upload/c_crop,w_6860,h_3858,x_0,y_244/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/liverpool_fc_on_si/01jdmthsa0hk1x4pqpmq.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYbyRlhRrKdD-aeNxXSXnea2HTbE8S2sd3xEXxQExTRyUDTEmMzJxFNiXVx5SJ4Yc6bvA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrltzwSHFaxefWkwzZLJz8x8mhDo3Sdt4cA&s'
]


let currentImg = 0
let intervalid = null

function slider(){
    intervalid = null;
    intervalid = setInterval(() => {
        currentImg = (currentImg + 1) % images.length
        img.src = images[currentImg]
    }, 1000)
    return intervalid
}
slider()

stopd.addEventListener('click', () => {
       if(intervalid){
        clearInterval(intervalid)
       }
})
continu.addEventListener('click', () => {
    slider()
})