require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');   
const userRoutes = require('./src/Route/user.route');
const app = express();  
const PORT =  3000;
app.use(express.json()); // Middleware to parse JSON bodies
app.use('/user', userRoutes); // Use user routes
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/UserLogin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> console.log("mongodb connected successfully"))
.catch(error => console.log(error))
;

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
})