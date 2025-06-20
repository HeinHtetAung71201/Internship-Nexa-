import { useState } from 'react';
import { Link } from 'react-router-dom';

export const AuthenForm = ({ type = 'signin', onSubmit }) => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
  };

  const isSignup = type === 'signup';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl px-8 pt-8 pb-10 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {isSignup ? 'Create Account' : 'Sign In'}
        </h2>

        {isSignup && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
              className="mt-1 px-3 py-2 w-full border rounded-lg shadow-sm focus:ring focus:ring-blue-400 outline-none"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            className="mt-1 px-3 py-2 w-full border rounded-lg shadow-sm focus:ring focus:ring-blue-400 outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
            className="mt-1 px-3 py-2 w-full border rounded-lg shadow-sm focus:ring focus:ring-blue-400 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          {isSignup ? 'Sign Up' : 'Sign In'}
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <Link
            to={isSignup ? '/signin' : '/signup'}
            className="text-blue-600 hover:underline"
          >
            {isSignup ? 'Sign In' : 'Sign Up'}
          </Link>
        </p>
      </form>
    </div>
  );
};
