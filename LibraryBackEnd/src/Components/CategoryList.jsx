import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Categories } from './Categories';

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [editCategory, setEditCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios.get('http://localhost:5000/category/getAll')
      .then((res) => setCategories(res.data.categories || []))
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this category?')) {
      axios.delete(`http://localhost:5000/category/delete/${id}`)
        .then(fetchCategories)
        .catch(err => alert('Delete failed: ' + err.message));
    }
  };

  const handleEditClick = (category) => {
    setEditCategory(category);
  };

  return (
    <>
      <Categories category={editCategory} onUpdate={fetchCategories} />

      <div className='w-full flex justify-center items-center mt-5 '>
        <div className='w-90 p-5 border border-black rounded'>
          <div className='CategoryLists text-center font-bold text-lg mb-3 border-b-2'>Category Lists</div>
          <ul className='flex flex-col'>
            {categories.map((category) => (
              <li key={category._id} className='mt-2'>
                <div className='flex justify-between items-center'>
                  <div>{category.name}</div>
                  <div className='flex gap-2'>
                    <button
                      className='border px-2 text-red-600'
                      onClick={() => handleDelete(category._id)}
                    >
                      Del
                    </button>
                    <button
                      className='border px-2 text-blue-600'
                      onClick={() => handleEditClick(category)}
                    >
                      Update
                    </button>
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
