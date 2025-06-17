const mongodb= require('mongoose');
const BookSchema = new mongodb.Schema({
  name: {
    type: String,
    required: true,
  },
  auther:{
    type: mongodb.Schema.Types.ObjectId,
    ref: 'Auther',
  },
  category: {
    type: mongodb.Schema.Types.ObjectId,
    ref: 'Category'
    }, 
    imgUrl: {  
      type: String,
      required: true,
    }, 
});
module.exports= mongodb.model('Book', BookSchema); 