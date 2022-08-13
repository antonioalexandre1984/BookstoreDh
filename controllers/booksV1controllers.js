const {Book} = require('../models');

const booksV1Controllers = {
    getAllBooks: async (req, res,next) => {
        const books = await Book.findAll();
        return res.json(books);
    }
}

module.exports = booksV1Controllers;
