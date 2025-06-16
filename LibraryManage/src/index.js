const express = require('express');
const mongoose = require('mongoose');
const bookRoute = require('./Route/book.route');
const autherRoute = require('./Route/auther.route');
const categoryRoute= require('./Route/category.route');
const app = express();
const PORT = 5000;
const MONGO_URI = 'mongodb://localhost:27017/bookstore';
var cors = require('cors')
 
app.use(cors());

app.use(express.json());
// 
app.use('/book', bookRoute);
app.use('/auther', autherRoute);
app.use('/category', categoryRoute);

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log('Connected to MongoDB');

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});