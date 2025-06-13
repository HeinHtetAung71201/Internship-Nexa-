const express = require("express");
const { getUser , createUser, updateUser, deleteUser, userLogin} = require("../controllers/user.controller");
const { jwtVerify } = require("../middleware/middleware");

const userRouter = express.Router();

userRouter.post('/login', userLogin);
userRouter.get('/', jwtVerify , getUser);
userRouter.post('/', jwtVerify, createUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

module.exports = userRouter