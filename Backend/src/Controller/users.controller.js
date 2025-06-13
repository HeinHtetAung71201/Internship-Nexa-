const userModel= require("../Model/users.model");

const createUser= async (req, res) => {
    try {
       const id=req.params.id;
       const {name,email} = req.body;
       const createdUser= await userModel.create(req.body);
       res.json({
        message: "create user",
        data: createdUser
       })
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getAllUsers= async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getSingleUser=async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateUserData= async (req, res) => {
    try {
        const id =req.params.id;
        console.log(req.body)
        console.log("updateuser",   id)
        const updatedUser = await userModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );
        res.json({data : updatedUser});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteUsers= async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports ={createUser,getAllUsers,getSingleUser,updateUserData,deleteUsers};