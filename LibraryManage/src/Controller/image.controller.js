const { model } = require('mongoose');
const ImageUpload= require('../Middleware/ImageUpload')
const imageModel = require('../Model/images.model');
const createImage = async (req, res) => {
    try {
        const { name } = req.body;
        const imagePath = req.file.path; // Assuming the file is uploaded using multer
        const newImage = new imageModel({
            name,
            imagePath,
        });
        await newImage.save();
        res.status(201).json({
            message: 'Image uploaded successfully',
            image: newImage,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error uploading image',
            error: error.message,
        });
    }
}

const getAllImages = async (req, res) => {
    try {
        const images = await imageModel.find();
        res.status(200).json({
            message: 'Images retrieved successfully',
            images,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving images',
            error: error.message,
        });
    }
}
module.exports = {
    createImage,   
    getAllImages
};  