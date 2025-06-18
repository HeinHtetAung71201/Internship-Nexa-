import { useEffect, useState } from 'react';
import axios from 'axios';
export const BookList = () => {
    const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/book/getAll');
      console.log(response.data, "data");
      console.log(typeof response.data, "type of data");
      // Ensure response.data is always an array
      setBooks(Array.isArray(response.data.books) ? response.data.books : []);
    } catch (error) {
      console.error('Error fetching books:', error);
      setBooks([]); // fallback to empty array on error
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    console.log("Updated books state:", books);
  }, [books]);
  return (
   <>
    <h1 className="text-2xl font-bold text-center my-6">Book List</h1>
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <div
          key={book._id}
          className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col items-center p-4"
        >
            <img
            src={book.imgUrl}
            alt={book.title}
            className="w-32 h-48 mb-4 rounded"
          />
          <h3 className="text-lg font-bold mb-1 text-center">{book.name}</h3>
          <p className="text-sm text-gray-600 mb-1">
            <strong>Author:</strong> {book.auther?.name || 'Unknown'}
          </p>
          <p className="text-sm text-gray-600 mb-3">
            <strong>Category:</strong> {book.category?.name || 'Uncategorized'}
          </p>
          <button
            className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            onClick={() => alert(`Added "${book.name}" to cart`)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
   </>
  )
  
}
