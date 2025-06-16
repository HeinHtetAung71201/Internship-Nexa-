const mongodb = require('mongoose');
const CategorySchema = new mongodb.Schema({
  name: {
    type: String,
    required: true,
  },
});
module.exports = mongodb.model('Category', CategorySchema);