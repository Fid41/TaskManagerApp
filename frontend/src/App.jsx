import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TaskDashboard from './pages/TaskDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<PrivateRoute><TaskDashboard /></PrivateRoute>} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
