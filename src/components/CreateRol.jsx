import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateRol = () => {
  const navigate = useNavigate();
  const [userRol, setuserRol] = useState('');
  const [userPermisos, setuserPermisos] = useState('');

  const createRole = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://127.0.0.1:8000/api/create-role', {
        rol: userRol,
        estado: userPermisos, // Considerando que 'estado' es equivalente a 'Habilitado'
      });

      navigate('/ShowUsers');
    } catch (error) {
      console.error('Error creating role:', error);

      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Create Role</h3>
      <form onSubmit={createRole}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Rol</label>
          <input
            value={userRol}
            onChange={(e) => setuserRol(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
  <label className="block text-sm font-medium text-gray-600">Habilitado</label>
  <select
    value={userPermisos}
    onChange={(e) => setuserPermisos(e.target.value)}
    className="mt-1 p-2 w-full border rounded-md"
  >
    <option value="activar">Activo</option>
    <option value="desactivar">Inactivo</option>
  </select>
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

export default CreateRol;
