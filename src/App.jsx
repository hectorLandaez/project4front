import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './components/EditUser';
import ShowUsers from './components/ShowUsers';
import CreateUser from './components/CreateUser'
import Login from './components/Login';
import UserDetails from './components/UserDetails';
import Bitacora from './components/bitacora';
import Roles from './components/Roles';
import CreateRol from './components/CreateRol';
import Paginas from './components/Paginas';
import CreatePagina from './components/CreatePagina';
import EditPagina from './components/editPaginas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ShowUsers" element={<ShowUsers />} /> 
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/user-details/:id" element={<UserDetails />} />
          <Route path="/bitacora" element={<Bitacora />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/create-role" element={<CreateRol />} />
          <Route path="/paginas" element={<Paginas/>} />
          <Route path="/CreatePagina" element={<CreatePagina/>} />
          <Route path="/EditPagina/:id" element={<EditPagina/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;