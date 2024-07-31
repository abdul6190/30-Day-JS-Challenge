// -------- OBJECT CREATION AND ACCESS ----------
// create an object book with properties title, author, year
const book = {
  title: 'Decoding JavaScript',
  author: 'Rushabh Mulraj Shah',
  year: 2023,
};
console.log(book);
console.log('Title = ', book.title);
console.log('Author = ', book.author);

// ------- OBJECT METHODS ---------
// add a method to the book object that returns a string with book's title and author
book.bookInfo = function () {
  return `${book.title} is written by ${book.author}`;
};

console.log(book.bookInfo());

// add a method to the book object that takes a parameter(year) and update's the book's year property

book.updateYear = function (year) {
  book.year = year;
};
book.updateYear('2024');
console.log('Book after updating year ', book);

// -------- NESTED OBJECTS ----------
// Create a nested object representing a library with properties like name and books(an array of book objects)
let library = {
  name: 'City Library',
  books: [
    {
      title: 'Python Blackbook',
      author: 'Dr. Nageshwara Rao',
      year: 2020,
    },
    {
      title: 'Decoding JavaScript',
      author: 'Rushabh Mulraj Shah',
      year: 2023,
    },
    {
      title: 'Let us Python',
      author: 'Yashavant Kanetkar',
      year: 2021,
    },
    {
      title: 'Computer Science with Python',
      author: 'Sumita Arora',
      year: 2024,
    },
    {
      title: "You don't know JS",
      author: 'Kyle Simpson',
      year: 2020,
    },
  ],
};
console.log('library =', library);

// access and log the name of the library and titles of all the books in the library
console.log('Library Name = ', library.name);
console.log('Titles of all the books in the library...');
library.books.map((book) => console.log(book.title));

// this keyword
// add a method to the book object that uses this keyword to return book's title and year
book.displayTitleYear = function () {
  return `${this.title} is published in ${this.year}`;
};

console.log(book.displayTitleYear());

// ------ OBJECT ITERATION --------
for (const key in book) {
  console.log(`${key} : ${book[key]}`);
}

// Object.keys() and Object.values to log all the keys and values
console.log('Keys of Book object = ', Object.keys(book));
console.log('Values of Book object = ', Object.values(book));
