import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api/usuarios/";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [sNombre, setsegundoNombre] = useState("");
  const [sApellido, setsegundoApellido] = useState("");
  const [email, setemail] = useState("");
  const [userRol, setuserRol] = useState('');


  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}${id}`, {
      primernombre: nombre,
      primerapellido: apellido,
      segundonombre: sNombre,
      segundoapellido: sApellido, 
      idrol:userRol
    });
    navigate(`/ShowUsers`)
  };

  useEffect(() => {
    const getrolById = async () => {
      const response = await axios.get(`${endpoint}${id}`);
      setuserRol(response.data.idrol); 
    };
    const getUserById = async () => {
      const response = await axios.get(`${endpoint}email/${id}`)
      setNombre(response.data.primernombre);
      setApellido(response.data.primerapellido);
      setsegundoNombre(response.data.segundonombre);
      setsegundoApellido(response.data.segundoapellido);
    }
    getUserById();
    getrolById();
  }, [id]);

  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Editar Usuario</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">Primer Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">Segundo Nombre</label>
          <input
            value={sNombre}
            onChange={(e) => setsegundoNombre(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">Primer Apellido</label>
          <input
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">Segundo Apellido</label>
          <input
            value={sApellido}
            onChange={(e) => setsegundoApellido(e.target.value)}
            type="text"
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
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mr-2">
          Update
        </button>
        <button
          type="button"
          className="bg-gray-300 text-gray-700 p-2 rounded-md"
          onClick={() => navigate(`/ShowUsers`)}>
          Back
        </button>
      </form>
    </div>
  );
};


export default EditUser;
