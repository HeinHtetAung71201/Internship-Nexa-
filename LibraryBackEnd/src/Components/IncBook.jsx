import { useEffect, useState } from 'react';

export const IncBook = () => {
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch Authors
    fetch('http://localhost:5000/auther/getAll')
  .then(res => res.json())
  .then(data => {
    console.log("Authors API Response:", data);
    if (Array.isArray(data.authers)) {
      setAuthors(data.authers); // ✅ Correct key
    } else {
      setAuthors([]);
    }
  })
  .catch(err => {
    console.error("Error fetching authors:", err);
    setAuthors([]);
  });
  }, []);


    // Fetch Categories
  useEffect(() => {
   fetch('http://localhost:5000/category/getAll')
  .then(res => res.json())
  .then(data => {
    console.log("Categories API Response:", data);
    if (Array.isArray(data.categories)) {
      setCategories(data.categories);
    } else {
      setCategories([]);
    }
  })
  .catch(err => {
    console.error("Error fetching categories:", err);
    setCategories([]);
  });

  }, []);


  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    auther: '',
    category: ''
  });

  // State for feedback
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch('http://localhost:5000/book/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Book added successfully!');
        alert('Book added successfully!');
        setFormData({ name: '', auther: '', category: '' });
      } else {
        setMessage(data.message || 'Failed to add book.');
      }
    } catch (err) {
      setMessage('Error adding book.');
    }
  };

  return (
    <div className="w-full flex justify-center items-center mt-8 flex-col">
      <h2 className="text-2xl font-bold mb-6">Add New Book</h2>
      <form className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <div className="flex items-center">
            <label className="w-32 text-right mr-4 font-medium" htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex items-center">
            <label className="w-32 text-right mr-4 font-medium" htmlFor="auther">Author:</label>
            <select
              id="auther"
              name="auther"
              required
              value={formData.auther}
              onChange={handleChange}
              className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" className=''>Select author</option>
             {authors.map((author, idx) => (
              <option key={author._id || idx} value={author._id}>
                {author.name || "Unnamed Author"}
              </option>
            ))}

            </select>
          </div>
          <div className="flex items-center">
            <label className="w-32 text-right mr-4 font-medium" htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select category</option>
              {categories.map(category => (
                <option key={category._id} value={category._id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="border px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Add Book
            </button>
          </div>
          
        </div>
      </form>
      
    </div>
  );
};
