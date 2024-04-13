class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    get state() {
        return this._state;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}


class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      return this.books.find(book => book[type] === value) || null;
    }
  
    giveBookByName(bookName) {
      const book = this.books.find(book => book.name === bookName);
      if (book) {
        this.books.splice(this.books.indexOf(book), 1);
        return book;
      }
      return null;
    }
  }

  const library = new Library("Library Name");

// Add some books to the library
library.addBook(
  new DetectiveBook(
    "Author Name",
    "Book Title",
    1919,
    300
  )
);
library.addBook(
  new FantasticBook(
    "Author Name",
    "Book Title",
    1920,
    200
  )
);

// Find a book released in 1919
const book1919 = library.findBookBy("releaseDate", 1919);
console.log(book1919); // Output: DetectiveBook {... }

// Give a book to a reader
const givenBook = library.giveBookByName("Book Title");
console.log("Given book:", givenBook);

// Damage the book
givenBook.state -= 50;

// Repair the book
givenBook.fix();

// Try to add the repaired book back to the library
library.addBook(givenBook);
console.log("Books in the library:", library.books);



class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark < 2 || mark > 5) return;
  
      if (!this.marks[subject]) {
        this.marks[subject] = [];
      }
  
      this.marks[subject].push(mark);
    }
  
    getAverageBySubject(subject) {
      if (!this.marks[subject]) return 0;
  
      const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
      return sum / this.marks[subject].length;
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      const sum = subjects.reduce((acc, subject) => {
        const avg = this.getAverageBySubject(subject);
        return acc + avg;
      }, 0);
  
      return sum / subjects.length;
    }
  }
  
  const student = new Student("Олег Никифоров");
  student.addMark(5, "химия");
  student.addMark(5, "химия");
  student.addMark(5, "физика");
  student.addMark(4, "физика");
  student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
  console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
  console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
  console.log(student.getAverage()); // Средний балл по всем предметам 4.75