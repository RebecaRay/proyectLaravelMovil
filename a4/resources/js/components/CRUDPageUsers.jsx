import Form from 'react-bootstrap/Form';
import React from "react";
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Context } from '../Context';


function CRUDPageUsers() {
  const [Cusers, setUsers] = useState([]);
  const { token } = useContext(Context);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchRole, setSearchRole] = useState('');
  const [searchId, setSearchId] = useState('');

  function getAll() {
    axios.get("http://localhost/a4/a4/public/api/users/all",
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      setUsers(response.data.data);
      //console.log(response.data.data);
    })
  }

  function deleteUser(id) {
    axios.delete(`http://localhost/a4/a4/public/api/users/id/delete/${id}`,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      }
    ).then(response => {
      getAll()
      swal("Usuario eliminado", response.data.data);
    })
  }

  useEffect(() => {
    getAll()
  }, [])


  const filteredUsers = Cusers.filter(user => {
    const searchTermsLower = searchTerm.toLowerCase();
    const searchRoleLower = searchRole.toLowerCase();
    const searchIdLower = searchId.toLowerCase();

    return (
      (searchRoleLower === '' || user.role.toString().includes(searchRoleLower)) &&
      (
        (searchIdLower === '' || user.id.toString().includes(searchIdLower)) &&
        (
          user.name.toLowerCase().includes(searchTermsLower) ||
          user.lastnameF.toLowerCase().includes(searchTermsLower) ||
          user.lastnameM.toLowerCase().includes(searchTermsLower) ||
          user.address.toLowerCase().includes(searchTermsLower) ||
          user.email.toLowerCase().includes(searchTermsLower) ||
          user.phoneNum.toString().includes(searchTermsLower) ||
          user.payMeth.toLowerCase().includes(searchTermsLower)
        )
      )
    );
  });

  return (
    <div>
      <h2 className="mb-4" style={{ fontSize: '1.5rem', paddingTop: '20px', paddingBottom: '20px' }}>Tabla de Usuarios
        <button style={{ position: "relative", float: "right", top: "20px", right: "30px" }} className='btn btn-primary add-btn'>
          <Nav.Link as={Link} to={`/a4/a4/public/UserCreate`}><Icon.Plus></Icon.Plus> Agregar</Nav.Link>

        </button>
      </h2>

      <div className="mb-3">
        <label htmlFor="searchTerm" className="form-label">Buscar por nombre, apellido, dirección, correo, teléfono, método de pago:</label>
        <input
          type="text"
          className="form-control"
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="searchRole" className="form-label">Buscar por rol. 1.- Admin. 2.- Usuario normal:</label>
        <input
          type="text"
          className="form-control"
          id="searchRole"
          value={searchRole}
          onChange={(e) => setSearchRole(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="searchId" className="form-label">Buscar por ID:</label>
        <input
          type="text"
          className="form-control"
          id="searchId"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
      </div>

      <table style={{ margin: "0", padding: "0" }} className="table table-striped cat-tbl">
        <thead>
          <tr>
            <th>ID Usuario</th>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Dirección</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Método pago</th>
            <th>Rol</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((users, index) => (
            <tr key={index}>
              <td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.lastnameF}</td>
              <td>{users.lastnameM}</td>
              <td>{users.address}</td>
              <td>{users.email}</td>
              <td>{users.phoneNum}</td>
              <td>{users.payMeth}</td>
              <td>{users.role}</td>
              <td><Nav.Link as={Link} to={`/a4/a4/public/UserEdit/${users.id}`}><Icon.Pencil /></Nav.Link></td>
              <td style={{ cursor: 'pointer' }} onClick={() => deleteUser(users.id)}><Icon.Trash /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CRUDPageUsers;