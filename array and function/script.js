//!! 1-misol


//!! 3-misol

// function deleteMassiv(massiv){
//         return massiv.filter((element, index) =>{
//             return massiv.indexOf(element) === index;
//         });
//     }

// const massiv = [4, 5, 6, 5, 7, 4, 8];
// const newMassiv = deleteMassiv(massiv);
// console.log(newMassiv); 

//!! 4-misol



//!! 5-misol 

// function maxMinFarqi(massiv){
//     const maxMassiv = Math.max(...massiv)
//     const minMassiv = Math.min(...massiv)

//     const farq = maxMassiv - minMassiv
//     return farq;
// }
// const massiv = [7, 2, 9, 4, 5];
// const nnn = maxMinFarqi(massiv);
// console.log(nnn);

//!! 6-misol

// function saralash(massiv) {
//     const result = massiv.reduce((acc, currentValue) => {
//         if (currentValue > 5) {
//             acc.greater.push(currentValue);
//         } else {
//             acc.lesser.push(currentValue);
//         }
//         return acc; 
//     }, { greater: [], lesser: [] }); 
//     return result
// }

// const massiv = [1, 6, 3, 7, 2, 8];
// const natija = saralash(massiv);

// console.log(natija.lesser); 
// console.log(natija.greater); 

// !! 7-misol
// function findProduct(massiv) {
//     return massiv.reduce((acc, curr) => acc * curr, 1);
// }

// const massiv =  [1, 2, 3, 4];

// const product = findProduct(massiv);
// console.log(product); 


//!! 8-misol

// function sortWords(massiv){
//     return massiv.sort((a, b) => b.length - a.length);
// }

// const massiv = ['banana', 'apple', 'cherry', 'kiwi']
// const newArr = sortWords(massiv);
// console.log(newArr);

//!! 9-misol



// function oradagiQiymat(massiv){
//     return massiv.filter(num => num > 3 && num < 8);
// }
// const massiv = [1, 4, 6, 3, 8, 10, 5]
// const newArr = oradagiQiymat(massiv);
// console.log(newArr);


//!! 10 misol

// function oradagiQiymat(massiv){
//     const result = massiv.sort((a, b) => b.score - a.score);
//     return result;
// }
// const massiv = [
//     { name: 'A', score: 50 },
//     { name: 'B', score: 80 },
//     { name: 'C', score: 30 }
//   ]
  
// const newArr = oradagiQiymat(massiv);
// console.log(newArr);


// !! 11-misol

// function newArr(massiv){
//     return massiv.map(num => {
//         if (num % 2 == 0){
//             return num * 2;
//         }else{
//             return num;
//         }

//     })
// }

// const massiv = [1, 2, 3, 4, 5];
// const kopayganArr =  newArr(massiv);
// console.log(kopayganArr);


// !! 12-misol

// function findProduct(massiv) {
//     return massiv.reduce((acc, curr) => acc + curr, 0);
// }

// const massiv =  [2, 4, 6, 8];
// console.log(findProduct(massiv)); 

// !! 13-misol
// function maxLength(massiv){

// }
