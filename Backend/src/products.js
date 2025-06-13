const express= require('express');
const mongo= require('mongoose');
const ProductModel=require('./Model/products.model');
const productRouter= require('./Routes/product.route');
const CategoryRouter= require('./Routes/category.route');
// const categoryModel = require('./Model/category.model');
const app= express();
const PORT=8080;
app.use(express.json());
app.use('/product',productRouter);
app.use('/category',CategoryRouter);

mongo.connect('mongodb://127.0.0.1:27017/Products')
.then(()=> console.log("connected successfully"))
.catch(error=> console.error(error));

app.listen(PORT, ()=>{
    console.log("Server is running on the port No. "+PORT);
})