import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/usuarios/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserData(response.data);
      } catch (error) {
        console.error('Error al obtener detalles del usuario:', error);
      }
    };

    fetchUserData();
  }, [id, navigate]);


  if (!userData) {
    return <div>Cargando...</div>;
  }

  const handleLogout = async () => {
    try {
      /* const token = localStorage.getItem('token');
      await axios.post('http://127.0.0.1:8000/api/auth/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });  */
      
      localStorage.removeItem('token');
      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  if (!userData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-md shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Detalles del Usuario</h3>
      <p className="mb-2">Username: {userData.nombreDeUsuario}</p>
      <p className="mb-2">Nombres: {userData.primernombre + ' ' + userData.segundonombre}</p>
      <p className="mb-2">Apellidos: {userData.primerapellido + ' ' + userData.segundoapellido}</p>
      <p className="mb-2">Email: {userData.email}</p>
      <p className="mb-2">Contraseña: ********</p>
      <button className="bg-blue-500 text-white p-2 rounded-md mb-4" onClick={handleLogout}>
        Logout
      </button>
      <div>
      <a className="text-blue-500 hover:underline mr-4" href={`/edit/${userData.idpersona}`}>
        Editar
      </a>
      
        <a className="text-blue-500 hover:underline" href="/ShowUsers">
          Dashboard
        </a>


      </div>
    </div>
  );
};

export default UserDetails;
