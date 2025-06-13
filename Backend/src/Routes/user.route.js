const express= require('express');
const {createUser,getAllUsers, getSingleUser, updateUserData, deleteUsers} =require("../Controller/users.controller");
const userRouter= express.Router();

userRouter.post("/",createUser);
userRouter.get("/",getAllUsers);
userRouter.get('/:id',getSingleUser);
userRouter.put('/:id',updateUserData);
userRouter.delete('/:id',deleteUsers);
module.exports= userRouter;