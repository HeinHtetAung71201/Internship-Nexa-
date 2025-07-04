// models/products.model.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
// models/products.model.js