import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Authors } from './Authors';

export const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [editAuthor, setEditAuthor] = useState(null);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = () => {
    axios.get('http://localhost:5000/auther/getAll')
      .then((res) => setAuthors(res.data.authers || []))
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this author?')) {
      axios.delete(`http://localhost:5000/auther/delete/${id}`)
        .then(fetchAuthors)
        .catch(err => alert('Delete failed: ' + err.message));
    }
  };

  const handleEditClick = (author) => {
    setEditAuthor(author);
  };

  return (
    <>
      <Authors author={editAuthor} onUpdate={fetchAuthors} />

      <div className='w-full flex justify-center items-center mt-5 '>
        <div className='w-90 p-5 border border-black rounded'>
          <div className='AuthorLists text-center font-bold text-lg mb-3 border-b-2'>Author Lists</div>
          <ul className='flex flex-col'>
            {authors.map((author) => (
              <li key={author._id} className='mt-2'>
                <div className='flex justify-between items-center'>
                  <div>{author.name}</div>
                  <div className='flex gap-2'>
                    <button className='border px-2 text-red-600' onClick={() => handleDelete(author._id)}>Del</button>
                    <button className='border px-2 text-blue-600' onClick={() => handleEditClick(author)}>Update</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
