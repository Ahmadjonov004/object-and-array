// !! 1-misol

// function fetchDataSync() {
//     let xhr = new XMLHttpRequest();
//     let url = "https://jsonplaceholder.typicode.com/posts/1";

//     xhr.open("GET", url, false); 
//     xhr.send(); 

//     if (xhr.status === 200) {
//         console.log("Ma'lumot:", xhr.responseText);
//     } else {
//         console.log("Xatolik yuz berdi:", xhr.status);
//     }
// }

// fetchDataSync();

// !! 2-misol
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true)

// xhr.onload = function () {
//     if (xhr.status === 200) {
//         console.log('Maʼlumot:', JSON.parse(xhr.responseText));
//     } else {
//         console.error(`Xatolik: ${xhr.status} - ${xhr.statusText}`);
//     }
// };
// xhr.onerror = function () {
//     console.error('Tarmoq yoki server bilan bog‘liq xatolik yuz berdi.');
// };
// xhr.send();

//   !! 3-misol

// fetch('https://jsonplaceholder.typicode.com/posts/2')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Server xatosi: ${response.status} - ${response.statusText}`);
//         }
//         return response.json(); 
//     })
//     .then(data => {
//         console.log('Maʼlumot:', data);
//     })
//     .catch(error => {
//         console.error('Xatolik yuz berdi:', error.message);
//     });

// !! 4-misol

// async function getData() {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts/3");
//       if (!response.ok) {
//         throw new Error(`HTTP xatosi: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Xatolik yuz berdi:", error);
//     }
//   }
  
//   getData();

// !! 2-qism Qo'shimcha topshiriq

// async function asyncRequests() {
//     console.time("Asinxron so'rovlar"); // Vaqtni o‘lchashni boshlash

//     let requests = [];
//     for (let i = 1; i <= 100; i++) {
//         requests.push(
//             fetch('https://jsonplaceholder.typicode.com/posts/1')
//                 .then(response => response.json())
//                 .then(data => console.log(`(${i}) Maʼlumot olindi`))
//                 .catch(error => console.error(`(${i}) Xatolik:`, error))
//         );
//     }

//     await Promise.all(requests); // Barcha so‘rovlarni parallel bajarish
//     console.timeEnd("Asinxron so'rovlar"); // Vaqtni o‘lchashni tugatish
// }

// asyncRequests();

// function syncRequests() {
//     console.time("Sinxron so'rovlar"); // Vaqtni o‘lchashni boshlash
//     for (let i = 1; i <= 100; i++) {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', false); // ⚠️ false = Sinxron rejim
//         xhr.send();

//         if (xhr.status === 200) {
//             console.log(`(${i}) Maʼlumot olindi`);
//         } else {
//             console.error(`(${i}) Xatolik: ${xhr.status}`);
//         }
//     }
//     console.timeEnd("Sinxron so'rovlar"); // Vaqtni o‘lchashni tugatish
// }

// syncRequests();

// !! 2-misol

async function fetchPost(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if(!response.ok){
            throw new Error(`Server xatosi: ${response.status} - ${response.statusText}`);
        }
        const posts = await response.json();
        const container = document.getElementById('postContainer');
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>
            `;
            container.appendChild(postElement);
        });
    }catch(error){
        console.error('Xatolik yuz berdi:', error.message);
    }
}
fetchPost();



