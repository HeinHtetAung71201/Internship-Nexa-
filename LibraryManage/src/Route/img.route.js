const express = require('express');
const imageRouter = express.Router();
const { createImage, getAllImages } = require('../Controller/image.controller');
const upload = require('../Middleware/ImageUpload');
// Define the route for creating a new image
imageRouter.post('/create', upload.single('image'), createImage);
imageRouter.get('/getAll', getAllImages);
// Export the image router
module.exports = imageRouter;

bookRouter.post('/', 
    upload.single('myFile'),
    createBook);