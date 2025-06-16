const express = require('express');
const {createBook,
    getAllBooks,
    updateBook,     
    deleteBook,} = require('../Controller/book.controller');
// const { model } = require('mongoose');
const bookRouter = express.Router();

bookRouter.post('/create', createBook);
bookRouter.get('/getAll', getAllBooks);
bookRouter.put('/update/:id', updateBook);  
bookRouter.delete('/delete/:id', deleteBook);

module.exports = bookRouter;
