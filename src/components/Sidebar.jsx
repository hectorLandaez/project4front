import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/5 p-4">
      <h1 className="text-2xl font-bold mb-4">Sidebar</h1>
      <ul>
        <li className="mb-2">
          <Link to="/ShowUsers" className="hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/bitacora" className="hover:text-gray-300">
            Bitácora
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/paginas" className="hover:text-gray-300">
            Páginas
          </Link>
        </li>
        <li className="mb-2">
          <Link to="/roles" className="hover:text-gray-300">
            Roles
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
