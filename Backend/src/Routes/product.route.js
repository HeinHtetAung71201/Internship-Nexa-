const { InputProduct, SelectAllProducts, SelectParticular, UpdateProduct, DelProduct, getProductsByCategory }= require('../Controller/products.controller');
const express= require('express');
const mongo=require('mongoose');
const productsModel = require('../Model/products.model');
const ProductRouter= express.Router();

ProductRouter.post('/',InputProduct);
ProductRouter.get('/',SelectAllProducts);
ProductRouter.get('/get-by-category/:catId', getProductsByCategory); // Assuming you have a function to get products by category
ProductRouter.get('/:id',SelectParticular);
ProductRouter.put('/:id',UpdateProduct);
ProductRouter.delete('/:id',DelProduct);
// ProductRouter.get('/',getCategoryWithProducts);


module.exports=ProductRouter;