// app.js
const express = require('express');
const mongoose = require('mongoose');
const userRouter= require("./Routes/user.route");

const app = express();
const PORT = 5000;

app.use(express.json()); // To parse JSON bodies


// Create a user (POST)
// app.post('/users',);
app.use('/user',userRouter);

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=> console.log("mongodb connected successfully"))
.catch(error => console.log(error))
;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
