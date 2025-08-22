class LBook {
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

class LUser {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Library {
    private books: LBook[] = [];
    private users: LUser[] = [];

    addBook(book: LBook): void {
        this.books.push(book);
    }

    listBooks(): void {
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



