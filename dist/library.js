"use strict";
class LBook {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class LUser {
    constructor(name) {
        this.name = name;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        console.log("Books in library:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} by ${book.author}`);
        });
    }
}
const library = new Library();
const book1 = new LBook("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new LBook("1984", "George Orwell");
library.addBook(book1);
library.addBook(book2);
library.listBooks();
