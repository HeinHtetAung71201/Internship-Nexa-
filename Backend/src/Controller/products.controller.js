const productModel = require("../Model/products.model");
// const categoryModel = require('../Model/category.model');

// CREATE a product
const InputProduct = async (req, res) => {
  try {
    const { name, price, qty, description,category} = req.body;
    const createdProduct = await productModel.create({ name, price, qty, description, category });


    res.status(201).json({ data: createdProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// READ all products
const SelectAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({ }).populate('category'); // ❗️ Added populate to include category details
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

 const getProductsByCategory = async (req, res) => {
  try {
    const products = await productModel.find({category: req.params.catId}) // ❗️ Added populate to include category details
    res.json({ data: products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ a single product by ID
const SelectParticular = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ data: product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE a product
const UpdateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await productModel.findByIdAndUpdate(id, req.body, { new: true }); // ❗️ `await` & `{ new: true }` added
    if (!updated) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product updated", data: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE a product
const DelProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await productModel.findByIdAndDelete(id); // ❗️ `await` added
    if (!deleted) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const Category= require('../Model/category.model')
const getCategoryWithProducts= async (req,res)=>{
  try{
    const categories= await Category.find().populate('products'); 
    res.json({data: categories});
  }
  catch(error){
    res.status(500).json({error: err.message});
  }
}

module.exports = {
  InputProduct,
  SelectAllProducts,
  SelectParticular,
  UpdateProduct,
  DelProduct,
  getCategoryWithProducts,
  getProductsByCategory
};
