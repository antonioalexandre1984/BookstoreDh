const { Book } = require('../models');

const getAllBooks = async () => {
    const books = await Book.findAll();
    console.log(books);
}

getAllBooks();