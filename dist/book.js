"use strict";
// 6. Create a class Book with attributes title, author, year.
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    display() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}
const book = new Book("Đắc nhân tâm", "Dale Carnegie", 1936);
book.display();
