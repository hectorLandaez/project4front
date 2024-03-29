import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRol, setuserRol] = useState('');
  const [userPermisos, setuserPermisos] = useState('');




  const store = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://127.0.0.1:8000/api/auth/register', {
        name: userName,
        email: userEmail,
        password: userPassword,
      });

      navigate('/ShowUsers');
    } catch (error) {
      console.error('Error creating user:', error);

      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Create User</h3>
      <form onSubmit={store}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Rol Number</label>
          <input
            value={userRol}
            onChange={(e) => setuserRol(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Habilitado</label>
          <input
            value={userPermisos}
            onChange={(e) => setuserPermisos(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mr-2">
          Create
        </button>
        <button
          type="button"
          className="bg-gray-300 text-gray-700 p-2 rounded-md"
          onClick={() => navigate('/ShowUsers')}
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
