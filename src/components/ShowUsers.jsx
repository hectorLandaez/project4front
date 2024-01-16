import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const endpoint = "http://127.0.0.1:8000/api";

const ShowUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${endpoint}/usuarios`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${endpoint}/usuarios/${id}`);
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
            to="/create"
            className="bg-green-500 text-white py-2 px-4 rounded-md"
          >
            Create
          </Link>
        </div>
        <table className="table-auto w-full">
          <thead className="bg-primary text-black ">
            <tr>
              <th className="p-2">ID</th>
              <th className="p-2">Email</th>
              <th className="p-2">Habilitado</th>
              <th className="p-2">Fecha de Creación</th>
              <th className="p-2">Última Modificación</th>
              <th className="p-2">Hablitar</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.idpersona}>
                <td className="p-2">{user.idpersona}</td>
                <td className="p-2">{user.nombreDeUsuario}</td>
                <td className="p-2">{user.habilitado}</td>
                <td className="p-2">{new Date(user.created_at).toLocaleDateString()}</td>
                <td className="p-2">{new Date(user.updated_at).toLocaleDateString()}</td>
                <td className="p-2"><button>habilitar</button></td>
                <td className="p-2">
                  <Link
                    to={`/edit/${user.idpersona}`}
                    className="bg-yellow-500 text-white py-1 px-2 rounded-md mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.idpersona)}
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

export default ShowUsers;
