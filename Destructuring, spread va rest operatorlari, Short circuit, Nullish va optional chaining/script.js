// !! 1-misol Destructuring
const books = [
    { title: "Book A", author: "Author 1", price: 10 },
    { title: "Book B", author: "Author 2", price: 15 }
  ];
  const [n1, n2] = books

  console.log(`"${n1.title}: $${n1.price}"`, `"${n2.title}: $${n2.price}"`);

// !! 2-misol

const student = {
    name: "Ali",
    surname: "Valiyev",
    grades: [80, 90, 85],
    class: "10-B"
  };
  const {names, surname, grades, clas} = student

  function sum(x, y, z) {
    let result = ((x + y + z) / grades.length);
    return result
  }
  const gradess = (sum(...grades)) 

  console.log(`${names} ${surname}, O'rtacha baho: ${gradess}`)

// !! 3-misol

const fruits = [
    { name: "Apple", color: "Red", origin: "USA" },
    { name: "Banana", color: "Yellow", origin: "Ecuador" }
  ];
   // ["Apple from USA", "Banana from Ecuador"]
   const [usa, ecuador] = fruits
   console.log(`["${usa.name} from ${usa.origin}", "${ecuador.name} from ${ecuador.origin}"]`)

//!! 1-misol Spread Operator

const authors = ["Tolstoy", "Dostoevsky"];
const newarr = [...authors, "Chekhov", "Pushkin"]; // ["Tolstoy", "Dostoevsky", "Chekhov", "Pushkin"]
console.log(newarr)

// !! 2-misol

const user = { name: "Ali", age: 25, address: "Old Street" };
const users = {...user, address: "New Avenu"}
console.log(users)

// !! 3-misol

const details = { name: "Laptop", brand: "Dell" };
const pricing = { price: 1200, discount: 10 };
console.log({...details, ...pricing}) 

// !! 1-misol Rest Operator
function multiplyRest(x,...rest){
    return rest.map(num => num *x)
}
console.log(multiplyRest(2, 3, 4, 5));

// !!! 2-misol  tushinmagan joyim bor

const [first, ...rest] = [1, 2, 3, 4];
console.log(`[first : ${first}, rest: ${rest}]`)

///////////
function splitArray(arr) {
    const [first, ...rest] = arr;
    return { first, rest };
  }
  console.log(splitArray([1, 2, 3, 4]));
  


//   !! 3-misol

function separation(userss) {
    const { name, age, ...rest } = userss;
    return rest;
  }
  
  const userss = { name: "Ali", age: 25, city: "Tashkent", country: "Uzbekistan" };
  console.log(separation(userss));
  

//   !! 1-misol  Short Circuit Evaluation (Qisqa tutashuvni baholash)