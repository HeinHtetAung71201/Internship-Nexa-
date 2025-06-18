import axios from 'axios'
import React, { useEffect, useState } from 'react'

const  Book= () => {
//book ui, auth , 
  const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/book');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
// fetchBooks()
  useEffect (()=> {
    fetchBooks();
  }, []);
  //  axios.get('http://localhost:5000/book').then((res) => {
  //   console.log(res.data)
  //   setBooks(res.data)
  // });
 
  return (
    <div> 
      <ul className="">
  {books.map((book) => (
    <li key={book._id} className="">
      
      <img
        src={book.imgUrl}
        alt={book.title}
        className="w-32 h-48 mb-4 rounded"
      />
      
    </li>
  ))}
</ul>

    </div>
  )
}

export default Book