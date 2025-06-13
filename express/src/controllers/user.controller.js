const userModel = require("../models/user.model")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const  userLogin = async (req, res) => {
    // Handle user login logic here
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    // search user by email
    const existedUser = await userModel.findOne({ email });
    if (!existedUser) {
        return res.status(404).json({ message: "User not found" });
    }

    if ( !bcrypt.compare(password, existedUser.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
   }

  // Create token
  
  const token = jwt.sign({ id: existedUser._id, username: existedUser.name }, process.env.SECRETKEY, { expiresIn: '1h' });
  
  res.json({ token });

}
const getUser = async (req, res) => {
   try { 
    console.log(req.user, "user from middleware")
     const {   name } = req.query;
          const  users = await userModel.find({})
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
        const { name, email, password } = req.body // { name: 'Hein Htet Aung' }
        const hashPassword =  bcrypt.hashSync(password, 10)
        // console.log(hashPassword, "hashPassword")
        const createdUser = await userModel.create({ name, email, password: hashPassword });
   
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

module.exports ={ getUser, createUser, updateUser, deleteUser, userLogin }