const categoryModel = require('../Model/category.model');   
const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = new categoryModel({
            name,
        });
        await newCategory.save();
        res.status(201).json({
            message: 'Category created successfully',
            category: newCategory,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error creating category',
            error: error.message,
        });
    }
}
const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryModel.find();
        res.status(200).json({
            message: 'Categories retrieved successfully',
            categories,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving categories',
            error: error.message,
        });
    }
} 
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, { name }, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({
                message: 'Category not found',
            });
        }   
        res.status(200).json({
            message: 'Category updated successfully',
            category: updatedCategory,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error updating category',
            error: error.message,
        });
    }
}
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await categoryModel.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).json({
                message: 'Category not found',
            });
        }
        res.status(200).json({
            message: 'Category deleted successfully',
            category: deletedCategory,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting category',
            error: error.message,
        });
    }
}

// Export the controller functions
module.exports = {
    createCategory,
    getAllCategories,
    updateCategory, 
    deleteCategory
};