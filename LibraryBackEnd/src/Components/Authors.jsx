import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Authors = ({ author, onUpdate }) => {
  const [name, setName] = useState('');

  // Set name when editing
  useEffect(() => {
    if (author) {
      setName(author.name);
    } else {
      setName('');
    }
  }, [author]);

  // INSERT new author
  const handleInsert = () => {
    if (!name.trim()) return alert("Name is required");

    axios.post('http://localhost:5000/auther/create', { name })
      .then(() => {
        alert('Author inserted');
        setName('');
        onUpdate(); // Refresh list
      })
      .catch((err) => {
        alert('Insert failed: ' + err.message);
      });
  };

  // UPDATE existing author
  const handleUpdate = () => {
    if (!author || !name.trim()) return alert("Author ID and name are required");

    axios.put(`http://localhost:5000/auther/update/${author._id}`, { name })
      .then(() => {
        alert('Author updated');
        setName('');
        onUpdate(); // Refresh list
      })
      .catch((err) => {
        alert('Update failed: ' + err.message);
      });
  };

  return (
    <div className='w-full flex justify-center items-center mt-5 flex-col'>
      <h2 className='text-lg font-bold mb-2'>
        {author ? 'Edit Author' : 'Add New Author'}
      </h2>

      <div className='flex justify-between gap-3'>
        <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter author name'
        className='border border-black p-3 rounded'
      />

      {author ? (
        <button
          onClick={handleUpdate}
          className='bg-blue-600 text-white border p-3 ms-3 cursor-pointer'
        >
          Update
        </button>
      ) : (
        <button
          onClick={handleInsert}
          className='bg-green-600 text-white px-4 py-1 rounded'
        >
          Add
        </button>
      )}
      </div>
    </div>
  );
};



{/* <div className='w-full flex justify-center items-center mt-5'>
            <input type="Name" className='border border-black p-3' value={Name} onChange={(e)=>{
                setName(e.target.value)
            }} placeholder="Enter Author Name"/>
            <button className=' border p-3 ms-3 cursor-pointer'  onClick={handleSubmit}>Insert</button>
        </div> */}