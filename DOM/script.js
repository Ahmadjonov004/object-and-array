// !! 1-misol
// const words = document.querySelectorAll("h1");

// words.forEach((value, index) => {
//     value.textContent = `Updatet Title  ${index}`;

//     if(index === 0){
//         value.style.color = "red";
//     }
// })

// !! 2-misol

// const item = document.querySelectorAll("li");
// const items = document.querySelector("ul")

// const oxirgi = item[item.length - 1];
// items.removeChild(oxirgi);

// item.forEach((value, index) => {
//     if(index === 1){
//         value.textContent = `Second Item - Updated`
//     }
// })
// const newItem = document.createElement("li");
// newItem.textContent = "new item";
// items.appendChild(newItem);


// !! 3-misol

// const table = document.querySelector('table')
// const cells = table.querySelectorAll("td")
// const firstRow = table.querySelector("tr")
// const firstRowCells = firstRow.querySelectorAll("td")

// cells.forEach(cell => {
//     cell.textContent = "updated"
// })

// firstRowCells.forEach(cell => {
//     cell.style.fontWeight = "bold"
//     cell.style.color = "red"
// })
// cells.forEach((cell, index) => {
//     const column = index % 3;
//     if(column === 2 ){
//         cell.remove();
//     }
// });

//!! 4-misol 

// const boxs = document.querySelectorAll("div")

// boxs.forEach(div => {
//     div.classList.add("styled-box"); 
// });

// boxs.forEach((box, index) => {

//     if(index === 0){
//         box.style.backgroundColor = "green";
//         box.style.color = "white"
//     }
// })
// const oxirii = boxs[boxs.length - 1]
// oxirii.style.width = "200px"
// oxirii.style.height = "100px"
// oxirii.style.border = " 1px solid red"

//!! 5-misol

// const images = document.querySelectorAll("img")
// const image = document.querySelector("img")

// image.style.width = "150px";
// images.forEach(img =>{
//     img.style.border = "2px solid black"
// });
// images[1].src = "./images/goll.webp"
// images[1].style.width = "200px"

// !! 6-misol

// const area = document.getElementById("club")

// area.textContent = "New Default Text";
// area.style.width = "300px"
// area.style.height = "150px"
// area.style.backgroundColor = "#f0f0f0"
// area.style.color = "blue"

// !! 7-misol
// const element = document.querySelector("div");

// for (let i = 1; i <= 3; i++){
//     const ptag = document.createElement("p")
//     ptag.textContent = `Paragraph ${i}`
    
//     element.appendChild(ptag);
// };

// !! 8-misol 

// const form = document.querySelector("form");
// const firstInput = document.getElementById('firstInput');
// const secondInput = document.getElementById('secondInput');

// firstInput.setAttribute('placeholder', 'ismingizni kiriting');
// secondInput.setAttribute('maxlength', '100');

// !! 9-misol

// const havola = document.querySelector("a")

// havola.href = "google.com";
// havola.setAttribute('target', '_blank');
// havola.textContent = 'Visit Example'

// !! 10-misol 

// const item = document.querySelector('div')
// const ul = document.querySelector('ul')
// const li = document.querySelector('li')


// const newLi = document.createElement('li')
// newLi.textContent = "Nested Item"
// ul.appendChild(newLi)

// li.style.fontSize = '27px'

// item.style.border = "2px solid red";
// item.style.padding = '20px'
