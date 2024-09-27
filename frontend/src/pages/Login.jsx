import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard'); // Redirect after login
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          className="border border-gray-300 p-2 rounded w-full mb-4"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          className="border border-gray-300 p-2 rounded w-full mb-6"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
