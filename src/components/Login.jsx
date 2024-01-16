import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      console.log('Antes de axios.post');
  
      const response = await axios.post('http://127.0.0.1:8000/api/auth/login', {
        email: userEmail,
        password: userPassword,
      });
  
      console.log('Después de axios.post', response.data);
  
      const { token, user } = response.data;
  
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
  
      navigate(`/user-details/${user.id}`);

 
    }  catch (error) {
      if (error.response && error.response.status === 429) {
        console.error('Demasiadas solicitudes. Inténtalo de nuevo más tarde.');
      } else {
        console.error('Error de inicio de sesión:', error);
      }
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Login</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            type="email"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            type="password"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

