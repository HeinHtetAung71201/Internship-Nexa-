const categoryModel = require('../Model/category.model');
const express = require('express');

const CreateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Category name is required" });
    }
    
    const newCategory = new categoryModel({ name });
    const createdCategory = await newCategory.save();
    
    res.status(201).json({ data: createdCategory });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
const SelectAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    res.json({ data: categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const SelectProductsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const products = await categoryModel
    .findById(categoryId)
    .populate('products');
    if (!products) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json({ data: products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }}


module.exports = {CreateCategory, SelectAllCategories, SelectProductsByCategory};
