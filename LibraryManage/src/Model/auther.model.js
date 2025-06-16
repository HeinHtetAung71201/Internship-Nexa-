const mongodb= require('mongoose');
const AutherSchema = new mongodb.Schema({
  name: {
    type: String,
    required: true,
  },});
module.exports= mongodb.model('Auther', AutherSchema);
// Auther model for MongoDB using Mongoose