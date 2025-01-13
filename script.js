// !! 1-misol

// function differ(arr){
//     const evenArr = arr.filter((_, index) => index % 2 == 0).sort((a, b) => a - b)
//     const oddArr = arr.filter((_, index) => index % 2 !== 0).sort((a, b) => b - a)
//     const result = evenArr.concat(oddArr)
//     return result;
// }

// const arr = [8, 3, 1, 6, 5, 2];
// console.log(differ(arr));

// !! 2-misol

// function differ(arr){
//     const zero = arr.filter((num) => num == 0)
//     const raqam = arr.filter((num) => num !== 0)
//     const result = raqam.concat(zero)
//     return result
// }

// const arr = [0, 1, 0, 3, 0, 5];
// console.log(differ(arr));

// !! 3-misol

// function birxil(arr){
//     const eee = arr.filter((value, index) => arr.indexOf(value) == index)
//     return eee;
// }
// const arr =  [4, 5, 6, 5, 7, 4, 8]
// console.log(birxil(arr))

// !!4-misol

// function kopaytirish(arr){
//     const ooo = arr.map((value, index) => index % 2 !== 0 ? value * 3 : value)
//     return ooo;
// }
// const arr = [2, 4, 6, 8, 10];
// console.log(kopaytirish(arr));


// !!5-misol 

// function maxMin(arr){
//     const max = Math.max(...arr)
//     const min = Math.min(...arr)
//     const result = max - min
//     return result;
// }

// const arr = [7, 2, 9, 4, 5];
// console.log(maxMin(arr))

// !!6-misol

// function ortadagiQiymat(arr){
//     const greator = arr.filter((num, index) => num > 5)
//     const lesser = arr.filter((num, index) => num < 5)
//     console.log(greator, lesser)
// }
// const arr = [1, 6, 3, 7, 2, 8];
// console.log(ortadagiQiymat(arr))

// !!7-misol
// function kopaytir(arr){
//     const aaa = arr.reduce((a, b) => a * b)
//     return aaa;
// }
// const arr = [1, 2, 3, 4];
// console.log(kopaytir(arr))

// !!8-misol
// function sortlash(arr){
//     const tartib = arr.sort((a, b) => a.length - b.length)
//     return tartib
// }
// const arr = ['banana', 'apple', 'cherry', 'kiwi'];
// console.log(sortlash(arr))

// !! 9-misol
// function oradagi(arr){
//     const son = arr.filter((num) => num > 3 && num < 8)
//     return son;
// }
// const arr = [1, 4, 6, 3, 8, 10, 5];
// console.log(oradagi(arr))

// !! 10misol
// function tartiblash(arr){
//     const tartib = arr.sort((a, b) => b.score - a.score)
//     return tartib
// }

// const arr = [
//     { name: 'A', score: 50 },
//     { name: 'B', score: 80 },
//     { name: 'C', score: 30 }
//   ]
// console.log(tartiblash(arr))  

// !! 11-misol

// function kopaytir(arr){
//     const kop = arr.map((num) => num % 2 == 0 ? num * 2 : num )
//     return kop;
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(kopaytir(arr))

// !! 12-misol

// function yigindi(arr){
//     const mmm = arr.reduce((a, b) => a + b)
//     return mmm;
// }
// const arr = [2, 4, 6, 8]
// console.log(yigindi(arr))

// !! 13-misol
// function findLongestWord(arr) {
//     return arr.reduce((longest, current) => current.length > longest.length ? current : longest, '');
//   }
  
//   const input = ['apple', 'banana', 'cherry'];
//   console.log(findLongestWord(input)); 

// !! 14-misol 

function teskariMassiv(arr) {
    const teskari = arr.reverse();  
    return teskari;  
}

const input = [1, 2, 3, 4];
console.log(teskariMassiv(input));  
