import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePagina = () => {
  const navigate = useNavigate();
  const [paginaURL, setPaginaURL] = useState('');
  const [paginaName, setPaginaName] = useState('');
  const [paginaDescripcion, setPaginaDescripcion] = useState('');

  const store = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/create-Paginas', {
        URL: paginaURL,
        Name: paginaName,
        Descripcion: paginaDescripcion,
      });
  
      console.log('Response:', response.data); 
      
  
      navigate('/paginas');
    } catch (error) {
      console.error('Error creating pagina:', error);
  
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-6">Create Pagina</h3>
      <form onSubmit={store}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">URL</label>
          <input
            value={paginaURL}
            onChange={(e) => setPaginaURL(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input
            value={paginaName}
            onChange={(e) => setPaginaName(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Descripcion</label>
          <input
            value={paginaDescripcion}
            onChange={(e) => setPaginaDescripcion(e.target.value)}
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
          onClick={() => navigate('/paginas')}
        >
          Back
        </button>
      </form>
    </div>
  );
};

export default CreatePagina;
