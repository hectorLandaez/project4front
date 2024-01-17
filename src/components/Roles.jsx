import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const endpoint = "http://127.0.0.1:8000/api";

const Roles = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getAllRoles();
  }, []);

  const getAllRoles = async () => {
    try {
      const response = await axios.get(`${endpoint}/Rol`);
      setRoles(response.data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  const handleCambiarEstado = async (id, estadoActual) => {
    try {
      const response = await axios.put(`${endpoint}/cambiar-estado-rol/${id}`, {
        nuevoEstado: estadoActual === "activo" ? "inactivo" : "activo",
      });
    } catch (error) {
      console.error("Error cambiando estado del rol:", error);
      if (error.response) {
        console.error("Respuesta del servidor:", error.response.data);
      }
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-7/12 mx-auto mt-10 p-6 bg-white border rounded-md shadow-md">
        <div className="flex justify-end mb-4">
          <a
            className="bg-green-500 text-white py-2 px-4 rounded-md"
            href="/create-role"
          >
            Crear
          </a>
        </div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-primary  text-black">
            <tr>
              <th className="py-2 px-4 border-b">CODIGO</th>
              <th className="py-2 px-4 border-b">ROL</th>
              <th className="py-2 px-4 border-b">Estado</th>
              <th className="py-2 px-4 border-b">FECHA</th>
              <th className="py-2 px-4 border-b">HORA</th>
              <th className="py-2 px-4 border-b">Cambiar Estado</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{role.id}</td>
                <td className="py-2 px-4 border-b">{role.rol}</td>
                <td className="py-2 px-4 border-b">{role.estado}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(role.created_at).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b">
                  {new Date(role.updated_at).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    type="submit"
                    onClick={async () => {
                      await handleCambiarEstado(role.id, role.estado);
                      window.location.reload();
                    }}
                    className={`py-1 px-2 rounded-md ${
                      role.estado === "activo" ? "bg-red-500" : "bg-green-500"
                    } text-white`}
                  >
                    {role.estado === "activo" ? "Desactivar" : "Activar"}
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

export default Roles;
