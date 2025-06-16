import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Categories = ({ category, onUpdate }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (category) {
      setName(category.name);
    } else {
      setName('');
    }
  }, [category]);

  const handleInsert = () => {
    if (!name.trim()) return alert("Name is required");

    axios.post('http://localhost:5000/category/create', { name })
      .then(() => {
        alert('Category inserted');
        setName('');
        onUpdate();
      })
      .catch((err) => {
        alert('Insert failed: ' + err.message);
      });
  };

  const handleUpdate = () => {
    if (!category || !name.trim()) return alert("Category ID and name are required");

    axios.put(`http://localhost:5000/category/update/${category._id}`, { name })
      .then(() => {
        alert('Category updated');
        setName('');
        onUpdate();
      })
      .catch((err) => {
        alert('Update failed: ' + err.message);
      });
  };

  return (
    <div className='w-full flex justify-center items-center mt-5 flex-col'>
      <h2 className='text-lg font-bold mb-2'>
        {category ? 'Edit Category' : 'Add New Category'}
      </h2>

      <div className='flex justify-between gap-3'>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter category name'
          className='border border-black p-3 rounded'
        />

        {category ? (
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
