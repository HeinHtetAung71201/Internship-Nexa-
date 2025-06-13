const {CreateCategory, SelectAllCategories, SelectProductsByCategory} = require('../Controller/category.controller');
const express = require('express');
const CategoryRouter = express.Router();
const categoryModel = require('../Model/category.model');

CategoryRouter.post('/', CreateCategory);
CategoryRouter.get("/",SelectAllCategories);
CategoryRouter.get('/:id',SelectProductsByCategory);
module.exports = CategoryRouter;
