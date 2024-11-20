class Book {
    constructor(title, author, isbn) {
        this.title = title; //Название
        this.author = author; //Автор
        this.isbn = isbn; //ISBN
        this.isFree = true; //Статус книги - свободна или нет
    }
}

class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Книга добавлена в библиотеку.`);
    }
    borrowBook(isbn) {
        const book = this.books.find(item => item.isbn === isbn);
        if (book) {
            if (book.isFree) {
                book.isFree = false; 
                console.log(`Книга взята`);
            } else {
                console.log(`Книги нет`);
            }
        } else {
            console.log('Книга не найдена');
        }
    }

    returnBook(isbn) {
        const book = this.books.find(item => item.isbn === isbn); 
        if (book) {
            if (!book.isFree) {
                book.isFree = true;
                console.log(`Книгу вернули`);
            } else {
                console.log(`Книгу не брали`);
            }
        } else {
            console.log('Книга не найдена.');
        }
    }

    listAvailableBooks() {
        const availableBooks = this.books.filter(item => item.isFree === true);
        if (availableBooks.length > 0) {
            console.log('Доступные книги:');
            availableBooks.forEach((item, index) => {
                console.log(`${index}. ${item.title} (Автор: ${item.author}, ISBN: ${item.isbn}) `);
            });
        } else {
            console.log('Нет доступных книг');
        }
    }
}
   