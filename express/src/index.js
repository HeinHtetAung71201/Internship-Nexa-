require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
// const { getUser } = require('./controllers/user.controller');
const userRouter = require('./routes/user.route');
const app = express()
const port = 3000
const multer  = require('multer')
//const upload = multer({ dest: 'uploads/' })
const path = require('path');
app.use(express.json()) //body parser
const upload = require('./middleware/imageUpload');
// Storage configuration

// app.use('/uploads', express.static('uploads'));


app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file, "file")
  res.json({
    message: "file uploaded successfully",
    file: req.file,
 //   body: req.body
  })
})



app.use('/user', userRouter)


mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=> console.log("mongodb connected successfully"))
.catch(error => console.log(error))
;

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})