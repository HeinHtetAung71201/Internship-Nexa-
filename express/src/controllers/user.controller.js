const userModel = require("../models/user.model")


const getUser = async (req, res) => {
   try { 
     const {   name } = req.query;
          const  users = await userModel.find({name})
        res.json({
            message: "get user list",
            data: users,
            name,
        })

   } catch (error) {
       res.status(500).json({
       
        message: error.message
       })
   }
}

const createUser = async ( req, res ) => {
    try {
        console.log(req.body, "body") 
        const token = req.headers.token
        const id = req.params.id
        const { name, email } = req.body // { name: 'Hein Htet Aung' }
        const createdUser = await userModel.create(req.body)
   
        res.json({
            message: "create user",
            data: createdUser,
          
        })
}

    catch (error) {
       res.status(500).json({
        message: error.message
       })
   }
}


const updateUser =async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports ={ getUser, createUser, updateUser, deleteUser }