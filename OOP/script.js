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


// function Car(model, color) {
//     this.model = model;
//     this.color = color; 
//     this.isRunning = false; 

    
//     this.start = function() {
//         if (!this.isRunning) {
//             this.isRunning = true;
//             console.log(`${this.model} mashinasi yoqildi.`);
//         } else {
//             console.log(`${this.model} mashinasi allaqachon yoqilgan.`);
//         }
//     };

    
//     this.stop = function() {
//         if (this.isRunning) {
//             this.isRunning = false;
//             console.log(`${this.model} mashinasi o‘chirildi.`);
//         } else {
//             console.log(`${this.model} mashinasi allaqachon o‘chirilgan.`);
//         }
//     };
// }

// const myCar = new Car("Chevrolet Malibu", "Oq");

// myCar.start(); 
// myCar.start(); 
// myCar.stop();  
// myCar.stop();  

// !! 1.5 - misol 

// function Libruary(lists){
//     this.lists = lists
// }

// Libruary.prototype.addBook = function(newBook){
//     if(newBook){
//         this.lists.push(newBook)
//     }else{
//         console.log('Yangi kitob mavjuda emas')
//     }
// }
// Libruary.prototype.removeBook = function(){
//     this.lists.shift()
// }
// const booklList1 = new Libruary(['Book 1', 'Book 2', 'Book 3', 'Book 4',])
// booklList1.addBook('')
// console.log(booklList1.removeBook())
// console.log(booklList1)

// !! 2.2-misol

// function Animal(type, sound){
//     this.type = type;
//     this.sound = sound;
// }

// Animal.prototype.makeSound = function(){
//     console.log(`${this.type}ning ovozi: ${this.sound}`);
// };

// const dog = new Animal('it', 'voov');
// const cat = new Animal('Mushuk', 'Meow')

// dog.makeSound();
// cat.makeSound();



// !! 2.3-misol

// function Course(forename, continuous, price){
//     this.forename = forename
//     this.continuous = continuous
//     this.price = price
// }
// Course.prototype.follow = function(){
//     console.log(`${this.forename} kursining davomiyligi ${this.continuous}, narxi esa ${this.price}`)

// };
// const fronted = new Course("Fronted", '6oy', "500ming so'm")
// fronted.follow();


// !! 2.4 misol 
// function Movie(forename, rating){
//     this.forename = forename
//     this.rating = rating
// }

// Movie.prototype.recommend = function(){
//     console.log(`${this.forename} kinosi dunyo reytingida ${this.rating}-o'rinda turadi ko'rishingizni maslahat beraman`)
// }
// const forsaj = new Movie("forsaj", "10")
// forsaj.recommend();

// !! 2.5-misol

function Order(forename, amount, total){
    this.forename = forename
    this.amount = amount
    this.total = total
}
Order.prototype.calculateTotal = function(){
    console.log(`${this.forename}ning miqdori ${this.amount}kg, umumiy narxi esa ${this.total * this.amount}so'm`)
}
const order1 = new Order("olma", "12", "12000")
order1.calculateTotal();

// !!ES6 Classes 3.1 - misol










