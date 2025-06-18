const bookModel = require('../Model/book.model');

// Create a new book
const createBook = async(req, res) => {
    try{
        console.log(req.file, "file");
        console.log(req.file.path, "file path");
        const {name, auther, category} = req.body;
         const imgUrl = req.file 
        ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` 
      : null;
        const newBook= bookModel.create({
            name,
            auther,
            category,
            imgUrl
        })
        res.status(201).json({
            message: 'Book created successfully',
            book: newBook,
        });
    }
    catch(error){
        res.status(500).json({
            message: 'Error creating book',
            error: error.message,
        });
    }
}
const getAllBooks = async(req, res) => {
    try{
        const books = await bookModel.find({}).populate('auther','name').populate('category','name');
        res.status(200).json({
            message: 'Books retrieved successfully',
            books,
        });
    }
    catch(error){
        res.status(500).json({
            
            message: 'Error retrieving books',
            error: error.message,
        });
    }
}   
const updateBook = async(req, res) => {
    try{
        const {id} = req.params;
        const {name, auther, category} = req.body;
        const updatedBook = await bookModel.findByIdAndUpdate(id, {name, auther, category}, {new: true});
        if(!updatedBook){
            return res.status(404).json({
                message: 'Book not found',
            });
        }
        res.status(200).json({
            message: 'Book updated successfully',
            book: updatedBook,
        });
    }
    catch(error){
        res.status(500).json({
            message: 'Error updating book',
            error: error.message,
        });
    }
}   
const deleteBook = async(req, res) => {
    try{
        const {id} = req.params;
        const deletedBook = await bookModel.findByIdAndDelete(id);
        if(!deletedBook){
            return res.status(404).json({
                message: 'Book not found',
            });
        }  
        res.status(200).json({
            message: 'Book deleted successfully',
            book: deletedBook,
        });
    }
    catch(error){
        res.status(500).json({
            message: 'Error deleting book',
            error: error.message,
        });
    }
}

// Export the controller functions
module.exports = {
    createBook,
    getAllBooks,
    updateBook,     
    deleteBook,
};