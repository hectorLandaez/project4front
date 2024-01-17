import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/Paginas/";

const EditPagina = () => {
  const { idpersona } = useParams();
  const navigate = useNavigate();

  const [URL, setUrl] = useState("");
  const [name, setName] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${idpersona}`, {
        URL: URL,
        name: name,
        descripcion: descripcion,
    });
    navigate(`/paginas`)
  };

  useEffect(() => {
    const getUserById = async () => {
      const response = await axios.get(`${endpoint}${idpersona}`);
      setUrl(response.data.URL);
      setName(response.data.name);
      setDescripcion(response.data.descripcion);
      console.log(URL)
    };
    getUserById();
  }, [idpersona]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Editar Usuario</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">URL</label>
          <input
            value={URL}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">Nombre de la pagina</label>
          <input
            value={name}
            onChange={(e) => setsegundoNombre(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">Description</label>
          <input
            value={descripcion}
            onChange={(e) => setApellido(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mr-2">
          Update
        </button>
        <button
          type="button"
          className="bg-gray-300 text-gray-700 p-2 rounded-md"
          onClick={() => navigate(`/paginas`)}>
          Back
        </button>
      </form>
    </div>
  );
};


export default EditPagina;
