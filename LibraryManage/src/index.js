const express = require('express')
const multer  = require('multer')

const mongoose = require('mongoose');
const bookRoute = require('./Route/book.route');
const autherRoute = require('./Route/auther.route');
const categoryRoute= require('./Route/category.route');
const app = express();
const PORT = 5000;
const MONGO_URI = 'mongodb://localhost:27017/bookstore';
const upload= require('./Middleware/ImageUpload');
var cors = require('cors')
const fs = require('fs');

app.use(cors());

app.use(express.json());


app.use('/uploads', express.static('uploads')); 

app.post('/profile', function (req, res) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file, "file");
  console.log(req.body, "body");
  res.json({
    message: "file uploaded successfully",
    file: req.file,
 //   body: req.body
  })
})

app.use('/book', bookRoute);
app.use('/auther', autherRoute);
app.use('/category', categoryRoute);
// app.use('/image', imgRouter);

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log('Connected to MongoDB');

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});