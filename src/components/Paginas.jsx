import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const endpoint = "http://127.0.0.1:8000/api";

const Paginas = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${endpoint}/Paginas`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${endpoint}/Paginas/${id}`);
      getAllUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-7/12 mx-auto mt-10 p-6 bg-white border rounded-md shadow-md">
        <div className="flex justify-end mb-4">
          <Link
            to="/CreatePagina"
            className="bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Create
          </Link>
        </div>
        <table className="table-auto w-full">
          <thead className="bg-primary text-black ">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">URL</th>
              <th className="p-2">Nombre de la pagina</th>
              <th className="p-2">Descripcion</th>
              <th className="p-2">Creado</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="p-2">{user.id}</td>
                <td className="p-2">{user.URL}</td>
                <td className="p-2">{user.Name}</td>
                <td className="p-2">{user.Descripcion}</td>
                <td className="p-2">{new Date(user.created_at).toLocaleDateString()}</td>
                <td className="p-2">
                  <Link
                    to={`/EditPagina/${user.id}`}
                    className="bg-yellow-500 text-white py-1 px-2 rounded-md mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Paginas;
