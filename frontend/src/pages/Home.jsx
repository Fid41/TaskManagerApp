import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="text-center">
        <h1 className="text-white text-4xl font-bold mb-4">Task Manager</h1>
        <p className="text-white text-lg mb-8">
          Organize your tasks and boost productivity.
        </p>
        <div className="flex flex-col space-y-2"> {/* Flex column with space between */}
          <Link to="/login">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition">
              Get Started
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
