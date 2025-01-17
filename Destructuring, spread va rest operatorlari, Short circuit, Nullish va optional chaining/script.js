// !! 1-misol Destructuring
const books = [
    { title: "Book A", author: "Author 1", price: 10 },
    { title: "Book B", author: "Author 2", price: 15 }
  ];
  const [n1, n2] = books

  console.log(`"${n1.title}: $${n1.price}"`, `"${n2.title}: $${n2.price}"`);

// !! 2-misol