const uerModel= require('../Model/user.model');
const express = require('express');
const router = express.Router();
const { jwtVerify } = require('../Middleware/middleware');
const {  createUser,getAllUsers,deleteUser,userLogin } = require('../Controller/user.controller');

// Route to handle user login
router.post('/login', userLogin);
router.post('/', createUser);
router.get('/',jwtVerify,getAllUsers);
router.delete('/:id', deleteUser);

module.exports = router;