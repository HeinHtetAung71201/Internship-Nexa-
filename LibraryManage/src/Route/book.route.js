const express = require('express');
const {createBook,
    getAllBooks,
    updateBook,     
    deleteBook,} = require('../Controller/book.controller');
const upload = require('../Middleware/ImageUpload');
// const { model } = require('mongoose');
const bookRouter = express.Router();

bookRouter.post('/create',upload.single('avatar'),createBook);
bookRouter.get('/getAll', getAllBooks);
bookRouter.put('/update/:id', updateBook);  
bookRouter.delete('/delete/:id', deleteBook);

module.exports = bookRouter;
