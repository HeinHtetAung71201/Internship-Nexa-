const uerModel= require('../Model/user.model');
const express = require('express');
const router = express.Router();
const {  createUser,getAllUsers,deleteUser,userLogin } = require('../Controller/user.controller');

// Route to handle user login
router.post('/login', userLogin);
router.post('/', createUser);
router.get('/',getAllUsers);
router.delete('/:id', deleteUser);

module.exports = router;