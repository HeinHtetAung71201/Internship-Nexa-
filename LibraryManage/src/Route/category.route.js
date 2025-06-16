const express = require('express');
const categoryRouter = express.Router();
const { createCategory,
    getAllCategories,
    updateCategory, 
    deleteCategory } = require('../Controller/category.controller');
// Define the route for creating a new category
categoryRouter.post('/create', createCategory);
categoryRouter.get('/getAll', getAllCategories);
categoryRouter.put('/update/:id', updateCategory); 
categoryRouter.delete('/delete/:id', deleteCategory); 


// Export the category router
module.exports = categoryRouter; 