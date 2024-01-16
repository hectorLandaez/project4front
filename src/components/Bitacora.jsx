import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const endpoint = "http://127.0.0.1:8000/api";

const Bitacora = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []); 

    const getAllUsers = async () => {
        try {
            const response = await axios.get(`${endpoint}/ShowBitacora`);
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return (
        <div className="flex">
          <Sidebar />
          <div className="w-7/12 mx-auto mt-10 p-6 bg-white border rounded-md shadow-md">
            <table className='min-w-full bg-white border border-gray-300'>
              <thead className='bg-primary text-white text-black'>
                <tr className='text-black'>
                  <th className='py-2 px-4 border-b'>CODIGO</th>
                  <th className='py-2 px-4 border-b'>MENSAJE</th>
                  <th className='py-2 px-4 border-b'>FECHA</th>
                  <th className='py-2 px-4 border-b'>HORA</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className='hover:bg-gray-100'>
                    <td className='py-2 px-4 border-b'>{user.codigo}</td>
                    <td className='py-2 px-4 border-b'>{user.mensaje}</td>
                    <td className='py-2 px-4 border-b'>{user.fecha}</td>
                    <td className='py-2 px-4 border-b'>{user.hora}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );
};

export default Bitacora;
