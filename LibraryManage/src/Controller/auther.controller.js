const autherModel = require('../Model/auther.model');

// Create a new author
const createAuther = async (req, res) => {
    try {
        const { name } = req.body;
        const newAuther = new autherModel({
            name,
        });
        await newAuther.save();
        res.status(201).json({
            message: 'Author created successfully',
            auther: newAuther,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating author',
            error: error.message,
        });
    }
};
const getAllAuthers = async (req, res) => {
    try {
        const authers = await autherModel.find();
        res.status(200).json({
            message: 'Authers retrieved successfully',
            authers,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving authers',
            error: error.message,
        });
    }
}
const updateAuther = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedAuther = await autherModel.findByIdAndUpdate(id, { name }, { new: true });
        if (!updatedAuther) {
            return res.status(404).json({
                message: 'Author not found',
            });
        } 
        res.status(200).json({
            message: 'Author updated successfully',
            auther: updatedAuther,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error updating author',
            error: error.message,
        });
    }
}
const deleteAuther = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAuther = await autherModel.findByIdAndDelete(id);
        if (!deletedAuther) {
            return res.status(404).json({
                message: 'Author not found',
            });
        }
        res.status(200).json({
            message: 'Author deleted successfully',
            auther: deletedAuther,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting author',
            error: error.message,
        });
    }
};

module.exports = {
    createAuther,
    getAllAuthers,
    updateAuther, 
    deleteAuther
};