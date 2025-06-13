require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
// const { getUser } = require('./controllers/user.controller');
const userRouter = require('./routes/user.route');
const app = express()
const port = 3000

app.use(express.json()) //body parser



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