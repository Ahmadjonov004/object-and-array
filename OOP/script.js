// class Person {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//     }
// }
// const person1 = new Person("Asilbek", 20)
// const person2 = new Person("QahhorAli", 16)

// console.log(person1)

// class Cars {
//     constructor(name, age){
//         this.name = name 
//         this.age = age
//     }
// }

// const car1 = new Cars("malibu", 2021)
// const car2 = new Cars("gentra", 2024)
// console.log(car1, car2)

// !! Constructor Function 1-misol

// class Product {
//     constructor(name, price, amout){
//         this.name = name
//         this.price = price
//         this.amout = amout
//     }
// }
// Product.prototype.sell = function (fruitAmout){
//     if(parseFloat(this.amout) >= fruitAmout ){
//         console.log(`Men bozordan ${fruitAmout} olmochiman va uning narxi ${parseFloat(this.price) * fruitAmout}$ bo'ldi `)
//     }else {
//         console.log(`Bozorda maxsulot yetarli emas!`)
//     }
// }
// const Product1 = new Product("olma", "1.5", "10kg")
// const Product2 = new Product("gilos", "1$", "19kg")
// Product1.sell(10)
// 

// !! 1.2 misol

// class Calculator {
//     constructor() {}

//     add(a, b) {
//         return a + b;
//     }

//     subtract(a, b) {
//         return a - b;
//     }

//     multiply(a, b) {
//         return a * b;
//     }

//     divide(a, b) {
//         if (b === 0) {
//             return "Xatolik: b nolga teng bo'lmaydi";
//         } else {
//             return a / b;
//         }
//     }

//     check(operation, a, b) {
//         switch (operation) {
//             case "add":
//                 return this.add(a, b);
//             case "subtract":
//                 return this.subtract(a, b);
//             case "multiply":
//                 return this.multiply(a, b);
//             case "divide":
//                 return this.divide(a, b);
//             default:
//                 return "Xatolik: Bunday amal mavjud emas!";
//         }
//     }
// }

// const calc = new Calculator();

// console.log(calc.check("add", 10, 5)); 
// console.log(calc.check("subtract", 10, 5)); 
// console.log(calc.check("multiply", 10, 5)); 
// console.log(calc.check("divide", 10, 5)); 
// console.log(calc.check("divide", 10, 0)); 
// console.log(calc.check("unknown", 10, 5)); 

// !! 1.3 misol 

// class Student {
//     constructor(names, age, rating) {
//         this.names = names;
//         this.age = age;
//         this.rating = rating;
//     }

//     increaseRating(amount) {
//         this.rating += amount;
//     }
// }

// const student1 = new Student("Ali", 20, 31); 

// student1.increaseRating(10); 
// console.log(student1.rating); 


// !! 1.4-misol





