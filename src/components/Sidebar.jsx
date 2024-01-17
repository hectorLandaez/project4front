import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {

      localStorage.removeItem('token');

      navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <div className="bg-gray-800 text-white h-screen w-1/5 p-4">
      <h1 className="text-2xl font-bold mb-4 mt-10">ADMINISTRAR</h1>
      <hr></hr>
      <ul className='mt-10'>
        <li className="mb-2 hover:bg-gray-700 p-2">
          <Link to="/ShowUsers" className="hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li className="mb-2 hover:bg-gray-700 p-2">
          <Link to="/bitacora" className="hover:text-gray-300">
            Bitácora
          </Link>
        </li>
        <li className="mb-2 hover:bg-gray-700 p-2">
          <Link to="/paginas" className="hover:text-gray-300">
            Páginas
          </Link>
        </li>
        <li className="mb-2 hover:bg-gray-700 p-2">
          <Link to="/roles" className="hover:text-gray-300">
            Roles
          </Link>
        </li>
        <li className="mb-2">
          <button className="bg-blue-500 text-white p-2 rounded-md mb-4" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
