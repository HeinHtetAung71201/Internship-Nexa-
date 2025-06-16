const express = require('express');
const {createAuther,
    getAllAuthers,
    updateAuther, 
    deleteAuther} = require('../Controller/auther.controller');
const bookRouter = express.Router();

bookRouter.post('/create', createAuther);
bookRouter.get('/getAll', getAllAuthers);
bookRouter.put('/update/:id', updateAuther);
bookRouter.delete('/delete/:id', deleteAuther);

module.exports = bookRouter;

