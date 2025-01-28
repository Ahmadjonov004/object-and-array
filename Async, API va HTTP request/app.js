var xhr = new XMLHttpRequest();

// Sinxron so'rovni sozlash
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', false); // 'false' - bu sinxron so'rovni anglatadi

// So'rov bajarilganda
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(JSON.parse(xhr.responseText)); // Javobni konsolga chop etamiz
    }
};

// So'rovni yuborish
xhr.send();



// !! 2-misol 
