const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  name: String,
  imagePath: String
});

module.exports = mongoose.model('Image', ImageSchema);
