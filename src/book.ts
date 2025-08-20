// 6. Create a class Book with attributes title, author, year.
class Book {
    title: String;
    author: String;
    year: number;

    constructor( title: String, author: String, year: number){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    display() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }
}

const book = new Book("Đắc nhân tâm", "Dale Carnegie", 1936);
book.display()