const userModel = require('../Model/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { model } = require('mongoose');

const userLogin = async (req, res) => {
     const { email, password } = req.body;
     if(!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
     }
     const existentUser = await userModel.findOne({email});
     console.log(existentUser,"existent user");
     if(!existentUser){
        return res.status(404).json({ message: 'user not found' });
     }
     if(!bcrypt.compare(password, existentUser.password)) {
        return res.status(401).json({ message: 'Invalid password' });
     }
     const token = jwt.sign({ id: existent
}

const createUser = async( req, res)=>{
    const {name , email, password}= req.body;
    const id= req.params.id;
    const hashPassword = bcrypt.hashSync(password,10);
    console.log(hashPassword,"hashed");
    const createUser= await userModel.create({
        name,
        email,
        password:hashPassword
    })
    res.json({
        message: "User created successfully",
        user: createUser
    });
}
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await userModel.findByIdAndDelete(id);
        if (!deleteUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', user: deleteUser });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
}

module.exports = {
    userLogin,
    createUser,
    getAllUsers,
    deleteUser,
};