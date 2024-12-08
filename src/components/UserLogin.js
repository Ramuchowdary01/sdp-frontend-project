import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './userLogin.css';

const UserLogin = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  // Handle input changes and update state
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to the API
      const response = await axios.post('/api/users/login', loginData);
      alert(response.data.message);

      // Check user role and navigate accordingly
      if (response.data.role === 'admin') {
        navigate('/register');
      } else if (response.data.role === 'student') {
        navigate('/student-dashboard');
      } else if (response.data.role === 'teacher') {
        navigate('/teacher-dashboard');
      }

      // Store user data in localStorage for authentication
      localStorage.setItem('user', JSON.stringify(response.data));
    } catch (error) {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;