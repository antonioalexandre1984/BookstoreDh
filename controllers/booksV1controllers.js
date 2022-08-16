const {Book} = require('../models');
const { Op } = require('sequelize');

const booksV1Controllers = {
    getAllBooks: async (req, res,next) => {
        try{
            const books = await Book.findAll();
            return res.status(200).json(books);
        } catch (err) {
            console.log(err)
            if (err.name === 'SequelizeConnectionRefusedError') {
                return res.status(500).json({ err: true, message: 'Internal server error' });
            }   // 500 is the default status code for a server error
            return res.status(400).json({err:true, message:"Requisição inválida"});
        }
    },
    getOneBook: async (req, res, next) => {
        try{
            const {id} = req.params;
            const book = await Book.findByPk(id);
            if (!book) {
                return res.status(404).json({ err: true, message: "Livro não encontrado" });
            }
            return res.status(200).json(book);
        } catch (err) {
            console.log(err)
            if (err.name === 'SequelizeConnectionRefusedError') {
                return res.status(500).json({ err: true, message: 'Internal server error' });
            }   // 500 is the default status code for a server error
            return res.status(400).json({err:true, message:"Requisição inválida"});
        }
    },
    storeOneBook: async (req, res, next) => {
        try{
            const { title, total_pages, author, release_year,stock} = req.body;
            const verifyBookExists = await Book.findOne({
                where: {
                    [Op.or]: [{ title},{author}]
                }
            });
            if (verifyBookExists) {
                return res.status(422).json({ err: true, message: "Livro já existe" });
            }
            const book = await Book.create({
                title,
                total_pages,
                author,
                release_year,
                stock
            });
                return res.status(201).json(book);
        } catch (err) {
            console.log(err)
            if (err.name === 'SequelizeConnectionRefusedError') {
                return res.status(500).json({ err: true, message: 'Internal server error' });
            }   // 500 is the default status code for a server error
            return res.status(400).json({err:true, message:"Requisição inválida"});
        }
    },
    updateOneBook: async (req, res, next) => {
        try{
            const { id } = req.params;
            const { title, total_pages, author, release_year,stock} = req.body;
            const verifyBookExists = await Book.findByPk(id);
            if (!verifyBookExists) {
                return res.status(404).json({ err: true, message: "Livro não encontrado" });
            }
            await Book.update({
                title,
                total_pages,
                author,
                release_year,
                stock
            },
                { where: {id} }
            );
            const book = await Book.findByPk(id);
            return res.status(200).json(book);
        } catch (err) {
            console.log(err)
            if (err.name === 'SequelizeConnectionRefusedError') {
                return res.status(500).json({ err: true, message: 'Internal server error' });
            }   // 500 is the default status code for a server error
            return res.status(400).json({err:true, message:"Requisição inválida"});
        }
    },
    deleteOneBook: async (req, res, next) => {
        try{
            const { id } = req.params;
            const book = await Book.findByPk(id);
            if (!book) {
                return res.status(404).json({ err: true, message: "Livro não encontrado" });
            }
            await Book.destroy({
                where:{id}
            });
            return res.status(204).json({message:"Livro deletado com sucesso"});
        } catch (err) {
            console.log(err)
            if (err.name === 'SequelizeConnectionRefusedError') {
                return res.status(500).json({ err: true, message: 'Internal server error' });
            }   // 500 is the default status code for a server error
            return res.status(400).json({err:true, message:"Requisição inválida"});
        }

    }
}

module.exports = booksV1Controllers;
